import type { ReactNode } from "react";

import { cn, delay } from "@/lib/utils";

type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: ReactNode;
  titleClassName?: string;
  reveal?: boolean;
};

export function SectionHeading({ number, eyebrow, title, titleClassName, reveal = true }: SectionHeadingProps) {
  const revealProps = reveal ? { "data-reveal": "" } : {};

  return (
    <>
      <p {...revealProps} className="m-0 font-pixel text-[15px] text-accent">
        {number} · {eyebrow}
      </p>
      <h2
        {...revealProps}
        style={delay(70)}
        className={cn(
          "mt-3 mb-0 font-display text-[clamp(28px,4.2vw,52px)] font-semibold tracking-[-0.04em] text-balance",
          titleClassName,
          "leading-[1.05]",
        )}
      >
        {title}
      </h2>
    </>
  );
}
