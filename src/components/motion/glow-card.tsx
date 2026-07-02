"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || reduced) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -8;
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 8;
    setSpotlight({ x, y, opacity: 1 });
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleLeave = () => {
    setSpotlight((s) => ({ ...s, opacity: 0 }));
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={cn("group relative", className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000 }}
      animate={reduced ? undefined : { rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      whileHover={reduced ? undefined : { y: -8, scale: 1.02 }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(500px circle at ${spotlight.x}% ${spotlight.y}%, rgba(34,211,238,0.15), transparent 40%)`,
        }}
      />
      <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative h-full rounded-[inherit]">{children}</div>
    </motion.div>
  );
}
