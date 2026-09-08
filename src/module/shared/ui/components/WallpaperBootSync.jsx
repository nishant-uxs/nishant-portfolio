"use client";

import { useEffect } from "react";
import useWindowsStore from "@store/window";
import {
  DEFAULT_WALLPAPER_ID,
  WALLPAPER_STORAGE_KEY,
  applyDesktopWallpaper,
  getWallpaperById,
} from "@constants/wallpapers";

/** Applies persisted wallpaper on boot even when the Wallpaper app is closed. */
const WallpaperBootSync = () => {
  const wallpaperId = useWindowsStore((state) => state.systemSettings.wallpaperId);
  const updateSystemSetting = useWindowsStore((state) => state.updateSystemSetting);

  useEffect(() => {
    const saved = localStorage.getItem(WALLPAPER_STORAGE_KEY);
    const id = saved || wallpaperId || DEFAULT_WALLPAPER_ID;
    if (id !== wallpaperId) {
      updateSystemSetting("wallpaperId", id);
    }
    applyDesktopWallpaper(getWallpaperById(id));
  }, [wallpaperId, updateSystemSetting]);

  return null;
};

export default WallpaperBootSync;
