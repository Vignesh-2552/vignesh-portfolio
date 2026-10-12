"use client";

import { motion, useReducedMotion } from "motion/react";
import { viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ label, title, description, align = "left" }: SectionHeadingProps) {
  const reduced = useReducedMotion();
  const words = title.split(" ");
  const center = align === "center";

  return (
    <motion.div
      className={cn("mb-14 max-w-2xl", center && "mx-auto text-center")}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={viewport}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
    >
      <motion.span
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs tracking-widest text-zinc-400 uppercase"
        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        {label}
      </motion.span>

      <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </h2>

      {description && (
        <motion.p
          className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg"
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
