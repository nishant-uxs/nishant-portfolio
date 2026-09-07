export function AnimatedGrid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.18]">
      <div
        className="nx-animate-grid absolute -inset-[20%] h-[140%] w-[140%]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at center, black 20%, transparent 75%)",
        }}
      />
    </div>
  );
}
