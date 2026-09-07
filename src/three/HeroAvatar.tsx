"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { person } from "@/data/content";

/** Hero visual — GitHub profile photo (Pikachu) */
export function HeroAvatar() {
  const reduced = useReducedMotion();

  return (
    <div className="flex h-full w-full items-center justify-center md:justify-end md:pr-[8vw]">
      <motion.div
        className="relative aspect-square w-[min(72vmin,420px)] overflow-hidden rounded-full border border-white/15 shadow-[0_0_80px_rgba(124,58,237,0.35)]"
        initial={reduced ? false : { opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          animate={
            reduced
              ? undefined
              : { y: [0, -10, 0] }
          }
          transition={
            reduced
              ? undefined
              : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <Image
            src={person.avatarPath}
            alt={`${person.name} profile`}
            fill
            priority
            sizes="(max-width: 768px) 72vw, 420px"
            className="object-cover"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,transparent_40%,rgba(5,5,5,0.35)_100%)]" />
      </motion.div>
    </div>
  );
}
