import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleClassName?: string;
};

export function SectionHeading({ eyebrow, title, titleClassName }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </p>
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
