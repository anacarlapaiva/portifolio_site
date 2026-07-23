"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.35,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.1,
    });

    let frameId = 0;
    let lastParallax = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    const onScroll = (instance: Lenis) => {
      const scroll = instance.scroll;
      // Skip tiny updates to avoid style thrash on sub-pixel scroll
      if (Math.abs(scroll - lastParallax) < 0.5) {
        return;
      }
      lastParallax = scroll;
      document.documentElement.style.setProperty("--orb-parallax", `${scroll}`);
    };

    lenis.on("scroll", onScroll);
    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      document.documentElement.style.removeProperty("--orb-parallax");
    };
  }, []);

  return children;
}
