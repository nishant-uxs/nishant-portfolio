"use client";

import WindowControls from "@components/WindowControls";
import windowWrapper from "@hoc/windowWrapper";
import useWindowsStore from "@store/window";
import {
  DESKTOP_WALLPAPERS,
  WALLPAPER_GROUPS,
  WALLPAPER_STORAGE_KEY,
  applyDesktopWallpaper,
  getWallpaperById,
} from "@constants/wallpapers";

const Wallpaper = () => {
  const wallpaperId = useWindowsStore((state) => state.systemSettings.wallpaperId);
  const updateSystemSetting = useWindowsStore((state) => state.updateSystemSetting);

  const handleSelect = (id) => {
    updateSystemSetting("wallpaperId", id);
    localStorage.setItem(WALLPAPER_STORAGE_KEY, id);
    applyDesktopWallpaper(getWallpaperById(id));
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/20 bg-[#f5f5f7]/95 shadow-2xl backdrop-blur-2xl">
      <div
        id="window-header"
        className="relative z-10 flex shrink-0 items-center border-b border-black/8 bg-white/70 px-4 py-2.5"
      >
        <WindowControls target="wallpaper" />
        <h2 className="flex-1 text-center text-sm font-semibold text-zinc-700">Wallpaper</h2>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto p-4">
        {WALLPAPER_GROUPS.map((group) => {
          const items = DESKTOP_WALLPAPERS.filter((item) => item.group === group);
          if (!items.length) return null;
          return (
            <section key={group}>
              <p className="mb-2.5 text-[11px] font-medium tracking-wide text-zinc-500 uppercase">
                {group}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {items.map((item) => {
                  const selected = item.id === wallpaperId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item.id)}
                      className={[
                        "group overflow-hidden rounded-xl border text-left transition-all",
                        selected
                          ? "border-blue-500 ring-2 ring-blue-500/40"
                          : "border-black/10 hover:border-black/25",
                      ].join(" ")}
                    >
                      <div
                        className="aspect-[16/10] w-full bg-cover bg-center"
                        style={
                          item.type === "image"
                            ? { backgroundImage: `url("${item.src}")` }
                            : { backgroundImage: item.value }
                        }
                      />
                      <div className="flex items-center justify-between gap-2 bg-white/80 px-2.5 py-2">
                        <span className="truncate text-xs font-medium text-zinc-700">
                          {item.name}
                        </span>
                        {selected && (
                          <span className="rounded-full bg-blue-500 px-1.5 py-0.5 text-[9px] font-bold text-white">
                            ON
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

const WallpaperWindow = windowWrapper(Wallpaper, "wallpaper");
export default WallpaperWindow;
