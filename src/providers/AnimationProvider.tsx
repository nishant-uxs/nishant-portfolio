"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { registerGsap, ScrollTrigger } from "@/animations/gsap";
import { useThemeState } from "@/providers/ThemeProvider";

type AnimationContextValue = {
  refresh: () => void;
};

const AnimationContext = createContext<AnimationContextValue>({
  refresh: () => undefined,
});

export function AnimationProvider({ children }: { children: ReactNode }) {
  const { ready } = useThemeState();

  useEffect(() => {
    registerGsap();
  }, []);

  useEffect(() => {
    if (!ready) return;
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [ready]);

  const value = useMemo(
    () => ({
      refresh: () => ScrollTrigger.refresh(),
    }),
    [],
  );

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  return useContext(AnimationContext);
}
