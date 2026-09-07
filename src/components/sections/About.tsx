"use client";

import Image from "next/image";
import { aboutData, experienceData, person } from "@/data/content";
import { Reveal } from "@/components/animations/Reveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { useCursor } from "@/providers/CursorProvider";
import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Mohit-style doubled-letter scramble intro */
function DoubledText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;
    registerGsap();
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40, filter: "blur(8px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      },
    );
  }, [reduced, text]);

  const doubled = text
    .split("")
    .map((c) => (c === " " ? " " : `${c}${c}`))
    .join("");

  return (
    <p
      ref={ref}
      className="max-w-3xl text-lg leading-relaxed text-white/70 md:text-2xl"
      style={reduced ? undefined : { opacity: 0 }}
    >
      {doubled}
    </p>
  );
}

export function About() {
  const { setMode } = useCursor();
  const exp = experienceData[0];

  return (
    <section id="about" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <Reveal>
            <h2 className="font-heading text-5xl tracking-tight md:text-7xl">
              {aboutData.title}
            </h2>
          </Reveal>
          <DoubledText text={aboutData.body} />
          <div className="space-y-2 pt-2 font-mono text-xs tracking-[0.18em] text-white/45 uppercase">
            <p>
              {person.degree} · {person.university}
            </p>
            <p>
              CGPA {person.cgpa} · {person.educationPeriod}
            </p>
            <p>
              {exp.role} · {exp.org}
            </p>
          </div>
          <MagneticButton href="#contact">
            <span
              onMouseEnter={() => setMode("hover")}
              onMouseLeave={() => setMode("default")}
              className="inline-flex h-12 items-center rounded-full bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] px-7 text-sm font-medium text-white shadow-[0_0_30px_rgba(124,58,237,0.35)]"
            >
              Contact Me
            </span>
          </MagneticButton>
        </div>

        <Reveal y={60}>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
            <Image
              src={person.avatarPath}
              alt={`${person.name} profile`}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(5,5,5,0.55)_100%)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
