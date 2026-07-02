"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AgentGraph } from "@/components/motion/agent-graph";
import { GlowCard } from "@/components/motion/glow-card";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Featured work"
          description="Production AI platforms spanning agentic support, conversational commerce, and multi-agent development."
        />

        <StaggerChildren className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={project.name}>
              <GlowCard className="h-full rounded-2xl">
                <Card className="group flex h-full flex-col overflow-hidden border-white/10 bg-white/[0.03] backdrop-blur-md">
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${
                      index === 0
                        ? "from-cyan-400 to-cyan-600/50"
                        : index === 1
                          ? "from-violet-400 to-violet-600/50"
                          : "from-cyan-400 via-violet-400 to-cyan-400"
                    }`}
                  />
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">
                        AI Platform
                      </span>
                      <ExternalLink
                        size={14}
                        className="text-zinc-600 transition-all duration-300 group-hover:rotate-12 group-hover:text-cyan-400"
                      />
                    </div>
                    <CardTitle className="text-xl text-white transition-colors group-hover:text-cyan-50">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-cyan-400/80">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <AgentGraph graph={project.graph} />
                    <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {project.ownership.map((area) => (
                        <Badge
                          key={area}
                          className="border-violet-500/30 bg-violet-500/10 text-xs text-violet-300"
                        >
                          {area}
                        </Badge>
                      ))}
                    </div>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="border-white/10 text-xs text-zinc-500 transition-colors group-hover:border-cyan-500/20"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <ul className="mt-auto space-y-2 border-t border-white/10 pt-4">
                      {project.highlights.map((point) => (
                        <li
                          key={point}
                          className="text-xs leading-relaxed text-zinc-500"
                        >
                          <span className="text-cyan-500/60">→</span> {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
