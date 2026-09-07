"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** OpenLabs-style volumetric light streak that follows mouse softly */
export function LightStreak() {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;
    ref.current.style.setProperty("--mx", `${mouse.x}px`);
    ref.current.style.setProperty("--my", `${mouse.y}px`);
  }, [mouse.x, mouse.y, reduced]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      <div
        className="absolute -left-1/4 top-[-20%] h-[140%] w-[55%] rotate-[-28deg] opacity-70 blur-[60px]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(79,125,255,0.22) 35%, rgba(123,97,255,0.12) 55%, transparent 85%)",
          transform: reduced
            ? undefined
            : "translate3d(calc(var(--mx, 50vw) * 0.02), calc(var(--my, 50vh) * 0.015), 0) rotate(-28deg)",
          transition: "transform 0.6s ease-out",
        }}
      />
      <div
        className="nx-animate-glow absolute right-[-10%] top-[10%] h-[50vmax] w-[30vmax] rounded-full opacity-50 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(79,125,255,0.28), transparent 65%)",
        }}
      />
    </div>
  );
}
