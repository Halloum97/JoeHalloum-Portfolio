"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type Dot = { x: number; y: number; vx: number; vy: number; r: number };

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dots: Dot[] = [];
    const maxDots = 48;

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const init = () => {
      dots.length = 0;
      for (let i = 0; i < maxDots; i++) {
        dots.push({
          x: rand(0, window.innerWidth),
          y: rand(0, window.innerHeight),
          vx: rand(-0.08, 0.08),
          vy: rand(-0.06, 0.06),
          r: rand(0.6, 1.6),
        });
      }
    };

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Barely-visible particles
      ctx.fillStyle = "rgba(255,255,255,0.055)";
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < -10) d.x = window.innerWidth + 10;
        if (d.x > window.innerWidth + 10) d.x = -10;
        if (d.y < -10) d.y = window.innerHeight + 10;
        if (d.y > window.innerHeight + 10) d.y = -10;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(tick);
    };

    resize();
    init();
    raf = requestAnimationFrame(tick);

    window.addEventListener("resize", () => {
      resize();
      init();
    });
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-60"
    />
  );
}
