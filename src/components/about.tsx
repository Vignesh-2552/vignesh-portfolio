"use client";

import { useId } from "react";
import { Activity, Layers, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/motion";
import { AnimatedList } from "@/components/motion/animated-list";
import { BentoCard, BentoGrid } from "@/components/motion/bento-grid";
import { Marquee } from "@/components/motion/marquee";
import { SectionHeading } from "@/components/section-heading";
import { competencies, projects } from "@/data/portfolio";

function CompetencyMarquee() {
  return (
    <div className="absolute inset-x-0 top-6 space-y-3 [mask-image:linear-gradient(to_bottom,#000_50%,transparent)]">
      {[false, true].map((reverse) => (
        <Marquee key={String(reverse)} reverse={reverse} duration={reverse ? 50 : 40} className="[--gap:0.75rem]">
          {(reverse ? [...competencies].reverse() : competencies).map((c) => (
            <figure
              key={c}
              className="w-60 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-snug text-zinc-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >
              {c}
            </figure>
          ))}
        </Marquee>
      ))}
    </div>
  );
}

function PlatformStack() {
  const reduced = useReducedMotion();
  return (
    <div className="absolute inset-x-6 top-5 flex flex-col items-center gap-2">
      {projects.map((p, i) => (
        <motion.div
          key={p.name}
          className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-2 shadow-xl shadow-black/40"
          style={{ translateX: (i - 1) * 14 }}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 * i, type: "spring", stiffness: 120, damping: 18 }}
        >
          <p className="text-sm leading-tight font-semibold text-white">{p.name}</p>
          <p className="truncate text-xs text-zinc-500">{p.subtitle}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Animated Beam (Magic UI) between two stack nodes
function TransitionBeam() {
  const reduced = useReducedMotion();
  const id = useId().replace(/:/g, "");
  const d = "M 70 70 C 140 10, 190 130, 260 70";

  return (
    <div className="absolute inset-x-0 top-6 flex justify-center">
      <svg viewBox="0 0 330 140" className="w-full max-w-sm" aria-hidden>
        <path d={d} stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
        <path d={d} stroke={`url(#${id})`} strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <defs>
          <motion.linearGradient
            id={id}
            gradientUnits="userSpaceOnUse"
            initial={{ x1: "0%", x2: "10%" }}
            animate={reduced ? { x1: "0%", x2: "10%" } : { x1: ["0%", "100%"], x2: ["10%", "110%"] }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 2.5, repeat: Infinity, ease: [0.16, 1, 0.3, 1], repeatDelay: 0.4 }
            }
            y1="0"
            y2="0"
          >
            <stop stopColor="#22d3ee" stopOpacity="0" />
            <stop stopColor="#22d3ee" />
            <stop offset="32.5%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
        {[
          { x: 70, label: "PHP" },
          { x: 260, label: "LangGraph" },
        ].map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={70} r={28} fill="#0b0b10" stroke="rgba(255,255,255,0.15)" />
            <text
              x={n.x}
              y={74}
              textAnchor="middle"
              fontSize={n.label.length > 4 ? 9 : 12}
              fontFamily="var(--font-geist-mono), monospace"
              fill={n.label === "PHP" ? "#a1a1aa" : "#a5f3fc"}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// Illustrative tool-call stream for the MCP / observability card
const toolCalls = [
  { tool: "get_order", meta: "orders · 118ms", tone: "cyan" },
  { tool: "rerank_products", meta: "qdrant · 64ms", tone: "violet" },
  { tool: "issue_refund", meta: "interrupt → human", tone: "amber" },
  { tool: "lookup_customer", meta: "crm · 92ms", tone: "cyan" },
  { tool: "hybrid_search", meta: "dense+sparse · 41ms", tone: "violet" },
  { tool: "create_reservation", meta: "write · 133ms", tone: "cyan" },
] as const;

const toneDot = {
  cyan: "bg-cyan-400 shadow-[0_0_8px_#22d3ee]",
  violet: "bg-violet-400 shadow-[0_0_8px_#a78bfa]",
  amber: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
};

function ToolCallStream() {
  return (
    <div className="absolute inset-x-6 top-5 [mask-image:linear-gradient(to_bottom,#000_55%,transparent)] sm:inset-x-16">
      <AnimatedList
        items={toolCalls.map((c) => (
          <div
            key={c.tool}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/80 px-3 py-2.5 sm:px-4 backdrop-blur-md"
          >
            <span className={`h-2 w-2 shrink-0 rounded-full ${toneDot[c.tone]}`} />
            <span className="truncate font-mono text-sm text-zinc-200">{c.tool}()</span>
            <span className="ml-auto hidden truncate font-mono text-xs text-zinc-500 min-[400px]:inline">{c.meta}</span>
          </div>
        ))}
      />
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Engineering AI that works in production"
          description="I build the backend infrastructure that decides whether an AI product is ready to scale — MCP tool servers, hybrid RAG, FastAPI services, and LLM observability. I own backend architecture across 3 AI platforms at Brightspot."
        />

        <BentoGrid className="lg:grid-cols-3">
          <BentoCard
            className="md:col-span-2"
            icon={Sparkles}
            name="Agentic systems, end to end"
            description="LangGraph multi-agent workflows, deterministic tool servers, retrieval, streaming and the observability to prove it all works."
            background={<CompetencyMarquee />}
          />
          <BentoCard
            className="lg:col-span-1"
            icon={Layers}
            name="3 AI platforms"
            description="Support, commerce and dev automation — all running on Python, FastAPI, LangGraph and FastMCP."
            background={<PlatformStack />}
          />
          <BentoCard
            className="lg:col-span-1"
            icon={TrendingUp}
            name="PHP → LangGraph"
            description="Transitioned from PHP/MySQL backend engineering into LangGraph multi-agent architecture in 2024."
            background={<TransitionBeam />}
          />
          <BentoCard
            className="md:col-span-2"
            icon={Activity}
            name="Every tool call, traced"
            description="10+ typed MCP business tools with human-in-the-loop interrupts, traced through LangSmith and OpenTelemetry into Datadog."
            background={<ToolCallStream />}
          />
        </BentoGrid>
      </div>
    </section>
  );
}
