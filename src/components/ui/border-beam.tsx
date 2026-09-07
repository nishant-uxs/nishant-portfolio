"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BorderBeamProps = {
  children: ReactNode;
  className?: string;
};

/** Magic UI–inspired animated border beam for glass surfaces */
export function BorderBeam({ children, className }: BorderBeamProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-[1.75rem]", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(79,125,255,0.55) 80deg, transparent 140deg)",
          animation: "nx-border-spin 6s linear infinite",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          padding: "1px",
          WebkitMaskComposite: "xor",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
