"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AnimationProvider } from "@/providers/AnimationProvider";
import { LenisProvider } from "@/providers/LenisProvider";
import { CursorProvider } from "@/providers/CursorProvider";
import { ThreeProvider } from "@/providers/ThreeProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ThreeProvider>
        <AnimationProvider>
          <LenisProvider>
            <CursorProvider>{children}</CursorProvider>
          </LenisProvider>
        </AnimationProvider>
      </ThreeProvider>
    </ThemeProvider>
  );
}
