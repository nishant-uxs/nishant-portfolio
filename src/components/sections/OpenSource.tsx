"use client";

import { ossData } from "@/data/content";
import { Reveal } from "@/components/animations/Reveal";
import { useCursor } from "@/providers/CursorProvider";

export function OpenSource() {
  const { setMode } = useCursor();

  return (
    <section id="oss" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <h2 className="font-heading text-5xl tracking-tight md:text-7xl">
            Open source
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/50">
            Merged upstream PRs in production repos — ClickHouse to Hardhat,
            viem, Mastra, and more.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {ossData.map((item, i) => (
            <Reveal key={item.url} delay={i * 0.04} y={36}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setMode("hover")}
                onMouseLeave={() => setMode("default")}
                className="group block rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/35 hover:bg-white/[0.06] md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-sm text-violet-300/90">
                    {item.repo}
                  </p>
                  <span className="shrink-0 font-mono text-xs tracking-wide text-white/40 transition group-hover:text-white/70">
                    {item.pr}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  {item.blurb}
                </p>
                <p className="mt-5 font-mono text-[10px] tracking-[0.18em] text-white/35 uppercase transition group-hover:text-violet-300/80">
                  View PR →
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
