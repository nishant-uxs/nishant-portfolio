"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { person } from "@/data/content";
import { useThemeState } from "@/providers/ThemeProvider";
import { useCursor } from "@/providers/CursorProvider";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroAvatar = dynamic(
  () => import("@/three/HeroAvatar").then((m) => m.HeroAvatar),
  { ssr: false },
);

export function Hero() {
  const { ready } = useThemeState();
  const { setMode } = useCursor();
  const reduced = useReducedMotion();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ready || !titleRef.current || reduced) return;
    const chars = titleRef.current.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.15,
        stagger: 0.028,
        ease: "power4.out",
        delay: 0.2,
      },
    );
  }, [ready, reduced]);

  const title = `Hi, i'm ${person.firstName}`;

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[100svh] flex-col justify-between overflow-hidden px-4 pb-10 pt-28 md:px-8"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        {ready ? <HeroAvatar /> : null}
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_40%,transparent_20%,rgba(5,5,5,0.55)_70%,#050505_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <h1
          ref={titleRef}
          aria-label={title}
          className="max-w-[18ch] font-heading text-[clamp(3.8rem,12vw,9.5rem)] leading-[0.88] tracking-[-0.05em] text-white/[0.14] mix-blend-difference md:text-white/20"
        >
          {title.split("").map((char, i) => (
            <span key={`${char}-${i}`} className="inline-block overflow-hidden align-bottom">
              <span
                className="char inline-block"
                style={reduced ? undefined : { opacity: 0 }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </h1>
      </div>

      <div className="relative z-10 mx-auto mt-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <motion.p
          className="max-w-md font-mono text-[11px] leading-relaxed tracking-[0.18em] text-white/60 uppercase md:text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {person.tagline}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.8 }}
        >
          <MagneticButton href="#contact" cursor="arrow">
            <span className="inline-flex h-12 items-center rounded-full bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#60a5fa] px-7 text-sm font-medium text-white shadow-[0_0_40px_rgba(124,58,237,0.45)] transition hover:scale-[1.03]">
              Contact Me
            </span>
          </MagneticButton>
          <MagneticButton href={person.resumePath}>
            <span
              onMouseEnter={() => setMode("hover")}
              onMouseLeave={() => setMode("default")}
              className="inline-flex h-12 items-center rounded-full border border-white/15 bg-white/5 px-7 text-sm text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Resume
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
