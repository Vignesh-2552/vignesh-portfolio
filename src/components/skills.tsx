"use client";

import {
  Activity,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  LayoutTemplate,
  Server,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { GlowingEffect } from "@/components/motion/glowing-effect";
import { Marquee } from "@/components/motion/marquee";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/data/portfolio";
import { useReducedMotion, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  Languages: Code2,
  "AI / LLM": BrainCircuit,
  Backend: Server,
  Frontend: LayoutTemplate,
  Databases: Database,
  "Cloud & Infra": Cloud,
  Observability: Activity,
  "Testing / Tools": FlaskConical,
};

const featured = [
  "LangGraph",
  "FastMCP",
  "FastAPI",
  "Python",
  "QdrantDB",
  "LangChain",
  "Anthropic API",
  "OpenAI API",
  "LangSmith",
  "OpenTelemetry",
];

const platform = [
  "Next.js 15",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Datadog",
  "AssistantUI",
  "Tailwind CSS",
  "GitHub Actions",
];

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-sm whitespace-nowrap text-zinc-300">
      {label}
    </span>
  );
}

export function Skills() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="relative scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical toolkit"
          description="Languages, frameworks, and infrastructure I use to ship AI products end-to-end."
        />

        <div className="mb-14 space-y-3">
          <Marquee duration={45}>
            {featured.map((s) => (
              <Pill key={s} label={s} />
            ))}
          </Marquee>
          <Marquee duration={50} reverse>
            {platform.map((s) => (
              <Pill key={s} label={s} />
            ))}
          </Marquee>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = icons[group.category] ?? Code2;
            const last = i === skills.length - 1;
            return (
              <motion.li
                key={group.category}
                className={cn("list-none", last && skills.length % 3 === 2 && "lg:col-span-2")}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Glowing Effect card (Aceternity) */}
                <div className="relative h-full rounded-[1.25rem] border border-white/10 p-2 md:rounded-[1.5rem] md:p-2.5">
                  <GlowingEffect spread={40} proximity={64} borderWidth={3} />
                  <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-950 p-6 shadow-[0px_0px_27px_0px_#2D2D2D33]">
                    <div className="flex items-center gap-3">
                      <div className="w-fit rounded-lg border border-white/10 bg-white/[0.03] p-2">
                        <Icon className="h-4 w-4 text-zinc-300" />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-white">
                        {group.category}
                      </h3>
                      <span className="ml-auto font-mono text-xs text-zinc-600">
                        {String(group.items.length).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-sm text-zinc-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
