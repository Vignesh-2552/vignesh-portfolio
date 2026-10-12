"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

// Honour prefers-reduced-motion from the first frame, before hydration-gated hooks update
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
