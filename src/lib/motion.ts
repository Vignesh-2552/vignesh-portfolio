import { useSyncExternalStore } from "react";

export const viewport = {
  once: true,
  margin: "-60px" as const,
};

const reducedQuery = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(reducedQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/**
 * Hydration-safe `useReducedMotion`: reports `false` on the server and during
 * hydration (so markup matches), then the real preference right after.
 */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(reducedQuery).matches,
    () => false
  );
}
