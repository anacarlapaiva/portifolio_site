type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </p>
      <h2 className="max-w-xl font-display text-3xl leading-tight font-semibold text-foreground">
        {title}
      </h2>
    </div>
  );
}
