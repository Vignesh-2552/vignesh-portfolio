"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <FadeIn direction="none">
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-sm text-zinc-600">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600">
            Built with{" "}
            <span className="text-cyan-400">Next.js</span> &{" "}
            <span className="text-violet-400">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </FadeIn>
  );
}
