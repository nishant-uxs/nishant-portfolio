export const colors = {
  background: "#050505",
  secondary: "#0B0B0B",
  primary: "#FFFFFF",
  muted: "#A8A8A8",
  accent: "#4F7DFF",
  accent2: "#7B61FF",
  border: "rgba(255,255,255,.08)",
  glass: "rgba(255,255,255,.04)",
  glow: "rgba(79,125,255,.25)",
} as const;

export const fonts = {
  heading: "var(--font-clash-display)",
  body: "var(--font-satoshi)",
  mono: "var(--font-geist-mono)",
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const spacing = {
  section: "clamp(6rem, 12vh, 10rem)",
  sectionLg: "clamp(8rem, 18vh, 14rem)",
  container: "min(92vw, 1400px)",
} as const;

export const motion = {
  duration: {
    instant: 0.15,
    fast: 0.3,
    base: 0.6,
    slow: 1.2,
    cinematic: 1.8,
  },
  ease: {
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.65, 0, 0.35, 1] as const,
    expo: [0.19, 1, 0.22, 1] as const,
    soft: [0.22, 1, 0.36, 1] as const,
  },
  stagger: {
    chars: 0.02,
    lines: 0.08,
    items: 0.12,
  },
} as const;

export const zIndex = {
  background: 0,
  content: 10,
  navbar: 40,
  cursor: 90,
  loader: 100,
  overlay: 50,
} as const;
