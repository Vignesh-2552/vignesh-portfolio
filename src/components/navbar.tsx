"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { easeTransition } from "@/lib/motion";
import { navLinks, personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#08080f]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      initial={reduced ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...easeTransition, delay: 0.05 }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-wider text-white"
        >
          VA<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-zinc-400 transition-colors hover:text-cyan-400"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Resume
          </a>
          <motion.a
            href={`mailto:${personal.email}`}
            className={cn(
              buttonVariants({ size: "sm" }),
              "border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20"
            )}
            whileHover={reduced ? undefined : { scale: 1.05 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={easeTransition}
          >
            Get in Touch
          </motion.a>
        </div>

        <button
          type="button"
          className="text-zinc-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-b border-white/10 bg-[#08080f]/95 px-6 py-4 backdrop-blur-xl md:hidden"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={easeTransition}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduced ? false : { x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ...easeTransition, delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="block text-sm text-zinc-300"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={reduced ? false : { x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ...easeTransition, delay: navLinks.length * 0.05 }}
              >
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-zinc-300"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </a>
              </motion.li>
              <motion.li
                initial={reduced ? false : { x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ...easeTransition, delay: (navLinks.length + 1) * 0.05 }}
              >
                <a
                  href={`mailto:${personal.email}`}
                  className="block text-sm text-cyan-400"
                  onClick={() => setOpen(false)}
                >
                  Get in Touch
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
