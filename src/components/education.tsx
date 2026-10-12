"use client";

import { GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { GlowingEffect } from "@/components/motion/glowing-effect";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/portfolio";
import { viewport } from "@/lib/motion";

export function Education() {
  const reduced = useReducedMotion();

  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Education" title="Academic background" />

        <motion.div
          className="relative rounded-[1.5rem] border border-white/10 p-2.5"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlowingEffect spread={40} proximity={64} borderWidth={3} />
          <div className="relative flex flex-wrap items-center justify-between gap-6 rounded-xl border border-white/[0.06] bg-zinc-950 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <GraduationCap size={22} className="text-zinc-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                <p className="mt-1 text-zinc-400">{education.institution}</p>
                <p className="text-sm text-zinc-500">
                  {education.affiliation} · {education.period}
                </p>
              </div>
            </div>
            <div className="sm:text-right">
              <p className="bg-linear-to-b from-white to-white/50 bg-clip-text text-4xl font-semibold text-transparent">
                {education.cgpa}
              </p>
              <p className="font-mono text-xs tracking-widest text-zinc-600 uppercase">CGPA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
