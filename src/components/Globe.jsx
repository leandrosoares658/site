import { useEffect, useRef } from 'react';
import { geoOrthographic, geoPath, geoInterpolate, geoDistance } from 'd3-geo';
import { merge } from 'topojson-client';
import world from 'world-atlas/countries-110m.json';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Globe.css';

const HOME = [-43.86, -16.73]; // Montes Claros, MG
const CENTER = [-10, 10]; // ponto que o globo mantém de frente

// Conexões que dão a sensação de alcance internacional.
const DESTINATIONS = [
  { name: 'Itália', coords: [12.5, 41.9] },
  { name: 'Alemanha', coords: [13.4, 52.52] },
  { name: 'Rússia', coords: [37.62, 55.75] },
  { name: 'China', coords: [116.4, 39.9] },
  { name: 'Estados Unidos', coords: [-74.0, 40.71] },
  { name: 'Colômbia', coords: [-74.08, 4.71] },
];

// Um único contorno de terra (sem fronteiras entre países) — igual a um
// ícone de globo em tons de cinza, sem linhas dividindo continentes.
const land = merge(world, world.objects.countries.geometries);

const arcs = DESTINATIONS.map((d) => {
  const interp = geoInterpolate(HOME, d.coords);
  return {
    ...d,
    line: { type: 'LineString', coordinates: Array.from({ length: 64 }, (_, i) => interp(i / 63)) },
  };
});

export default function Globe() {
  const { t } = useLanguage();
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

      // continentes num único bloco cinza (sem linha entre países, sem oceano preenchido)
      const landFill = ctx.createLinearGradient(c - r * 0.6, c - r * 0.6, c + r * 0.6, c + r * 0.6);
      landFill.addColorStop(0, '#C2C2C2');
      landFill.addColorStop(1, '#8A8A8A');
      ctx.beginPath();
      path(land);
      ctx.fillStyle = landFill;
      ctx.fill();

      // esmaecer as bordas do globo — apaga pixels (não pinta branco), então
      // funciona sobre qualquer cor de fundo da página
      ctx.save();
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.clip();
      ctx.globalCompositeOperation = 'destination-out';
      const rimFade = ctx.createRadialGradient(c, c, r * 0.72, c, c, r);
      rimFade.addColorStop(0, 'rgba(0, 0, 0, 0)');
      rimFade.addColorStop(1, 'rgba(0, 0, 0, 0.92)');
      ctx.fillStyle = rimFade;
      ctx.fillRect(c - r, c - r, r * 2, r * 2);
      ctx.restore();

      arcs.forEach((a) => {
        ctx.beginPath();
        path(a.line);
        ctx.setLineDash([5, 5]);
        ctx.lineDashOffset = reduce ? 0 : -t * 0.02;
        ctx.strokeStyle = 'rgba(20, 20, 20, 0.5)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.setLineDash([]);
      });

      [HOME, ...arcs.map((a) => a.coords)].forEach((coords, i) => {
        if (geoDistance(coords, center) > Math.PI / 2 - 0.05) return;
        const [x, y] = projection(coords);
        const pulse = reduce ? 0.5 : ((t * 0.0006 + i * 0.4) % 1);
        ctx.beginPath();
        ctx.arc(x, y, 4 + pulse * 14, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(20, 20, 20, ${0.7 * (1 - pulse)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, i === 0 ? 4 : 3, 0, Math.PI * 2);
        ctx.fillStyle = '#141414';
        ctx.fill();
      });

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
        aria-label={t.globe.ariaLabel}
      />
      <figcaption className="visually-hidden">
        {t.globe.home} — {t.globe.legend}
      </figcaption>
    </figure>
  );
}
