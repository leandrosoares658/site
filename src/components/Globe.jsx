import { useEffect, useRef } from 'react';
import { geoOrthographic, geoPath, geoGraticule10, geoInterpolate, geoDistance } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import world from 'world-atlas/countries-110m.json';
import './Globe.css';

const BRAZIL_ID = '076';
const HOME = [-43.86, -16.73]; // Montes Claros, MG
const ITALY = [11.99, 45.6]; // FAT na Itália
const CENTER = [-16, 8]; // ponto que o globo mantém de frente

const countries = feature(world, world.objects.countries).features;
const borders = mesh(world, world.objects.countries, (a, b) => a !== b);
const brazil = countries.find((c) => c.id === BRAZIL_ID);
const graticule = geoGraticule10();
const interp = geoInterpolate(HOME, ITALY);
const arc = { type: 'LineString', coordinates: Array.from({ length: 64 }, (_, i) => interp(i / 63)) };

export default function Globe() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const projection = geoOrthographic().clipAngle(90).precision(0.4);
    const path = geoPath(projection, ctx);
    let size = 0;
    let raf;
    let drag = null;
    let offset = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = canvas.offsetWidth;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      projection.scale(size / 2 - 6).translate([size / 2, size / 2]);
    };

    const render = (t = 0) => {
      const sway = reduce ? 0 : Math.sin(t * 0.00018) * 32;
      const lambda = -CENTER[0] + sway + offset;
      projection.rotate([lambda, -CENTER[1]]);
      const center = [-lambda, CENTER[1]];
      const r = projection.scale();
      const c = size / 2;

      ctx.clearRect(0, 0, size, size);

      const ocean = ctx.createRadialGradient(c - r * 0.35, c - r * 0.4, r * 0.1, c, c, r);
      ocean.addColorStop(0, '#2a2168');
      ocean.addColorStop(1, '#100c2b');
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.fillStyle = ocean;
      ctx.fill();

      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = 'rgba(205, 190, 255, 0.07)';
      ctx.lineWidth = 0.6;
      ctx.stroke();

      ctx.beginPath();
      countries.forEach((f) => f !== brazil && path(f));
      ctx.fillStyle = '#342a78';
      ctx.fill();

      ctx.beginPath();
      path(brazil);
      ctx.fillStyle = '#8b6dff';
      ctx.fill();

      ctx.beginPath();
      path(borders);
      ctx.strokeStyle = 'rgba(13, 10, 34, 0.55)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.beginPath();
      path(arc);
      ctx.setLineDash([5, 5]);
      ctx.lineDashOffset = reduce ? 0 : -t * 0.02;
      ctx.strokeStyle = 'rgba(231, 198, 107, 0.9)';
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.setLineDash([]);

      [HOME, ITALY].forEach((coords, i) => {
        if (geoDistance(coords, center) > Math.PI / 2 - 0.05) return;
        const [x, y] = projection(coords);
        const pulse = reduce ? 0.5 : ((t * 0.0006 + i * 0.5) % 1);
        ctx.beginPath();
        ctx.arc(x, y, 4 + pulse * 14, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(231, 198, 107, ${0.8 * (1 - pulse)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, i === 0 ? 4 : 3, 0, Math.PI * 2);
        ctx.fillStyle = '#e7c66b';
        ctx.fill();
      });

      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.strokeStyle = 'rgba(205, 190, 255, 0.28)';
      ctx.lineWidth = 1;
      ctx.stroke();

      if (!reduce || drag) raf = requestAnimationFrame(render);
    };

    const onDown = (e) => {
      drag = { x: e.clientX, start: offset };
      canvas.setPointerCapture(e.pointerId);
      if (reduce) raf = requestAnimationFrame(render);
    };
    const onMove = (e) => {
      if (!drag) return;
      offset = drag.start + (e.clientX - drag.x) * 0.35;
    };
    const onUp = () => {
      drag = null;
    };

    resize();
    render();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) render();
    });
    ro.observe(canvas);
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointercancel', onUp);
    };
  }, []);

  return (
    <figure className="globe">
      <canvas
        ref={ref}
        className="globe__canvas"
        role="img"
        aria-label="Globo com o Brasil em destaque e uma rota entre Montes Claros e a Itália"
      />
      <figcaption className="globe__legend">
        <span><i className="globe__dot" /> Montes Claros, MG</span>
        <span><i className="globe__dash" /> Rota do FAT na Itália</span>
      </figcaption>
    </figure>
  );
}
