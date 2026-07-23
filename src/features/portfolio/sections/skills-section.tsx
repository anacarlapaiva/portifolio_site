"use client";

import { Code2, Layers3, MonitorSmartphone, PencilRuler, Smartphone, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function SkillsSection() {
  const { content } = usePortfolioI18n();
  const { skills } = content;

  return (
    <MotionReveal
      as="section"
      id="skills"
      className="min-w-0 scroll-mt-24 rounded-[1.5rem] border border-white/25 glass-panel px-4 py-5 sm:scroll-mt-28 sm:rounded-[2rem] sm:px-8 sm:py-8"
      delay={0.05}
    >
      <SectionHeading eyebrow={skills.eyebrow} title={skills.title} />
      <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {skills.items.map(({ name, description }, index) => {
          const icons = [Code2, MonitorSmartphone, PencilRuler, Layers3, Sparkles, Smartphone];
          const Icon = icons[index];

          if (!Icon) {
            return null;
          }

          return (
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
          );
        })}
      </div>
    </MotionReveal>
  );
}
