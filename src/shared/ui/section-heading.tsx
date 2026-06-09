import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleClassName?: string;
};

export function SectionHeading({ eyebrow, title, titleClassName }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <span className="glass-panel inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 font-display text-xs uppercase tracking-[0.3em] text-accent shadow-[var(--shadow-sm)]">
        <span
          className="h-2 w-2 rounded-full bg-highlight [box-shadow:inset_0_1px_0_rgba(255,255,255,0.8),0_0_8px_rgba(95,230,194,0.8)]"
          aria-hidden="true"
        />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "max-w-xl font-display text-[1.75rem] leading-tight font-semibold text-foreground sm:text-3xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
