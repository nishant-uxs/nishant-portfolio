"use client";

import { motion } from "framer-motion";
import { navLinks, person } from "@/data/content";
import { useCursor } from "@/providers/CursorProvider";
import { useThemeState } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { ready } = useThemeState();
  const { setMode } = useCursor();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -24, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 md:px-8">
        <a
          href="#hero"
          className="flex items-center gap-3"
          onMouseEnter={() => setMode("hover")}
          onMouseLeave={() => setMode("default")}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={person.avatarPath}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border border-white/15 object-cover"
          />
          <span className="hidden font-mono text-[11px] tracking-[0.18em] text-white/70 uppercase sm:inline">
            {person.firstName}
          </span>
        </a>
        <div className="flex max-w-[60vw] items-center justify-end gap-3 overflow-x-auto md:max-w-none md:justify-center md:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={"external" in link && link.external ? "_blank" : undefined}
            rel={"external" in link && link.external ? "noreferrer" : undefined}
            onMouseEnter={() => setMode(link.id === "contact" ? "arrow" : "hover")}
            onMouseLeave={() => setMode("default")}
            data-cursor={link.id === "contact" ? "arrow" : "hover"}
            className={cn(
              "shrink-0 font-mono text-[10px] tracking-[0.18em] text-white/55 uppercase transition hover:text-white md:text-xs md:tracking-[0.22em]",
              (link.id === "achievements" || link.id === "oss") && "hidden sm:inline",
            )}
          >
            {link.label}
          </a>
        ))}
        </div>
        <span className="w-9 sm:w-[7.5rem]" aria-hidden />
      </nav>
      <span className="sr-only">{person.name}</span>
    </motion.header>
  );
}
