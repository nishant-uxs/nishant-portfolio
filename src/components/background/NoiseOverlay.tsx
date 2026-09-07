export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="nx-animate-noise pointer-events-none fixed inset-0 z-[2] opacity-[0.045] mix-blend-overlay"
      style={{
        backgroundImage: "url(/noise/noise.svg)",
        backgroundSize: "180px 180px",
      }}
    />
  );
}
