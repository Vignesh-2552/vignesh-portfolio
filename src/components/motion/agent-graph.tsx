"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { useReducedMotion, viewport } from "@/lib/motion";

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
  /** Loop back between nodes on the same row, arcing above ("up") or below ("down") */
  loop?: "up" | "down";
  /** Force a top-to-bottom edge even when the target sits to the right (e.g. fan-outs) */
  vertical?: boolean;
};

export type AgentGraphData = {
  caption: string;
  nodes: AgentGraphNode[];
  edges: AgentGraphEdge[];
  /** viewBox height; width is always 300. Defaults to 128. */
  height?: number;
};

const NODE_H = 24;
const LOOP_ARC = 20;

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

function edgePath(
  from: AgentGraphNode,
  to: AgentGraphNode,
  { loop, vertical }: Pick<AgentGraphEdge, "loop" | "vertical"> = {}
) {
  const fx = from.x + from.w / 2;
  const tx = to.x + to.w / 2;

  // Loop-back arc between nodes on the same row
  if (loop) {
    const y1 = loop === "up" ? from.y : from.y + NODE_H;
    const y2 = loop === "up" ? to.y : to.y + NODE_H;
    const cy = loop === "up" ? Math.min(y1, y2) - LOOP_ARC : Math.max(y1, y2) + LOOP_ARC;
    return `M ${fx} ${y1} C ${fx} ${cy}, ${tx} ${cy}, ${tx} ${y2}`;
  }

  const fy = from.y + NODE_H / 2;
  const ty = to.y + NODE_H / 2;
  const sameRow = Math.abs(from.y - to.y) < 4;

  // Rightward
  if (!vertical && to.x >= from.x + from.w + 8) {
    const x1 = from.x + from.w;
    const x2 = to.x;
    const mx = (x1 + x2) / 2;
    return `M ${x1} ${fy} C ${mx} ${fy}, ${mx} ${ty}, ${x2} ${ty}`;
  }
  // Leftward on the same row
  if (sameRow && to.x + to.w + 8 <= from.x) {
    const x1 = from.x;
    const x2 = to.x + to.w;
    return `M ${x1} ${fy} L ${x2} ${ty}`;
  }
  // Upward
  if (to.y < from.y) {
    const y1 = from.y;
    const y2 = to.y + NODE_H;
    return `M ${fx} ${y1} C ${fx} ${y1 - 34}, ${tx} ${y2 + 34}, ${tx} ${y2}`;
  }
  // Downward
  const y1 = from.y + NODE_H;
  const y2 = to.y;
  return `M ${fx} ${y1} C ${fx} ${y1 + 34}, ${tx} ${y2 - 34}, ${tx} ${y2}`;
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
        viewBox={`0 0 300 ${graph.height ?? 128}`}
        className="w-full"
        role="img"
        aria-label={graph.caption}
        initial="hidden"
        whileInView="visible"
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
          const d = edgePath(byId[edge.from], byId[edge.to], edge);
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
                  edge.dashed
                    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                    : {
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { pathLength: 1, opacity: 1 },
                      }
                }
                transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.3 + i * 0.15 }}
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
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={reduced ? { duration: 0 } : { duration: 0.4, delay: i * 0.1 }}
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
