"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { BackgroundPaths } from "@/components/motion/background-paths";
import { CountUp } from "@/components/motion/count-up";
import { Spotlight } from "@/components/motion/spotlight";
import { highlights, personal } from "@/data/portfolio";

// "Animated Hero" rotating words (21st.dev)
const rotating = ["agentic systems", "MCP tool servers", "hybrid RAG", "LLM observability"];

function RotatingWords() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % rotating.length), 2200);
    return () => clearTimeout(id);
  }, [index, reduced]);

  return (
    <span className="relative inline-flex h-[1.2em] w-full justify-center overflow-hidden align-bottom">
      &nbsp;
      {rotating.map((word, i) => (
        <motion.span
          key={word}
          className="absolute bg-linear-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text font-semibold text-transparent"
          initial={reduced ? false : { opacity: 0, y: "-100%" }}
          animate={
            index === i
              ? { y: 0, opacity: 1 }
              : { y: index > i ? "-150%" : "150%", opacity: 0 }
          }
          transition={{ type: "spring", stiffness: 50 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const letters = personal.name.split("");

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-24 pb-28 sm:px-6"
    >
      <BackgroundPaths />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#a5f3fc" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.a
          href="#contact"
          className="group mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pr-3 pl-1 text-sm text-zinc-300 backdrop-blur-md transition-colors hover:border-white/20"
          initial={reduced ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="relative overflow-hidden rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
            <span className="relative z-10">Open to work</span>
            <span className="animate-shimmer absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent" />
          </span>
          {personal.title} · Brightspot
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        {/* Letter-by-letter spring title (Background Paths) */}
        <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl md:text-9xl">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent"
              initial={reduced ? false : { y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.05, type: "spring", stiffness: 150, damping: 25 }}
            >
              {letter === " " ? " " : letter}
            </motion.span>
          ))}
        </h1>

        <motion.h2
          className="mx-auto mt-6 max-w-3xl text-2xl font-medium tracking-tight text-zinc-300 sm:text-4xl"
          initial={reduced ? false : { opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          AI Engineer shipping
          <RotatingWords />
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          {/* Glass pill button (Background Paths CTA) */}
          <div className="group relative overflow-hidden rounded-2xl bg-linear-to-b from-white/15 to-white/5 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-[1.05rem] bg-white px-7 py-3.5 text-base font-semibold text-zinc-950 transition-all duration-300 group-hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-base font-medium text-zinc-200 backdrop-blur-lg transition-colors hover:border-white/20 hover:bg-white/[0.08]"
          >
            Resume
            <ArrowUpRight size={18} />
          </a>
          {[
            { href: personal.github, label: "GitHub", Icon: GitHubIcon },
            { href: personal.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-400 backdrop-blur-lg transition-colors hover:border-white/20 hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          {highlights.map((item) => (
            <div key={item.label} className="px-3 py-5 sm:px-6">
              <p className="text-2xl font-semibold text-white sm:text-4xl">
                <CountUp value={item.value} />
              </p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mt-8 inline-flex items-center gap-1.5 text-sm text-zinc-500"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <MapPin size={14} /> {personal.location}
        </motion.p>
      </div>
    </section>
  );
}
