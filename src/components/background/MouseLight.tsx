"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export function MouseLight() {
  const { x, y } = useMousePosition(true);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      style={{
        background: `radial-gradient(520px circle at ${x}px ${y}px, rgba(79,125,255,0.12), transparent 45%)`,
      }}
    />
  );
}
