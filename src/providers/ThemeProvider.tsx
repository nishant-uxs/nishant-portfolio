"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ThemeContextValue = {
  ready: boolean;
  setReady: (value: boolean) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [ready, setReadyState] = useState(false);
  const [loading, setLoadingState] = useState(true);

  const setReady = useCallback((value: boolean) => setReadyState(value), []);
  const setLoading = useCallback((value: boolean) => setLoadingState(value), []);

  const value = useMemo(
    () => ({ ready, setReady, loading, setLoading }),
    [ready, setReady, loading, setLoading],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeState() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeState must be used within ThemeProvider");
  return ctx;
}
