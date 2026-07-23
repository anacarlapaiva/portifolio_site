import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleClassName?: string;
};

export function SectionHeading({ eyebrow, title, titleClassName }: SectionHeadingProps) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <span className="glass-panel inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 px-2.5 py-1 font-display text-[0.65rem] uppercase tracking-[0.18em] text-accent shadow-[var(--shadow-sm)] sm:px-3 sm:text-xs sm:tracking-[0.3em]">
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-highlight [box-shadow:inset_0_1px_0_rgba(255,255,255,0.8),0_0_8px_rgba(95,230,194,0.8)]"
          aria-hidden="true"
        />
        <span className="truncate">{eyebrow}</span>
      </span>
      <h2
        className={cn(
          "max-w-xl font-display text-[1.45rem] leading-tight font-semibold text-foreground sm:text-[1.75rem] md:text-3xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
