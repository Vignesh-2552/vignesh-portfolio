"use client";

// Adapted from Aceternity UI "Glowing Effect" (21st.dev).
import { memo, useCallback, useEffect, useRef, type CSSProperties } from "react";
import { animate } from "motion/react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  /** Arc length of the glow, in degrees */
  spread?: number;
  /** Fraction of the card's center where the glow switches off */
  inactiveZone?: number;
  /** Distance (px) outside the card that still activates the glow */
  proximity?: number;
  borderWidth?: number;
  movementDuration?: number;
  className?: string;
}

/** Drop inside a `relative` element with a border radius; lights its border toward the pointer. */
export const GlowingEffect = memo(function GlowingEffect({
  spread = 40,
  inactiveZone = 0.01,
  proximity = 64,
  borderWidth = 2,
  movementDuration = 2,
  className,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const frame = useRef(0);

  const handleMove = useCallback(
    (e?: { x: number; y: number }) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;

        const { left, top, width, height } = el.getBoundingClientRect();
        const mouseX = e?.x ?? lastPosition.current.x;
        const mouseY = e?.y ?? lastPosition.current.y;
        if (e) lastPosition.current = { x: mouseX, y: mouseY };

        const cx = left + width / 2;
        const cy = top + height / 2;
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;
        if (Math.hypot(mouseX - cx, mouseY - cy) < inactiveRadius) {
          el.style.setProperty("--active", "0");
          return;
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;
        el.style.setProperty("--active", isActive ? "1" : "0");
        if (!isActive) return;

        const current = parseFloat(el.style.getPropertyValue("--start")) || 0;
        const target = (180 * Math.atan2(mouseY - cy, mouseX - cx)) / Math.PI + 90;
        const diff = ((target - current + 180) % 360) - 180;
        animate(current, current + diff, {
          duration: movementDuration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => el.style.setProperty("--start", String(v)),
        });
      });
    },
    [inactiveZone, proximity, movementDuration]
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => handleMove();
    const onPointer = (e: PointerEvent) => handleMove(e);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.body.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
      document.body.removeEventListener("pointermove", onPointer);
    };
  }, [handleMove]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("glow-border pointer-events-none absolute inset-0 rounded-[inherit]", className)}
      style={
        {
          "--spread": spread,
          "--start": "0",
          "--active": "0",
          "--glow-bw": `${borderWidth}px`,
        } as CSSProperties
      }
    />
  );
});
