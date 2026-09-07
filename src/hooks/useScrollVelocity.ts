"use client";

import { useEffect, useState } from "react";

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    let lastT = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dy = window.scrollY - lastY;
      const dt = Math.max(now - lastT, 1);
      setVelocity(dy / dt);
      lastY = window.scrollY;
      lastT = now;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return velocity;
}
