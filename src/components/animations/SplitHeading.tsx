"use client";

import { useEffect, useRef } from "react";
import { splitTextToChars } from "@/animations/text";
import { createRevealTween, registerGsap } from "@/animations/gsap";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type SplitHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
};

export function SplitHeading({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  const chars = splitTextToChars(text);

  useEffect(() => {
    if (!ref.current || reduced) return;
    registerGsap();
    const targets = ref.current.querySelectorAll(".char");
    const tween = createRevealTween(targets, {
      delay,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
    return () => {
      tween.kill();
    };
  }, [delay, reduced, text]);

  return (
    <Tag ref={ref} className={cn("font-heading", className)} aria-label={text}>
      {chars.map(({ char, index }) => (
        <span key={`${char}-${index}`} className="inline-block overflow-hidden">
          <span
            className={cn("char", reduced && "opacity-100")}
            style={reduced ? undefined : { opacity: 0 }}
          >
            {char}
          </span>
        </span>
      ))}
    </Tag>
  );
}
