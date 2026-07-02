"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { viewport } from "@/lib/motion";

export type AgentGraphNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  accent?: "cyan" | "violet";
};

export type AgentGraphEdge = {
  from: string;
  to: string;
  /** Conditional path (e.g. human-in-the-loop interrupt) — rendered dashed, no flow pulse */
  dashed?: boolean;
};

export type AgentGraphData = {
  caption: string;
  nodes: AgentGraphNode[];
  edges: AgentGraphEdge[];
};

const NODE_H = 24;

const accentStyles = {
  cyan: {
    stroke: "rgba(34,211,238,0.5)",
    fill: "rgba(34,211,238,0.08)",
    text: "#a5f3fc",
  },
  violet: {
    stroke: "rgba(167,139,250,0.5)",
    fill: "rgba(167,139,250,0.08)",
    text: "#ddd6fe",
  },
  none: {
    stroke: "rgba(255,255,255,0.18)",
    fill: "rgba(255,255,255,0.04)",
    text: "#d4d4d8",
  },
} as const;

function edgePath(from: AgentGraphNode, to: AgentGraphNode) {
  if (to.x >= from.x + from.w + 8) {
    const x1 = from.x + from.w;
    const y1 = from.y + NODE_H / 2;
    const x2 = to.x;
    const y2 = to.y + NODE_H / 2;
    const mx = (x1 + x2) / 2;
    return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
  }
  const x1 = from.x + from.w / 2;
  const y1 = from.y + NODE_H;
  const x2 = to.x + to.w / 2;
  const y2 = to.y;
  return `M ${x1} ${y1} C ${x1} ${y1 + 34}, ${x2} ${y2 - 34}, ${x2} ${y2}`;
}

export function AgentGraph({ graph }: { graph: AgentGraphData }) {
  const reduced = useReducedMotion();
  const uid = useId();
  const markerCyan = `${uid}-arrow-c`;
  const markerViolet = `${uid}-arrow-v`;
  const byId = Object.fromEntries(graph.nodes.map((n) => [n.id, n]));

  return (
    <figure className="mb-4 rounded-xl border border-white/10 bg-black/30 p-3">
      <motion.svg
        viewBox="0 0 300 128"
        className="w-full"
        role="img"
        aria-label={graph.caption}
        initial={reduced ? undefined : "hidden"}
        whileInView={reduced ? undefined : "visible"}
        viewport={viewport}
      >
        <defs>
          <marker
            id={markerCyan}
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 8 4 L 0 8 z" fill="rgba(34,211,238,0.6)" />
          </marker>
          <marker
            id={markerViolet}
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 8 4 L 0 8 z" fill="rgba(167,139,250,0.6)" />
          </marker>
        </defs>

        {graph.edges.map((edge, i) => {
          const d = edgePath(byId[edge.from], byId[edge.to]);
          return (
            <g key={`${edge.from}-${edge.to}`}>
              <motion.path
                d={d}
                fill="none"
                stroke={
                  edge.dashed ? "rgba(167,139,250,0.45)" : "rgba(34,211,238,0.3)"
                }
                strokeWidth={1.2}
                strokeDasharray={edge.dashed ? "3 3" : undefined}
                markerEnd={`url(#${edge.dashed ? markerViolet : markerCyan})`}
                variants={
                  reduced
                    ? undefined
                    : edge.dashed
                      ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                      : {
                          hidden: { pathLength: 0, opacity: 0 },
                          visible: { pathLength: 1, opacity: 1 },
                        }
                }
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              />
              {!edge.dashed && !reduced && (
                <motion.path
                  d={d}
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeDasharray="6 400"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 0.9, strokeDashoffset: [0, -406] },
                  }}
                  transition={{
                    opacity: { duration: 0.3, delay: 1.1 },
                    strokeDashoffset: {
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.9 + i * 0.5,
                    },
                  }}
                />
              )}
            </g>
          );
        })}

        {graph.nodes.map((node, i) => {
          const a = accentStyles[node.accent ?? "none"];
          return (
            <motion.g
              key={node.id}
              variants={
                reduced
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 6 },
                      visible: { opacity: 1, y: 0 },
                    }
              }
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <rect
                x={node.x}
                y={node.y}
                width={node.w}
                height={NODE_H}
                rx={6}
                fill={a.fill}
                stroke={a.stroke}
                strokeWidth={1}
              />
              <text
                x={node.x + node.w / 2}
                y={node.y + 15.5}
                textAnchor="middle"
                fontSize={9}
                fontFamily="var(--font-geist-mono), ui-monospace, monospace"
                fill={a.text}
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </motion.svg>
      <figcaption className="mt-2 text-center font-mono text-[10px] tracking-wider text-zinc-600 uppercase">
        {graph.caption}
      </figcaption>
    </figure>
  );
}
