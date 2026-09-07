"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { createMaskReveal, registerGsap } from "@/animations/gsap";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MaskRevealProps = {
  children: ReactNode;
  className?: string;
};

export function MaskReveal({ children, className }: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;
    registerGsap();
    const tween = createMaskReveal(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
    return () => {
      tween.kill();
    };
  }, [reduced]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {children}
    </div>
  );
}
