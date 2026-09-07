export function MovingGradient() {
  return (
    <div
      aria-hidden
      className="nx-animate-gradient pointer-events-none absolute inset-0 opacity-70"
      style={{
        background:
          "radial-gradient(ellipse at 20% 20%, rgba(79,125,255,0.18), transparent 45%), radial-gradient(ellipse at 80% 10%, rgba(123,97,255,0.14), transparent 40%), radial-gradient(ellipse at 50% 90%, rgba(79,125,255,0.1), transparent 50%)",
      }}
    />
  );
}
