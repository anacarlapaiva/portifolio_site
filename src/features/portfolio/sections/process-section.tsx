import { Card, CardContent } from "@/components/ui/card";
import { process } from "@/features/portfolio/data";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function ProcessSection() {
  return (
    <MotionReveal
      as="section"
      className="rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
      delay={0.12}
    >
      <SectionHeading
        eyebrow="Como eu trabalho"
        title="Uma forma de construir que junta estética, produto e implementação"
      />
      <div className="mt-8 grid gap-4">
        {process.map(({ title, description, icon: Icon }, index) => (
          <MotionReveal key={title} delay={0.07 * index}>
            <Card>
              <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted sm:text-[0.96rem]">{description}</p>
                </div>
              </CardContent>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </MotionReveal>
  );
}
