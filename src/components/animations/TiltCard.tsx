"use client";

import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCursor } from "@/providers/CursorProvider";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { setMode } = useCursor();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });
  const glareX = useSpring(x, { stiffness: 120, damping: 20 });
  const glareY = useSpring(y, { stiffness: 120, damping: 20 });
  const glare = useMotionTemplate`radial-gradient(520px circle at ${glareX}px ${glareY}px, rgba(255,255,255,0.14), transparent 42%)`;

  const onMove = (event: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;
    const rx = ((py - rect.height / 2) / rect.height) * -10;
    const ry = ((px - rect.width / 2) / rect.width) * 10;
    rotateX.set(rx);
    rotateY.set(ry);
    x.set(px);
    y.set(py);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setMode("default");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setMode("hover")}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("group relative", className)}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glare }}
      />
    </motion.div>
  );
}
