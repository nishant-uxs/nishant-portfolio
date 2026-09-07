"use client";

import { projectsData } from "@/data/content";
import { Reveal } from "@/components/animations/Reveal";
import { useCursor } from "@/providers/CursorProvider";
import { cn } from "@/lib/utils";

const accents: Record<string, string> = {
  violet: "from-violet-600/45 via-black to-blue-500/25",
  blue: "from-blue-600/40 via-black to-cyan-500/25",
  fuchsia: "from-fuchsia-600/35 via-black to-violet-500/25",
  cyan: "from-cyan-600/35 via-black to-blue-500/20",
  amber: "from-amber-600/35 via-black to-orange-500/20",
};

export function Projects() {
  const { setMode } = useCursor();

  return (
    <section id="projects" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <h2 className="font-heading text-5xl tracking-tight md:text-7xl">
            Selected work
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/50">
            APIs, full-stack apps, and systems with tests — GitHub and live demos
            linked where public.
          </p>
        </Reveal>

        <div className="mt-16 space-y-10">
          {projectsData.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04} y={50}>
              <article
                data-cursor="hash"
                onMouseEnter={() => setMode("hash")}
                onMouseLeave={() => setMode("default")}
                className="group grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-500 hover:border-violet-400/30 hover:shadow-[0_0_60px_rgba(124,58,237,0.12)] lg:grid-cols-[1.15fr_0.85fr]"
              >
                <div
                  className={cn(
                    "relative min-h-[220px] overflow-hidden md:min-h-[300px]",
                    "bg-gradient-to-br",
                    accents[project.accent] ?? accents.violet,
                  )}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_42%)] transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                    <p className="font-mono text-xs tracking-[0.25em] text-white/55">
                      {project.index}
                    </p>
                    <div>
                      <p className="font-heading text-3xl tracking-tight text-white/90 md:text-4xl">
                        {project.title}
                      </p>
                      <p className="mt-2 max-w-sm font-mono text-[10px] tracking-[0.14em] text-white/50 uppercase">
                        {project.proof.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-white/45 uppercase">
                    {project.type} · {project.year}
                  </p>
                  <h3 className="mt-3 font-heading text-4xl tracking-tight md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-violet-300/80">{project.stack}</p>
                  <p className="mt-5 text-white/55">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-white/60 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(project.github || project.live) && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          onMouseEnter={() => setMode("hover")}
                          onMouseLeave={() => setMode("default")}
                          className="inline-flex h-10 items-center rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white transition hover:bg-white/10"
                        >
                          GitHub
                        </a>
                      ) : null}
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          onMouseEnter={() => setMode("arrow")}
                          onMouseLeave={() => setMode("default")}
                          className="inline-flex h-10 items-center rounded-full bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] px-5 text-sm font-medium text-white"
                        >
                          Live
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
