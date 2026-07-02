"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function GradientText({ children, className, delay = 0 }: GradientTextProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span className={cn("bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent", className)}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={cn(
        "bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift",
        className
      )}
      initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}
