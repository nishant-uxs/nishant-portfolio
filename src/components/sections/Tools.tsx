"use client";

import { skillsMarquee } from "@/data/content";
import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";
import { Reveal } from "@/components/animations/Reveal";

export function Tools() {
  return (
    <section id="tools" className="relative z-10 overflow-hidden py-20 md:py-28">
      <div className="mx-auto mb-12 max-w-7xl px-4 md:px-8">
        <Reveal>
          <h2 className="font-heading text-4xl tracking-tight md:text-6xl">
            Tools I used
          </h2>
        </Reveal>
      </div>
      <div className="space-y-2 border-y border-white/10 bg-white/[0.02] py-4">
        <InfiniteMarquee items={skillsMarquee} speed={48} />
        <InfiniteMarquee
          items={[...skillsMarquee].reverse()}
          speed={58}
          reverse
        />
      </div>
    </section>
  );
}
