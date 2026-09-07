"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useThemeState } from "@/providers/ThemeProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { BOOT_SEQUENCE } from "@/constants";

const SESSION_KEY = "nx-booted";

export function LoadingScreen() {
  const { loading, setLoading, setReady } = useThemeState();
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState("");
  const [visibleLines, setVisibleLines] = useState(0);
  const [showReady, setShowReady] = useState(false);

  useEffect(() => {
    const finish = () => {
      setLoading(false);
      setReady(true);
    };

    if (reduced) {
      finish();
      return;
    }

    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        finish();
        return;
      }
    } catch {
      // private mode — still play the boot
    }

    const timers: number[] = [];
    const cmd = BOOT_SEQUENCE.cmd;
    const startTyping = 80;

    for (let i = 1; i <= cmd.length; i += 1) {
      timers.push(
        window.setTimeout(() => setTyped(cmd.slice(0, i)), startTyping + i * 32),
      );
    }

    timers.push(window.setTimeout(() => setVisibleLines(1), 420));
    timers.push(window.setTimeout(() => setVisibleLines(2), 720));
    timers.push(window.setTimeout(() => setShowReady(true), 1020));
    timers.push(
      window.setTimeout(() => {
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          // ignore
        }
        finish();
      }, 1480),
    );

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [reduced, setLoading, setReady]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center bg-[#050505] px-6 md:px-16"
          exit={{
            opacity: 0,
            filter: "blur(18px)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="mx-auto w-full max-w-xl font-mono text-[13px] leading-7 tracking-tight text-white/80 md:text-[15px] md:leading-8">
            <p>
              <span className="text-cyan-300">{BOOT_SEQUENCE.user}</span>
              <span className="text-white/35">@</span>
              <span className="text-violet-300">{BOOT_SEQUENCE.host}</span>
              <span className="text-white/35"> ~ </span>
              <span className="text-violet-400">▶</span>{" "}
              <span className="text-white">{typed}</span>
              {!showReady ? <span className="nx-caret" /> : null}
            </p>

            {BOOT_SEQUENCE.lines.slice(0, visibleLines).map((line) => (
              <p key={line} className="text-white/55">
                <span className="text-cyan-400/80">→</span> {line}
              </p>
            ))}

            {showReady ? (
              <p className="text-emerald-400/90">
                <span className="text-emerald-300">→</span> {BOOT_SEQUENCE.ready}
              </p>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
