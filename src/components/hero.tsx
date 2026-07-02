"use client";

import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { AuroraBackground } from "@/components/motion/aurora-background";
import { CountUp } from "@/components/motion/count-up";
import { GradientText } from "@/components/motion/gradient-text";
import { TextReveal } from "@/components/motion/text-reveal";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp, springTransition, staggerContainer } from "@/lib/motion";
import { highlights, personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Hero() {
  const reduced = useReducedMotion();
  const [firstName, lastName] = personal.name.split(" ");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <AuroraBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -20, scale: 0.9 }}
          animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springTransition, delay: 0.1 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </span>
            Available for opportunities
          </div>
        </motion.div>

        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          <TextReveal text={firstName} delay={0.25} as="span" />
          <br className="sm:hidden" />
          <span className="sm:ml-3">
            <GradientText delay={0.55}>{lastName}</GradientText>
          </span>
        </h1>

        <motion.p
          className="mt-6 font-mono text-lg text-cyan-400 sm:text-xl"
          initial={reduced ? false : { opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="relative">
            {personal.title}
            <motion.span
              className="absolute -right-3 top-0 text-cyan-400"
              animate={reduced ? undefined : { opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </span>
        </motion.p>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400"
          initial={reduced ? false : { opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          className="mt-5 flex items-center justify-center gap-2 text-sm text-zinc-500"
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.5 }}
        >
          <MapPin size={14} className="text-cyan-500/60" />
          {personal.location}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={reduced ? false : "hidden"}
          animate={reduced ? undefined : "visible"}
          variants={staggerContainer}
        >
          {[
            {
              key: "projects",
              href: "#projects",
              label: "View Projects",
              primary: true,
              icon: null,
              external: false,
            },
            {
              key: "resume",
              href: "/resume",
              label: "Resume",
              primary: false,
              icon: FileText,
              external: true,
            },
            {
              key: "contact",
              href: `mailto:${personal.email}`,
              label: "Contact Me",
              primary: false,
              icon: Mail,
              external: false,
            },
          ].map((btn) => (
            <motion.div
              key={btn.key}
              variants={fadeUp}
              transition={springTransition}
              whileHover={reduced ? undefined : { scale: 1.06, y: -2 }}
              whileTap={reduced ? undefined : { scale: 0.96 }}
            >
              <a
                href={btn.href}
                target={btn.external ? "_blank" : undefined}
                rel={btn.external ? "noopener noreferrer" : undefined}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  btn.primary
                    ? "relative overflow-hidden bg-cyan-500 px-8 text-black shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:bg-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)]"
                    : "border border-white/15 bg-white/5 px-8 text-zinc-200 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-white/10 hover:text-white"
                )}
              >
                {btn.icon && <btn.icon size={18} />}
                {btn.label}
              </a>
            </motion.div>
          ))}

          {[personal.github, personal.linkedin].map((href, i) => {
            const Icon = i === 0 ? GitHubIcon : LinkedInIcon;
            const label = i === 0 ? "GitHub" : "LinkedIn";
            return (
              <motion.div
                key={href}
                variants={fadeUp}
                transition={springTransition}
                whileHover={reduced ? undefined : { scale: 1.1, rotate: 5 }}
                whileTap={reduced ? undefined : { scale: 0.9 }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon-lg" }),
                    "border-white/15 bg-white/5 text-zinc-400 backdrop-blur-sm hover:border-cyan-500/40 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  )}
                >
                  <Icon size={20} />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-3 gap-4 sm:gap-6"
          initial={reduced ? false : "hidden"}
          animate={reduced ? undefined : "visible"}
          variants={staggerContainer}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              transition={springTransition}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 backdrop-blur-md sm:px-6"
              whileHover={
                reduced
                  ? undefined
                  : {
                      y: -6,
                      borderColor: "rgba(34, 211, 238, 0.4)",
                      boxShadow: "0 20px 40px rgba(34, 211, 238, 0.1)",
                    }
              }
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="relative text-2xl font-bold text-cyan-400 sm:text-4xl">
                <CountUp value={item.value} />
              </p>
              <p className="relative mt-2 text-xs text-zinc-500 sm:text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          className="mt-20 inline-flex flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-cyan-400"
          aria-label="Scroll to about"
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.4, duration: 0.5 },
            y: { delay: 1.6, duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} />
        </motion.a>
      </div>
    </section>
  );
}
