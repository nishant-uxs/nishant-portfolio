export const SECTIONS = [
  "hero",
  "tools",
  "about",
  "achievements",
  "projects",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];

export const BOOT_SEQUENCE = {
  user: "nishant",
  host: "dev",
  cmd: "whoami",
  lines: [
    "backend · blockchain · zk",
    "oss @ hardhat · hyperlane · filozone",
  ],
  ready: "ready.",
} as const;

export const CURSOR = {
  baseSize: 18,
  hoverSize: 48,
  textSize: 10,
  trailCount: 8,
  lerp: 0.18,
  stretchFactor: 0.08,
} as const;
