"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";

import { flavorMedia, type PortfolioContent } from "@/features/portfolio/content";
import { WindowBar } from "@/shared/ui/window-bar";

type MatchProteinShowcaseProps = {
  featured: PortfolioContent["projects"]["featured"];
  href: string | null;
  newTabLabel: string;
};

const videoSrc = (key: string) => `/project-previews/match-${key}.mp4`;
const posterSrc = (key: string) => `/project-previews/match-${key}-poster.jpg`;

export function MatchProteinShowcase({ featured, href, newTabLabel }: MatchProteinShowcaseProps) {
  const [flavor, setFlavor] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<Array<HTMLVideoElement | null>>([]);
  const flavorRef = useRef(0);

  const playFlavor = useCallback((index: number) => {
    flavorRef.current = index;
    setFlavor(index);
    setIsPlaying(true);

    videosRef.current.forEach((video, videoIndex) => {
      if (!video) return;

      if (videoIndex === index) {
        video.currentTime = 0;
        video.play().catch(() => setIsPlaying(false));
      } else {
        video.pause();
      }
    });
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !("IntersectionObserver" in window)) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    let timer = 0;

    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        nearObserver.disconnect();
        const first = videosRef.current[flavorRef.current];
        if (first && !saveData) first.preload = "auto";
      },
      { rootMargin: "400px 0px" },
    );

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        playObserver.disconnect();
        if (reducedMotion || saveData) return;
        timer = window.setTimeout(() => playFlavor(flavorRef.current), 700);
      },
      { threshold: 0.5 },
    );

    nearObserver.observe(card);
    playObserver.observe(card);

    return () => {
      nearObserver.disconnect();
      playObserver.disconnect();
      window.clearTimeout(timer);
    };
  }, [playFlavor]);

  const onStageKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      playFlavor(flavor);
    }
  };

  return (
    <div
      ref={cardRef}
      data-reveal=""
      className="shadow-glow mt-[clamp(36px,5vw,56px)] overflow-hidden rounded-[22px] border border-line bg-surface"
    >
      <WindowBar title={featured.fileName} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))]">
        <div
          data-clip=""
          role="button"
          tabIndex={0}
          aria-label={featured.stageAriaLabel}
          onClick={() => playFlavor(flavor)}
          onKeyDown={onStageKeyDown}
          className="relative min-h-[min(58vw,440px)] w-full min-w-0 cursor-pointer self-stretch overflow-hidden transition-[background-color] duration-600"
          style={{ backgroundColor: flavorMedia[flavor].stage }}
        >
          {flavorMedia.map((media, index) => (
            <video
              key={media.key}
              ref={(node) => {
                videosRef.current[index] = node;
              }}
              src={videoSrc(media.key)}
              poster={index === 0 ? posterSrc(media.key) : undefined}
              muted
              playsInline
              preload="none"
              aria-hidden="true"
              tabIndex={-1}
              onEnded={() => {
                if (flavorRef.current === index) setIsPlaying(false);
              }}
              className="absolute inset-0 block h-full w-full object-cover transition-[opacity,transform] duration-[700ms,1400ms] ease-[var(--ease)]"
              style={{
                opacity: index === flavor ? 1 : 0,
                transform: index === flavor ? "scale(1)" : "scale(1.08)",
              }}
            />
          ))}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 left-4 flex max-w-[calc(100%-32px)] items-center gap-2 rounded-full bg-white/85 py-2 pr-3.5 pl-2 text-[13px] font-medium whitespace-nowrap text-[#0b1a2b] backdrop-blur-[8px] transition-[opacity,transform] duration-[400ms,500ms] ease-[var(--ease)]"
            style={{
              opacity: isPlaying ? 0 : 1,
              transform: isPlaying ? "translateY(10px)" : "translateY(0)",
            }}
          >
            <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-[#0b1a2b] text-[10px] text-white">
              ▶
            </span>
            <span className="hint-mouse truncate">{featured.hint}</span>
            <span className="hint-touch truncate">{featured.hintTouch}</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-5 p-[clamp(20px,4vw,44px)]">
          <div className="flex items-baseline justify-between gap-3 font-pixel text-sm">
            <span className="text-accent">✦ {featured.badge}</span>
            <span className="text-muted">01</span>
          </div>
          <div>
            <h3 className="m-0 font-display text-[clamp(26px,3vw,38px)] leading-[1.05] font-semibold tracking-[-0.04em]">
              {featured.title}
            </h3>
            <p className="mt-3 mb-0 max-w-[30em] text-base leading-[1.6] text-muted">{featured.description}</p>
          </div>

          <div>
            <p id="flavor-picker-label" className="m-0 pb-2.5 font-pixel text-[13px] text-muted">
              {featured.pickerLabel}
            </p>
            <div
              role="group"
              aria-labelledby="flavor-picker-label"
              className="relative grid grid-cols-3 rounded-[14px] border border-line bg-sky p-1"
            >
              <div
                aria-hidden="true"
                className="absolute top-1 bottom-1 left-1 w-[calc((100%-8px)/3)] rounded-[10px] bg-surface shadow-[0_6px_16px_-8px_rgba(11,26,43,0.35),0_0_0_1px_var(--line)] transition-transform duration-[550ms] ease-[var(--ease-spring)]"
                style={{ transform: `translateX(${flavor * 100}%)` }}
              />
              {flavorMedia.map((media, index) => (
                <button
                  key={media.key}
                  type="button"
                  aria-pressed={index === flavor}
                  onClick={() => playFlavor(index)}
                  className="relative flex min-h-11 min-w-0 cursor-pointer items-center justify-center gap-[7px] rounded-[10px] border-0 bg-transparent px-1 py-2 text-sm font-medium text-ink max-[479px]:flex-col max-[479px]:gap-1 max-[479px]:text-[13px]"
                >
                  <span
                    aria-hidden="true"
                    className="h-3 w-3 flex-none rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
                    style={{ backgroundColor: media.color }}
                  />
                  <span className="truncate">{featured.flavors[index]}</span>
                </button>
              ))}
            </div>
          </div>

          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {featured.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs">
                {tag}
              </li>
            ))}
          </ul>

          {href ? (
            <a href={href} target="_blank" rel="noopener" data-magnetic="" className="btn-primary mt-auto self-start">
              {featured.cta}
              <span className="sr-only"> {newTabLabel}</span>
              <span data-arrow="" className="btn-orb" aria-hidden="true">
                ↗
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
