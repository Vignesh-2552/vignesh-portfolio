"use client";

import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/motion/glow-card";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical toolkit"
          description="Languages, frameworks, and infrastructure I use to ship AI products end-to-end."
        />

        <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <GlowCard className="rounded-2xl">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                  <h3 className="mb-4 font-mono text-sm tracking-wider text-cyan-400 uppercase">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.15)]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
