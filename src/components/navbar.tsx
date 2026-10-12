"use client";

// Adapted from "Tubelight Navbar" (21st.dev).
import { useEffect, useState } from "react";
import {
  Briefcase,
  Code2,
  FileText,
  FolderGit2,
  Home,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const items: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "top", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label="Primary"
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:top-5 sm:bottom-auto"
      initial={reduced ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-950/60 p-1 shadow-lg shadow-black/40 backdrop-blur-lg sm:gap-2">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white md:px-5",
                isActive && "text-white"
              )}
            >
              <span className="hidden md:inline">{label}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.2} />
              </span>
              {isActive && (
                <motion.span
                  layoutId="tubelight"
                  className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <span className="absolute -top-[5px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-cyan-300 sm:-top-[5px]">
                    <span className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-cyan-300/25 blur-md" />
                    <span className="absolute -top-1 h-6 w-8 rounded-full bg-cyan-300/25 blur-md" />
                    <span className="absolute top-0 left-2 h-4 w-4 rounded-full bg-cyan-300/25 blur-sm" />
                  </span>
                </motion.span>
              )}
            </a>
          );
        })}
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-200 md:px-5"
        >
          <FileText size={16} className="md:hidden" />
          <span className="hidden md:inline">Resume</span>
        </a>
      </div>
    </motion.nav>
  );
}
