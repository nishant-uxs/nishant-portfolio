"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ThreeContextValue = {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
};

const ThreeContext = createContext<ThreeContextValue | null>(null);

export function ThreeProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  const value = useMemo(() => ({ enabled, setEnabled }), [enabled]);

  return (
    <ThreeContext.Provider value={value}>{children}</ThreeContext.Provider>
  );
}

export function useThreeState() {
  const ctx = useContext(ThreeContext);
  if (!ctx) throw new Error("useThreeState must be used within ThreeProvider");
  return ctx;
}
