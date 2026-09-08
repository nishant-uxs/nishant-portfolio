import { GITHUB_PROFILE, INSTAGRAM_URL, LINKEDIN_URL } from "./env";

export const dockApps = [
  { id: "finder", name: "About", icon: "finder.webp", canOpen: true },
  { id: "folder", name: "Projects", icon: "folder.webp", canOpen: true },
  { id: "resume", name: "Resume", iconSrc: "/icons/file.svg", iconBg: "#ffffff", canOpen: true },
  { id: "terminal", name: "Terminal", icon: "terminal.webp", canOpen: true },
  {
    id: "github",
    name: "GitHub",
    icon: "dock-github.webp",
    href: GITHUB_PROFILE,
    external: true,
    separatorBefore: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "dock-linkedin.webp",
    href: LINKEDIN_URL,
    external: true,
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "dock-instagram.webp",
    href: INSTAGRAM_URL,
    external: true,
  },
  {
    id: "music",
    name: "Music",
    icon: "dock-music.webp",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Photos",
    icon: "photos.webp",
    canOpen: true,
  },
  {
    id: "wallpaper",
    name: "Wallpaper",
    icon: "dock-wallpaper.webp",
    canOpen: true,
  },
];
