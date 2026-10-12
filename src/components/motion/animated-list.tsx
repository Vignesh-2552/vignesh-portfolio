"use client";

// Adapted from Magic UI "Animated List" (21st.dev).
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedListProps {
  items: ReactNode[];
  className?: string;
  /** ms between new items */
  delay?: number;
  visible?: number;
}

export function AnimatedList({ items, className, delay = 1600, visible = 4 }: AnimatedListProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [tick, setTick] = useState(visible);

  useEffect(() => {
    if (reduced || !inView) return;
    const id = setInterval(() => setTick((t) => t + 1), delay);
    return () => clearInterval(id);
  }, [reduced, inView, delay]);

  // Newest on top; keys keep cycling so the list never runs dry
  const shown = Array.from({ length: visible }, (_, i) => {
    const n = tick - i;
    return { key: n, node: items[((n % items.length) + items.length) % items.length] };
  });

  return (
    <div ref={ref} className={cn("flex flex-col items-center gap-3", className)}>
      <AnimatePresence initial={false}>
        {shown.map(({ key, node }) => (
          <motion.div
            key={key}
            layout
            className="w-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, originY: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 40 }}
          >
            {node}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
