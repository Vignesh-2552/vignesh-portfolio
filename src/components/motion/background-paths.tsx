"use client";

// Adapted from kokonutd "Background Paths" (21st.dev).
import { motion, useReducedMotion } from "motion/react";

function FloatingPaths({ position }: { position: 1 | -1 }) {
  const reduced = useReducedMotion();
  const paths = Array.from({ length: 30 }, (_, i) => {
    const o = i * 5 * position;
    return {
      id: i,
      d: `M-${380 - o} -${189 + i * 6}C-${380 - o} -${189 + i * 6} -${312 - o} ${216 - i * 6} ${152 - o} ${343 - i * 6}C${616 - o} ${470 - i * 6} ${684 - o} ${875 - i * 6} ${684 - o} ${875 - i * 6}`,
      width: 0.5 + i * 0.03,
      duration: 20 + ((i * 7) % 10),
    };
  });

  return (
    <svg
      className="absolute inset-0 h-full w-full text-white"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {paths.map((p) => (
        <motion.path
          key={p.id}
          d={p.d}
          stroke={p.id % 3 === 0 ? (position === 1 ? "#22d3ee" : "#a78bfa") : "currentColor"}
          strokeWidth={p.width}
          strokeOpacity={0.04 + p.id * 0.012}
          initial={reduced ? false : { pathLength: 0.3, opacity: 0.6 }}
          animate={
            reduced
              ? undefined
              : { pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }
          }
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </svg>
  );
}

export function BackgroundPaths() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--page-bg)_75%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-(--page-bg)" />
    </div>
  );
}
