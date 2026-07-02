"use client";

import { motion, useReducedMotion } from "motion/react";
import { viewport } from "@/lib/motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  const reduced = useReducedMotion();
  const words = title.split(" ");

  if (reduced) {
    return (
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-sm tracking-widest text-cyan-400 uppercase">{label}</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-zinc-400">{description}</p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      className="mb-12 max-w-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
      }}
    >
      <motion.p
        className="mb-3 font-mono text-sm tracking-widest text-cyan-400 uppercase"
        variants={{
          hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
          visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.p>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.06,
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </h2>

      <motion.div
        className="mt-4 h-px w-24 bg-gradient-to-r from-cyan-400 via-violet-400 to-transparent"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        style={{ originX: 0 }}
      />

      {description && (
        <motion.p
          className="mt-4 text-base leading-relaxed text-zinc-400"
          variants={{
            hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
