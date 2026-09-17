import { useEffect, useRef } from 'react';

export default function Starfield() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let stars = [];
    let raf;
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 5200);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.2,
        base: Math.random() * 0.5 + 0.15,
        speed: Math.random() * 0.8 + 0.2,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t = 0) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const twinkle = reduce ? 1 : 0.6 + 0.4 * Math.sin(t * 0.001 * s.speed + s.phase);
        ctx.globalAlpha = s.base * twinkle;
        ctx.fillStyle = '#e4dcff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
}
