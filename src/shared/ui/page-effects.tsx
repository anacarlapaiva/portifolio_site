"use client";

import { useEffect } from "react";

export function PageEffects() {
  useEffect(() => {
    window.clearTimeout((window as Window & { __fxT?: number }).__fxT);

    const cleanups: Array<() => void> = [];
    const listen = <K extends keyof WindowEventMap>(
      target: Window | HTMLElement,
      type: K,
      handler: (event: WindowEventMap[K]) => void,
    ) => {
      target.addEventListener(type, handler as EventListener, { passive: true });
      cleanups.push(() => target.removeEventListener(type, handler as EventListener));
    };
    const all = <T extends HTMLElement = HTMLElement>(selector: string) =>
      Array.from(document.querySelectorAll<T>(selector));

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealTargets = all("[data-reveal], [data-clip], [data-line]");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((el) => el.classList.add("in"));
    } else {
      const targetsFor = new Map<Element, HTMLElement[]>();
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            targetsFor.get(entry.target)?.forEach((el) => el.classList.add("in"));
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );

      revealTargets.forEach((el) => {
        const observed = el.hasAttribute("data-clip") && el.parentElement ? el.parentElement : el;
        const group = targetsFor.get(observed);
        if (group) {
          group.push(el);
        } else {
          targetsFor.set(observed, [el]);
          observer.observe(observed);
        }
      });
      cleanups.push(() => observer.disconnect());
    }

    if (reducedMotion) {
      return () => cleanups.forEach((fn) => fn());
    }

    const supportsScrollTimeline = CSS.supports("animation-timeline: scroll()");
    const progressBar = document.querySelector<HTMLElement>(".scroll-progress");
    const marquee = document.querySelector<HTMLElement>("[data-marquee]");
    let lastY = window.scrollY;
    let velocity = 0;
    let scrollFrame = 0;

    const onScrollFrame = () => {
      scrollFrame = 0;
      const y = window.scrollY;
      velocity += (y - lastY - velocity) * 0.2;
      lastY = y;

      if (!supportsScrollTimeline && progressBar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }

      if (marquee) {
        const skew = Math.max(-8, Math.min(8, -velocity * 0.25));
        marquee.style.transform = Math.abs(skew) < 0.05 ? "" : `skewX(${skew.toFixed(2)}deg)`;
      }

      if (Math.abs(velocity) > 0.1) scrollFrame = requestAnimationFrame(onScrollFrame);
    };

    listen(window, "scroll", () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(onScrollFrame);
    });
    cleanups.push(() => cancelAnimationFrame(scrollFrame));
    onScrollFrame();

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return () => cleanups.forEach((fn) => fn());
    }

    const ease = "cubic-bezier(.2,.7,.2,1)";

    const perFrame = <E extends PointerEvent>(apply: (event: E) => void) => {
      let frame = 0;
      let last: E | null = null;
      cleanups.push(() => cancelAnimationFrame(frame));
      return (event: E) => {
        last = event;
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          if (last) apply(last);
        });
      };
    };

    all("[data-tilt]").forEach((card) => {
      listen(
        card,
        "pointermove",
        perFrame((event) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          card.style.transition = "transform .15s ease-out, box-shadow .6s";
          card.style.transform = `perspective(1000px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) translateY(-6px)`;
        }),
      );
      listen(card, "pointerleave", () => {
        requestAnimationFrame(() => {
          card.style.transition = `transform .9s ${ease}, box-shadow .6s`;
          card.style.transform = "";
        });
      });
    });

    all("[data-magnetic]").forEach((button) => {
      const arrow = button.querySelector<HTMLElement>("[data-arrow]");
      listen(
        button,
        "pointermove",
        perFrame((event) => {
          const rect = button.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          button.style.transition = "transform .2s ease-out, border-color .3s, background-color .3s";
          button.style.transform = `translate(${(x * 0.22).toFixed(1)}px, ${(y * 0.35).toFixed(1)}px)`;
          if (arrow) arrow.style.transform = `translate(${(x * 0.12).toFixed(1)}px, ${(y * 0.12).toFixed(1)}px) rotate(45deg)`;
        }),
      );
      listen(button, "pointerleave", () => {
        requestAnimationFrame(() => {
          button.style.transition = "transform .7s cubic-bezier(.3,1.4,.4,1), border-color .3s, background-color .3s";
          button.style.transform = "";
          if (arrow) arrow.style.transform = "";
        });
      });
    });

    all("[data-spot]").forEach((card) => {
      listen(
        card,
        "pointermove",
        perFrame((event) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
          card.style.setProperty("--my", `${event.clientY - rect.top}px`);
        }),
      );
    });

    const depthLayers = all("[data-depth]").map((el) => ({ el, depth: Number(el.dataset.depth) || 0 }));
    if (depthLayers.length) {
      listen(
        window,
        "pointermove",
        perFrame((event) => {
          if (window.scrollY > window.innerHeight) return;
          const x = event.clientX / window.innerWidth - 0.5;
          const y = event.clientY / window.innerHeight - 0.5;
          depthLayers.forEach(({ el, depth }) => {
            el.style.translate = `${(x * depth).toFixed(1)}px ${(y * depth).toFixed(1)}px`;
          });
        }),
      );
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
