import { EMAIL, GITHUB_PROFILE, LINKEDIN_URL, PORTFOLIO_URL } from "./env";

export const dockApps = [
  { id: "finder", name: "About", icon: "finder.webp", canOpen: true },
  { id: "folder", name: "Projects", icon: "folder.webp", canOpen: true },
  { id: "resume", name: "Resume", iconSrc: "/icons/file.svg", iconBg: "#ffffff", canOpen: true },
  { id: "terminal", name: "Terminal", icon: "terminal.webp", canOpen: true },
  {
    id: "github",
    name: "GitHub",
    iconSrc: "/icons/github.svg",
    iconBg: "#111111",
    href: GITHUB_PROFILE,
    external: true,
    separatorBefore: true,
  },
  {
    id: "email",
    name: "Email",
    iconSrc: "/icons/mail.svg",
    iconBg: "#ffffff",
    href: `mailto:${EMAIL}`,
    external: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    iconSrc: "/icons/linkedin.svg",
    iconBg: "#ffffff",
    href: LINKEDIN_URL,
    external: true,
  },
  {
    id: "website",
    name: "nishantx.in",
    iconSrc: "/icons/atom.svg",
    iconBg: "#ffffff",
    href: PORTFOLIO_URL,
    external: true,
  },
];
