"use client";

import { CheckCircle2 } from "lucide-react";
import { GlowCard } from "@/components/motion/glow-card";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/section-heading";
import { competencies, personal } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Engineering AI that works in production"
          description="Backend infrastructure for agentic systems — from MCP tool servers and hybrid RAG to observability stacks that survive real load."
        />

        <StaggerChildren className="grid gap-8 lg:grid-cols-2">
          <StaggerItem>
            <GlowCard className="rounded-2xl">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md">
                <p className="text-base leading-relaxed text-zinc-300">
                  {personal.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["LangGraph", "FastMCP", "Hybrid RAG", "FastAPI", "Next.js 15"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs text-cyan-300"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </GlowCard>
          </StaggerItem>

          <StaggerItem>
            <GlowCard className="rounded-2xl">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md">
                <h3 className="mb-5 font-semibold text-white">Core Competencies</h3>
                <ul className="space-y-3">
                  {competencies.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan-400"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
