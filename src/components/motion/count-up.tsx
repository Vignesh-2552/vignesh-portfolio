"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseValue(raw: string) {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { number: null as number | null, suffix: raw };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

export function CountUp({ value, className, duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const { number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(reduced || number === null ? value : `0${suffix}`);

  useEffect(() => {
    if (!isInView || reduced || number === null) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = number * eased;
      const formatted = Number.isInteger(number)
        ? Math.round(current).toString()
        : current.toFixed(2);
      setDisplay(`${formatted}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reduced, number, suffix, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, scale: 0.5 }}
      animate={reduced ? undefined : { opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {display}
    </motion.span>
  );
}
