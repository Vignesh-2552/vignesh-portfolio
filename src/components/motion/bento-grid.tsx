// Adapted from Magic UI "Bento Grid" (21st.dev).
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { GlowingEffect } from "@/components/motion/glowing-effect";
import { cn } from "@/lib/utils";

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("grid w-full auto-rows-[24rem] grid-cols-1 gap-4 md:grid-cols-2", className)}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  background: ReactNode;
  className?: string;
}

export function BentoCard({ name, description, icon: Icon, background, className }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-end rounded-2xl border border-white/10 bg-zinc-900/40 p-1",
        "[box-shadow:0_-20px_80px_-20px_#ffffff14_inset]",
        className
      )}
    >
      <GlowingEffect />
      <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-[0.8rem]">
        <div className="absolute inset-0">{background}</div>
        <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-1 bg-linear-to-t from-zinc-950 via-zinc-950/90 to-transparent p-5 pt-12 sm:p-6 sm:pt-12 transition-all duration-300 group-hover:-translate-y-2">
          <Icon className="h-10 w-10 origin-left transform-gpu text-zinc-500 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-cyan-300" />
          <h3 className="mt-2 text-xl font-semibold text-zinc-100">{name}</h3>
          <p className="max-w-lg text-sm leading-relaxed text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  );
}
