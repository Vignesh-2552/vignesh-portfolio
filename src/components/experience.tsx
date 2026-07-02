"use client";

import { Briefcase } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { GlowCard } from "@/components/motion/glow-card";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/portfolio";

export function Experience() {
  const reduced = useReducedMotion();
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Where I've built"
          description="Production AI platforms and full-stack systems across enterprise and startup environments."
        />

        <div className="relative space-y-8">
          <div ref={lineRef} className="absolute top-0 bottom-0 left-[19px] hidden w-px overflow-hidden sm:block">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-cyan-400 via-violet-500/50 to-transparent"
              initial={reduced ? false : { scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ originY: 0 }}
            />
          </div>

          <StaggerChildren className="space-y-8">
            {experience.map((job, index) => (
              <StaggerItem key={`${job.company}-${index}`}>
                <GlowCard className="rounded-2xl">
                  <article className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:pl-14">
                    <motion.div
                      className="absolute top-6 left-6 hidden h-3 w-3 rounded-full bg-cyan-400 sm:block"
                      style={{ boxShadow: "0 0 12px rgba(34,211,238,0.6)" }}
                      animate={
                        reduced
                          ? undefined
                          : { scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }
                      }
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <Briefcase size={16} className="text-cyan-400" />
                          <h3 className="text-lg font-semibold text-white">
                            {job.role}
                          </h3>
                        </div>
                        <p className="text-cyan-400">{job.company}</p>
                      </div>
                      <div className="text-right text-sm text-zinc-500">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm leading-relaxed text-zinc-400"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
