"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type InfiniteMarqueeProps = {
  items: readonly string[];
  className?: string;
  speed?: number;
  reverse?: boolean;
};

export function InfiniteMarquee({
  items,
  className,
  speed = 40,
  reverse = false,
}: InfiniteMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const doubled = [...items, ...items, ...items];

  useEffect(() => {
    if (!trackRef.current || reduced) return;
    const tween = gsap.to(trackRef.current, {
      xPercent: reverse ? 33.333 : -33.333,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [reduced, reverse, speed]);

  return (
    <div className={cn("relative overflow-hidden py-3", className)}>
      <div ref={trackRef} className="flex w-max gap-8 will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-8 font-heading text-3xl tracking-tight text-white/25 md:text-5xl"
          >
            {item}
            <span className="text-violet-400/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
