"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import type { ReactNode } from "react";
import { easeTransition, springTransition, viewport as defaultViewport } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none" | "scale";

const directionVariants: Record<Direction, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  down: {
    hidden: { opacity: 0, y: -24, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
};

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  viewport?: typeof defaultViewport;
  animateOnLoad?: boolean;
  spring?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  viewport = defaultViewport,
  animateOnLoad = false,
  className,
  spring = false,
}: FadeInProps) {
  const reduced = useReducedMotion();
  const variants = directionVariants[direction];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const motionProps = animateOnLoad
    ? { initial: "hidden" as const, animate: "visible" as const }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{
        ...(spring ? springTransition : easeTransition),
        delay,
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
