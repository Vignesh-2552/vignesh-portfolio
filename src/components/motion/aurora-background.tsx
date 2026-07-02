"use client";

import { motion, useReducedMotion } from "motion/react";

export function AuroraBackground() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(34,211,238,0.4), rgba(139,92,246,0.3), rgba(34,211,238,0.2), transparent)",
        }}
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[100px]"
        animate={
          reduced
            ? undefined
            : { x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[120px]"
        animate={
          reduced
            ? undefined
            : { x: [0, -50, 0], y: [0, 30, 0], scale: [1.1, 1, 1.1] }
        }
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[80px]"
        animate={reduced ? undefined : { scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#08080f_70%)]" />
    </div>
  );
}
