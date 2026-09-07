import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "@/config/theme";

let registered = false;

export function registerGsap() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
  registered = true;
}

// Ensure ScrollTrigger is available before any client tween runs
registerGsap();

export function getEase(name: keyof typeof motion.ease = "expo") {
  return motion.ease[name];
}

export function createRevealTween(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {},
) {
  return gsap.fromTo(
    targets,
    { yPercent: 120, opacity: 0, rotateX: 12 },
    {
      yPercent: 0,
      opacity: 1,
      rotateX: 0,
      duration: motion.duration.slow,
      ease: "power4.out",
      stagger: motion.stagger.chars,
      ...options,
    },
  );
}

export function createLineReveal(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {},
) {
  return gsap.fromTo(
    targets,
    { y: "110%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: motion.duration.base,
      ease: "power3.out",
      stagger: motion.stagger.lines,
      ...options,
    },
  );
}

export function createMaskReveal(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {},
) {
  return gsap.fromTo(
    targets,
    { clipPath: "inset(100% 0 0 0)", scale: 1.08 },
    {
      clipPath: "inset(0% 0 0 0)",
      scale: 1,
      duration: motion.duration.slow,
      ease: "power3.inOut",
      ...options,
    },
  );
}

export function createParallax(
  targets: gsap.TweenTarget,
  trigger: Element | string,
  distance = 120,
) {
  return gsap.to(targets, {
    y: distance,
    ease: "none",
    scrollTrigger: {
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

export { gsap, ScrollTrigger };
