"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { GlowCard } from "@/components/motion/glow-card";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { springTransition } from "@/lib/motion";
import { personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    href: undefined,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "Vignesh-2552",
    href: personal.github,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "vignesh-a",
    href: personal.linkedin,
  },
];

export function Contact() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's build something"
          description="Open to AI engineering roles, freelance projects, and collaborations on agentic systems."
        />

        <GlowCard className="rounded-3xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/8 via-white/[0.02] to-violet-500/8 p-8 backdrop-blur-md sm:p-12">
            <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-cyan-500/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 shadow-[0_0_12px_rgba(34,211,238,0.1)]">
                      <Icon size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">{item.label}</p>
                      <p className="text-sm font-medium text-zinc-200">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <StaggerItem key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerChildren>

            <motion.div
              className="mt-10 flex justify-center"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
            >
              <motion.a
                href={`mailto:${personal.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-cyan-500 px-10 text-black shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:bg-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)]"
                )}
                whileHover={reduced ? undefined : { scale: 1.06, y: -2 }}
                whileTap={reduced ? undefined : { scale: 0.96 }}
                transition={springTransition}
              >
                <Mail size={18} />
                Send an Email
              </motion.a>
            </motion.div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
