"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element is on screen AND the tab is visible.
 *
 * Every canvas/WebGL loop on this page is gated on this so that only the
 * animation the viewer is actually looking at burns a frame budget.
 */
export function useInView<T extends HTMLElement>(rootMargin = "200px") {
  const ref = useRef<T>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let onScreen = false;

    const sync = () => setActive(onScreen && !document.hidden);

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { rootMargin },
    );
    io.observe(el);

    document.addEventListener("visibilitychange", sync);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [rootMargin]);

  return { ref, active };
}

/** Respects the OS "reduce motion" setting. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}
