"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { GlowingEffect } from "@/components/motion/glowing-effect";
import { LampContainer } from "@/components/motion/lamp";
import { personal } from "@/data/portfolio";
import { useReducedMotion, viewport } from "@/lib/motion";

const contactItems = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: personal.location, href: undefined },
  { icon: GitHubIcon, label: "GitHub", value: "Vignesh-2552", href: personal.github },
  { icon: LinkedInIcon, label: "LinkedIn", value: "vignesh-a", href: personal.linkedin },
];

export function Contact() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="relative scroll-mt-24 pb-28">
      <LampContainer>
        <motion.h2
          className="bg-linear-to-br from-white to-zinc-500 bg-clip-text py-4 text-center text-4xl font-semibold tracking-tight text-transparent md:text-7xl"
          initial={reduced ? false : { opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        >
          Let&apos;s build <br /> something real
        </motion.h2>
        <p className="mt-4 max-w-xl text-center text-zinc-400">
          Open to AI engineering roles, freelance projects, and collaborations on agentic systems.
        </p>
        <a
          href={`mailto:${personal.email}`}
          className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 font-semibold text-zinc-950 shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-shadow hover:shadow-[0_0_60px_rgba(34,211,238,0.5)]"
        >
          <span className="animate-shimmer absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-cyan-200/60 to-transparent" />
          <Mail size={18} className="relative" />
          <span className="relative">Send an email</span>
        </a>
      </LampContainer>

      <div className="mx-auto mt-16 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-6">
        {contactItems.map((item, i) => {
          const Icon = item.icon;
          const external = item.href?.startsWith("http");
          const inner = (
            <div className="relative h-full rounded-2xl border border-white/10 p-1.5">
              <GlowingEffect spread={30} proximity={48} borderWidth={2} />
              <div className="relative flex h-full flex-col gap-4 rounded-xl border border-white/[0.06] bg-zinc-950 p-5">
                <div className="flex items-center justify-between">
                  <Icon size={18} className="text-zinc-300" />
                  {item.href && (
                    <ArrowUpRight
                      size={16}
                      className="text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                    />
                  )}
                </div>
                <div>
                  <p className="text-xs text-zinc-500">{item.label}</p>
                  <p className="mt-0.5 text-sm font-medium break-words text-zinc-200">{item.value}</p>
                </div>
              </div>
            </div>
          );

          return (
            <motion.div
              key={item.label}
              className={item.label === "Email" ? "sm:col-span-2" : "lg:col-span-1"}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="group block h-full"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
