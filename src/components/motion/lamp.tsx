"use client";

// Adapted from Aceternity UI "Lamp" (21st.dev).
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const ease = { delay: 0.3, duration: 0.8, ease: "easeInOut" as const };

export function LampContainer({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const grow = (from: string, to: string) =>
    reduced
      ? { initial: false as const, style: { width: to } }
      : {
          initial: { opacity: 0.5, width: from },
          whileInView: { opacity: 1, width: to },
          viewport: { once: true },
          transition: ease,
        };

  return (
    <div
      className={cn(
        "relative z-0 flex w-full flex-col items-center justify-center overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_30%)]",
        className
      )}
    >
      <div className="relative isolate z-0 flex h-[26rem] w-full scale-y-125 items-center justify-center">
        <motion.div
          {...grow("15rem", "30rem")}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible"
          style={{
            ...(reduced ? { width: "30rem" } : {}),
            backgroundImage: "conic-gradient(from 70deg at center top, #22d3ee, transparent, transparent)",
          }}
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-(--page-bg) mask-[linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-(--page-bg) mask-[linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          {...grow("15rem", "30rem")}
          className="absolute inset-auto left-1/2 h-56 w-[30rem]"
          style={{
            ...(reduced ? { width: "30rem" } : {}),
            backgroundImage: "conic-gradient(from 290deg at center top, transparent, transparent, #22d3ee)",
          }}
        >
          <div className="absolute right-0 bottom-0 z-20 h-full w-40 bg-(--page-bg) mask-[linear-gradient(to_left,white,transparent)]" />
          <div className="absolute right-0 bottom-0 z-20 h-40 w-full bg-(--page-bg) mask-[linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-(--page-bg) blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-40 blur-3xl" />
        <motion.div
          {...grow("8rem", "16rem")}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-cyan-400 blur-2xl"
        />
        <motion.div
          {...grow("15rem", "30rem")}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-28 bg-cyan-300"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-50 bg-(--page-bg)" />
      </div>

      <div className="relative z-50 -mt-52 flex flex-col items-center px-5">{children}</div>
    </div>
  );
}
