"use client";

import type { ReactNode, RefObject } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useCursor, type CursorMode } from "@/providers/CursorProvider";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  cursor?: CursorMode;
};

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  type = "button",
  cursor = "hover",
}: MagneticButtonProps) {
  const ref = useMagnetic<HTMLAnchorElement | HTMLButtonElement>({
    strength: 0.4,
    radius: 140,
  });
  const { setMode } = useCursor();

  const handlers = {
    onMouseEnter: () => setMode(cursor),
    onMouseLeave: () => setMode("default"),
  };

  if (href) {
    return (
      <a
        ref={ref as RefObject<HTMLAnchorElement>}
        href={href}
        data-cursor={cursor}
        className={cn("inline-flex", className)}
        onClick={onClick}
        {...handlers}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as RefObject<HTMLButtonElement>}
      type={type}
      data-cursor={cursor}
      className={cn("inline-flex", className)}
      onClick={onClick}
      {...handlers}
    >
      {children}
    </button>
  );
}
