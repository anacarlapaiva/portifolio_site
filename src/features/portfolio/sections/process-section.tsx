"use client";

import { Rocket, ScanSearch, Workflow } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function ProcessSection() {
  const { content } = usePortfolioI18n();
  const { process } = content;

  return (
    <MotionReveal
      as="section"
      className="min-w-0 rounded-[2rem] border border-line glass-panel px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
      delay={0.12}
    >
      <SectionHeading
        eyebrow={process.eyebrow}
        title={process.title}
      />
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {process.items.map(({ title, description }, index) => {
          const icons = [ScanSearch, Workflow, Rocket];
          const Icon = icons[index];

          if (!Icon) {
            return null;
          }

          return (
            <MotionReveal key={title} delay={0.07 * index} className="h-full">
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent" aria-hidden="true">
                      <Icon size={20} />
                    </div>
                    <span className="font-display text-sm font-semibold text-accent">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted sm:text-[0.96rem]">{description}</p>
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>
          );
        })}
      </div>
    </MotionReveal>
  );
}
