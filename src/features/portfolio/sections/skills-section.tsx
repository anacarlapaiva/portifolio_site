import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/features/portfolio/data";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function SkillsSection() {
  return (
    <MotionReveal
      as="section"
      id="skills"
      className="scroll-mt-28 rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
      delay={0.05}
    >
      <SectionHeading eyebrow="Skills" title="Ferramentas e repertório para tirar ideias do papel" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skills.map(({ name, description, icon: Icon }, index) => (
          <MotionReveal
            key={name}
            delay={0.06 * index}
          >
            <Card className="h-full">
              <CardContent>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground sm:text-xl">{name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
              </CardContent>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </MotionReveal>
  );
}
