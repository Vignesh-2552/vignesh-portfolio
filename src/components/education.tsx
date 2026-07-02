"use client";

import { GraduationCap } from "lucide-react";
import { GlowCard } from "@/components/motion/glow-card";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Education" title="Academic background" />

        <FadeIn direction="scale" spring>
          <GlowCard className="rounded-2xl">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                    <GraduationCap size={22} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {education.degree}
                    </h3>
                    <p className="mt-1 text-zinc-400">{education.institution}</p>
                    <p className="text-sm text-zinc-500">{education.affiliation}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm text-zinc-500">
                    {education.period}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-cyan-400">
                    {education.cgpa}
                  </p>
                  <p className="text-xs text-zinc-600">CGPA</p>
                </div>
              </div>
            </div>
          </GlowCard>
        </FadeIn>
      </div>
    </section>
  );
}
