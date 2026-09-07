"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { CURSOR } from "@/constants";
import { damp, distance } from "@/utils/math";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useThemeState } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export type CursorMode = "default" | "hover" | "text" | "hidden" | "hash" | "arrow";

const CURSOR_MODES = new Set<CursorMode>([
  "default",
  "hover",
  "text",
  "hidden",
  "hash",
  "arrow",
]);

type CursorContextValue = {
  setMode: (mode: CursorMode) => void;
  setMagnetic: (x: number, y: number, active: boolean) => void;
  triggerRipple: (x: number, y: number) => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

type Ripple = { id: number; x: number; y: number };

function modeFromTarget(target: EventTarget | null): CursorMode {
  if (!(target instanceof HTMLElement)) return "default";

  const tagged = target.closest("[data-cursor]");
  if (tagged instanceof HTMLElement) {
    const next = tagged.getAttribute("data-cursor");
    if (next && CURSOR_MODES.has(next as CursorMode)) {
      return next as CursorMode;
    }
  }

  if (target.closest("a, button, [role='button']")) return "hover";
  if (target.closest("p, span, h1, h2, h3, h4, li, label")) return "text";
  return "default";
}

export function CursorProvider({ children }: { children: ReactNode }) {
  const isDesktop = useIsDesktop();
  const reduced = useReducedMotion();
  const { loading } = useThemeState();
  const enabled = isDesktop && !reduced && !loading;

  const [mode, setMode] = useState<CursorMode>("default");
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const magnetic = useRef({ x: 0, y: 0, active: false });

  const orbRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pos = useRef({ x: 0, y: 0, px: 0, py: 0, scaleX: 1, scaleY: 1, scale: 1 });

  const setMagnetic = useCallback((x: number, y: number, active: boolean) => {
    magnetic.current = { x, y, active };
  }, []);

  const triggerRipple = useCallback((x: number, y: number) => {
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("cursor-none");

    let raf = 0;
    let last = performance.now();
    const trail = Array.from({ length: CURSOR.trailCount }, () => ({
      x: 0,
      y: 0,
    }));

    const onMove = (event: MouseEvent) => {
      pos.current.px = event.clientX;
      pos.current.py = event.clientY;
      setMode(modeFromTarget(event.target));
    };

    const onDown = (event: MouseEvent) => {
      triggerRipple(event.clientX, event.clientY);
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.064);
      last = now;

      const targetX = magnetic.current.active
        ? magnetic.current.x
        : pos.current.px;
      const targetY = magnetic.current.active
        ? magnetic.current.y
        : pos.current.py;

      pos.current.x = damp(pos.current.x, targetX, 14, dt);
      pos.current.y = damp(pos.current.y, targetY, 14, dt);

      const speed = distance(
        pos.current.x,
        pos.current.y,
        targetX,
        targetY,
      );

      const stretch =
        mode === "hash" || mode === "arrow"
          ? 0
          : Math.min(speed * CURSOR.stretchFactor, 0.55);
      pos.current.scaleX = damp(pos.current.scaleX, 1 + stretch, 10, dt);
      pos.current.scaleY = damp(pos.current.scaleY, 1 - stretch * 0.45, 10, dt);

      const sizeTarget =
        mode === "hash" || mode === "arrow"
          ? 2.15
          : mode === "hover"
            ? CURSOR.hoverSize / CURSOR.baseSize
            : mode === "text"
              ? CURSOR.textSize / CURSOR.baseSize
              : 1;

      pos.current.scale = damp(pos.current.scale, sizeTarget, 12, dt);

      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${pos.current.scaleX * pos.current.scale}, ${pos.current.scaleY * pos.current.scale})`;
        orbRef.current.style.opacity = mode === "hidden" ? "0" : "1";
      }

      let prevX = pos.current.x;
      let prevY = pos.current.y;
      const hideTrail = mode === "hash" || mode === "arrow";
      trail.forEach((point, index) => {
        point.x = damp(point.x || prevX, prevX, 18 - index, dt);
        point.y = damp(point.y || prevY, prevY, 18 - index, dt);
        const node = trailRefs.current[index];
        if (node) {
          const alpha = hideTrail ? 0 : (1 - index / CURSOR.trailCount) * 0.35;
          node.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
          node.style.opacity = String(alpha);
          node.style.scale = String(1 - index * 0.08);
        }
        prevX = point.x;
        prevY = point.y;
      });

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      cancelAnimationFrame(raf);
    };
  }, [enabled, mode, triggerRipple]);

  const value = useMemo(
    () => ({ setMode, setMagnetic, triggerRipple }),
    [setMagnetic, triggerRipple],
  );

  const labeled = mode === "hash" || mode === "arrow";

  return (
    <CursorContext.Provider value={value}>
      {children}
      {enabled ? (
        <div className="pointer-events-none fixed inset-0 z-[90] mix-blend-screen">
          {Array.from({ length: CURSOR.trailCount }).map((_, index) => (
            <div
              key={index}
              ref={(node) => {
                trailRefs.current[index] = node;
              }}
              className="absolute h-3 w-3 rounded-full bg-[radial-gradient(circle,rgba(79,125,255,0.55),transparent_70%)]"
            />
          ))}
          <div
            ref={orbRef}
            className={cn(
              "absolute flex items-center justify-center transition-opacity duration-200",
              labeled
                ? "h-[18px] w-[18px] rounded-[4px] border border-cyan-300/70 bg-[#07070f] shadow-[0_0_18px_rgba(103,232,249,0.35)] mix-blend-normal"
                : "h-[18px] w-[18px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#8fb0ff_0%,#4F7DFF_45%,rgba(79,125,255,0.15)_70%,transparent_100%)] shadow-[0_0_30px_rgba(79,125,255,0.45)]",
            )}
          >
            {mode === "hash" ? (
              <span className="font-mono text-[5px] font-semibold tracking-tight text-cyan-200">
                0x
              </span>
            ) : null}
            {mode === "arrow" ? (
              <span className="text-[7px] leading-none text-white">↗</span>
            ) : null}
          </div>
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="cursor-ripple absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(79,125,255,0.55)]"
              style={{ left: ripple.x, top: ripple.y }}
            />
          ))}
        </div>
      ) : null}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used within CursorProvider");
  return ctx;
}
