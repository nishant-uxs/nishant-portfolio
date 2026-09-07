"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsap } from "@/animations/gsap";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ScrollPinProps = {
  children: ReactNode;
  className?: string;
  scrub?: number | boolean;
};

/** Pins section and scrubs children opacity/scale like agency sites */
export function ScrollPin({ children, className, scrub = 1 }: ScrollPinProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;
    registerGsap();
    const inner = ref.current.querySelector("[data-pin-inner]");
    if (!inner) return;

    const tween = gsap.fromTo(
      inner,
      { scale: 0.92, opacity: 0.35, filter: "blur(8px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub,
        },
      },
    );

    return () => {
      tween.kill();
    };
  }, [reduced, scrub]);

  return (
    <div ref={ref} className={cn(className)}>
      <div data-pin-inner>{children}</div>
    </div>
  );
}
