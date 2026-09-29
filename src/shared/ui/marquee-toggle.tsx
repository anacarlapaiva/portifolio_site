"use client";

import { useState } from "react";

type MarqueeToggleProps = {
  pauseLabel: string;
  playLabel: string;
};

export function MarqueeToggle({ pauseLabel, playLabel }: MarqueeToggleProps) {
  const [isPaused, setIsPaused] = useState(false);
  const label = isPaused ? playLabel : pauseLabel;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={isPaused}
      onClick={(event) => {
        const next = !isPaused;
        setIsPaused(next);
        event.currentTarget.parentElement?.classList.toggle("marquee-paused", next);
      }}
      className="absolute top-1/2 right-2 z-[1] grid h-8 w-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-surface text-[11px] text-muted motion-reduce:hidden"
    >
      <span aria-hidden="true">{isPaused ? "▶" : "❚❚"}</span>
    </button>
  );
}
