"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { AgentGraph } from "@/components/motion/agent-graph";
import { GlowingEffect } from "@/components/motion/glowing-effect";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

const accents = [
  "from-cyan-400/20 via-transparent",
  "from-violet-400/20 via-transparent",
  "from-sky-400/20 via-transparent",
];

function ProjectCard({
  project,
  index,
  progress,
}: {
  project: Project;
  index: number;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  const total = projects.length;
  // Earlier cards shrink slightly as later ones stack on top
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.04]);

  return (
    <div
      className={index < total - 1 ? "md:sticky md:h-[calc(100vh-7rem)] md:pt-4" : "md:sticky md:pt-4"}
      style={{ top: `calc(6rem + ${index * 1.5}rem)` }}
    >
      <motion.article
        style={{ scale: reduced ? 1 : scale, transformOrigin: "top center" }}
        className="relative rounded-[1.75rem] border border-white/10 bg-zinc-950 p-2.5"
      >
        <GlowingEffect spread={40} proximity={64} borderWidth={3} />
        <div className="relative grid gap-8 overflow-hidden rounded-[1.25rem] border border-white/[0.06] bg-zinc-950 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:p-10">
          <div
            className={`pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-radial ${accents[index % accents.length]} to-transparent blur-2xl`}
          />

          <div className="relative flex flex-col">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · AI Platform
            </span>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {project.name}
            </h3>
            <p className="mt-1 text-cyan-300">{project.subtitle}</p>
            <p className="mt-4 leading-relaxed text-zinc-400">{project.description}</p>

            <ul className="mt-6 space-y-2.5">
              {project.highlights.map((point) => (
                <li key={point.label} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-br from-cyan-300 to-violet-400" />
                  <span>
                    <span className="font-medium text-zinc-200">{point.label}:</span> {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col justify-between gap-6">
            <AgentGraph graph={project.graph} />
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-mono text-[11px] tracking-widest text-zinc-600 uppercase">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="relative scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Featured work"
          description="Production AI platforms spanning agentic support, conversational commerce, and multi-agent development."
        />

        <div ref={containerRef} className="space-y-8 md:space-y-0">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
