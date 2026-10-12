"use client";

import { MapPin } from "lucide-react";
import { GlowingEffect } from "@/components/motion/glowing-effect";
import { Timeline } from "@/components/motion/timeline";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/portfolio";

export function Experience() {
  const data = experience.map((job) => ({
    title: job.period.split(" – ")[0].split(" ")[1] ?? job.period,
    subtitle: job.period,
    content: (
      <article className="relative rounded-[1.5rem] border border-white/10 p-1.5 sm:p-2.5">
        <GlowingEffect spread={40} proximity={64} borderWidth={3} />
        <div className="relative rounded-xl border border-white/[0.06] bg-zinc-950 p-5 sm:p-8">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{job.role}</h3>
              <p className="mt-1 text-base text-cyan-300">{job.company}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
              <MapPin size={12} />
              {job.location}
            </span>
          </div>

          <ul className="space-y-3">
            {job.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-br from-cyan-300 to-violet-400" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </article>
    ),
  }));

  return (
    <section id="experience" className="relative scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Where I've built"
          description="Production AI platforms and full-stack systems across enterprise and startup environments."
        />
        <Timeline data={data} />
      </div>
    </section>
  );
}
