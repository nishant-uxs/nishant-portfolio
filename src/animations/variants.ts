import type { Transition, Variants } from "framer-motion";
import { motion } from "@/config/theme";

export const defaultTransition: Transition = {
  duration: motion.duration.base,
  ease: motion.ease.expo,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motion.duration.base, ease: motion.ease.soft },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(16px)", scale: 1.02 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: motion.duration.slow, ease: motion.ease.expo },
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: motion.duration.slow, ease: motion.ease.inOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motion.stagger.items,
      delayChildren: 0.1,
    },
  },
};

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    filter: "blur(12px)",
    scale: 1.02,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: motion.duration.cinematic, ease: motion.ease.expo },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.98,
    clipPath: "inset(0 0 40% 0)",
    transition: { duration: motion.duration.base, ease: motion.ease.inOut },
  },
};
