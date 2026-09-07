import { NoiseOverlay } from "@/components/background/NoiseOverlay";
import { MouseLight } from "@/components/background/MouseLight";
import { FloatingParticles } from "@/components/background/FloatingParticles";

export function LivingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,58,237,0.12),transparent_55%)]" />
      <FloatingParticles />
      <MouseLight />
      <NoiseOverlay />
    </div>
  );
}
