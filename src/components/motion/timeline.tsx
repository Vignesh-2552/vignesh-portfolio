"use client";

// Adapted from Aceternity UI "Timeline" (21st.dev).
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/lib/motion";

export interface TimelineEntry {
  title: string;
  subtitle?: string;
  content: ReactNode;
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setHeight(el.getBoundingClientRect().height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full">
      <div ref={innerRef} className="relative pb-10">
        {data.map((item) => (
          <div key={item.title} className="flex justify-start pt-10 lg:gap-10 lg:pt-20">
            <div className="sticky top-32 z-40 flex flex-col items-center self-start lg:w-full lg:max-w-xs lg:flex-row xl:max-w-sm">
              <div className="absolute left-0 flex h-10 w-10 lg:left-3 items-center justify-center rounded-full bg-(--page-bg)">
                <div className="h-4 w-4 rounded-full border border-zinc-700 bg-zinc-800 p-2" />
              </div>
              <div className="hidden lg:block lg:pl-20">
                <h3 className="text-3xl font-bold text-zinc-500 xl:text-4xl">{item.title}</h3>
                {item.subtitle && (
                  <p className="mt-2 font-mono text-sm text-zinc-600">{item.subtitle}</p>
                )}
              </div>
            </div>

            <div className="relative w-full min-w-0 pr-0 pl-12 sm:pl-14 lg:pl-4">
              <div className="mb-4 lg:hidden">
                <h3 className="text-2xl font-bold text-zinc-500">{item.title}</h3>
                {item.subtitle && (
                  <p className="mt-1 font-mono text-xs text-zinc-600">{item.subtitle}</p>
                )}
              </div>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height }}
          className="absolute top-0 left-5 w-[2px] lg:left-8 overflow-hidden bg-linear-to-b from-transparent via-zinc-700 to-transparent mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: reduced ? height : beamHeight,
              opacity: reduced ? 1 : beamOpacity,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-linear-to-t from-violet-500 from-0% via-cyan-400 via-10% to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
