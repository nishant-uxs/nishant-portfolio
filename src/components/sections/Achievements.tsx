"use client";

import { achievementsData } from "@/data/content";
import { Reveal } from "@/components/animations/Reveal";
import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useCursor } from "@/providers/CursorProvider";

export function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { setMode } = useCursor();

  useEffect(() => {
    if (!ref.current || reduced) return;
    registerGsap();
    const cards = ref.current.querySelectorAll("[data-card]");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      },
    );
  }, [reduced]);

  return (
    <section id="achievements" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <h2 className="mb-14 font-heading text-5xl tracking-tight md:text-7xl">
            Achievements
          </h2>
        </Reveal>

        <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievementsData.map((item) => (
            <article
              key={item.label}
              data-card
              onMouseEnter={() => setMode("hover")}
              onMouseLeave={() => setMode("default")}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] md:p-8"
              style={reduced ? undefined : { opacity: 0 }}
            >
              <p className="font-heading text-4xl tracking-tight text-white md:text-5xl">
                {item.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
