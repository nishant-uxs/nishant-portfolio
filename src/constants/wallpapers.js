export const DESKTOP_WALLPAPERS = [
  {
    id: "default",
    name: "Default",
    type: "image",
    src: "/images/wallpapers/wallpaper.webp",
  },
  {
    id: "horizon",
    name: "Horizon",
    type: "image",
    src: "/images/wallpapers/wallpaper1.webp",
  },
  {
    id: "abstract",
    name: "Abstract",
    type: "image",
    src: "/images/mobile-wallpaper.webp",
  },
  {
    id: "sequoia",
    name: "Sequoia",
    type: "gradient",
    value: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 30%, #FFE066 60%, #4DABF7 100%)",
  },
  {
    id: "sonoma",
    name: "Sonoma Night",
    type: "gradient",
    value: "linear-gradient(135deg, #101116 0%, #172554 40%, #1e1b4b 70%, #311042 100%)",
  },
  {
    id: "ventura",
    name: "Ventura Warm",
    type: "gradient",
    value:
      "linear-gradient(135deg, #f59e0b 0%, #d97706 20%, #b45309 40%, #7c2d12 70%, #451a03 100%)",
  },
  {
    id: "monterey",
    name: "Monterey",
    type: "gradient",
    value: "linear-gradient(135deg, #6366f1 0%, #4f46e5 30%, #4338ca 60%, #311042 100%)",
  },
  {
    id: "aurora",
    name: "Aurora",
    type: "gradient",
    value:
      "linear-gradient(135deg, #0284c7 0%, #0369a1 20%, #075985 45%, #1e1b4b 75%, #0f172a 100%)",
  },
];

export const DEFAULT_WALLPAPER_ID = "default";
export const WALLPAPER_STORAGE_KEY = "nishantx-wallpaper-id";

export const getWallpaperById = (id) =>
  DESKTOP_WALLPAPERS.find((item) => item.id === id) || DESKTOP_WALLPAPERS[0];

export const applyDesktopWallpaper = (wallpaper) => {
  if (typeof document === "undefined" || !wallpaper) return;

  const imageValue =
    wallpaper.type === "image" ? `url("${wallpaper.src}")` : wallpaper.value || "none";

  document.body.style.setProperty("background-image", imageValue, "important");
  document.body.style.setProperty("background-size", "cover", "important");
  document.body.style.setProperty("background-repeat", "no-repeat", "important");
  document.body.style.setProperty("background-position", "center", "important");

  const mobileShell = document.querySelector(".mobile-os-container");
  if (mobileShell) {
    mobileShell.style.setProperty("background-image", imageValue, "important");
    mobileShell.style.setProperty("background-size", "cover", "important");
    mobileShell.style.setProperty("background-position", "center", "important");
  }
};
