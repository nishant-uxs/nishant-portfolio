"use client";

import { useEffect, useRef } from "react";
import { wrapLines } from "@/animations/text";
import { createLineReveal, registerGsap } from "@/animations/gsap";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type LineRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function LineReveal({ text, className, delay = 0 }: LineRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const lines = wrapLines(text, 48);

  useEffect(() => {
    if (!ref.current || reduced) return;
    registerGsap();
    const targets = ref.current.querySelectorAll(".line-inner");
    const tween = createLineReveal(targets, {
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
    <p ref={ref} className={cn(className)}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="line-mask">
          <span
            className="line-inner inline-block"
            style={reduced ? undefined : { opacity: 0 }}
          >
            {line}
          </span>
        </span>
      ))}
    </p>
  );
}
