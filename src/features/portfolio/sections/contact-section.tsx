"use client";

import { ArrowRight, BriefcaseBusiness, Globe, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function ContactSection() {
  const { content } = usePortfolioI18n();
  const { contact } = content;

  return (
    <MotionReveal
      as="section"
      id="contato"
      className="scroll-mt-28 rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
      delay={0.15}
    >
      <SectionHeading eyebrow={contact.eyebrow} title={contact.title} />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <p className="max-w-xl text-[0.96rem] leading-7 text-muted sm:text-base sm:leading-8">
            {contact.description}
          </p>
          <ButtonLink href="mailto:acfpaiva99@gmail.com" className="w-full sm:w-auto">
            {contact.cta}
            <ArrowRight size={18} />
          </ButtonLink>
        </div>

        <div className="grid gap-3">
          {[Mail, BriefcaseBusiness, Globe].map((Icon, index) => {
            const item = contact.items[index];

            if (!item) {
              return null;
            }

            const { label, value, href } = item;

            return (
              <MotionReveal key={label} delay={0.08 * index}>
                <a
                  href={href}
                  className="block"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={`${label}: ${value}`}
                >
                  <Card>
                    <CardContent className="flex w-full items-center gap-4 px-4 py-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent" aria-hidden="true">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm uppercase tracking-[0.25em] text-muted">
                          {label}
                        </p>
                        <p className="mt-1 truncate text-sm text-foreground sm:text-base">{value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </MotionReveal>
  );
}
