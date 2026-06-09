"use client";

import { BadgeCheck, BriefcaseBusiness, GitFork, Mail, Smartphone, Sparkles } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { ProfilePhotoCard } from "@/features/portfolio/sections/profile-photo-card";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function AboutSection() {
  const { content } = usePortfolioI18n();
  const { about } = content;

  return (
    <MotionReveal
      as="section"
      id="sobre"
      className="min-w-0 scroll-mt-28 rounded-[2rem] border border-line glass-panel px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
    >
      <SectionHeading
        eyebrow={about.eyebrow}
        title={about.title}
        titleClassName="max-w-3xl lg:max-w-4xl"
      />
      <div className="mt-8 grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:items-start">
        <aside className="min-w-0 space-y-5">
          <ProfilePhotoCard name="Ana Carla" alt={about.photoAlt} fallbackRole={about.fallbackRole} />
          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl font-semibold text-foreground">Ana Carla</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted">
              {about.role}
            </p>
          </div>
          <div className="flex justify-center gap-3 lg:justify-start">
            <ButtonLink
              href="mailto:acfpaiva99@gmail.com"
              variant="ghost"
              size="icon"
              aria-label={about.emailAria}
            >
              <Mail size={18} />
            </ButtonLink>
            <ButtonLink
              href="https://github.com/anacarlapaiva"
              variant="ghost"
              size="icon"
              aria-label={about.githubAria}
            >
              <GitFork size={18} />
            </ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/in/anacarlapaiva"
              variant="ghost"
              size="icon"
              aria-label={about.linkedinAria}
            >
              <BriefcaseBusiness size={18} />
            </ButtonLink>
          </div>
        </aside>

        <div className="min-w-0 space-y-7">
          <p className="max-w-prose text-base leading-8 text-muted sm:text-lg">
            {about.paragraphs[0]}
          </p>

          <div className="space-y-4 border-t border-line/60 pt-7">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              {about.credentialsTitle}
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {[BadgeCheck, Smartphone, Sparkles].map((Icon, index) => {
                const item = about.credentials[index];

                if (!item) {
                  return null;
                }

                return (
                  <Card key={item.title} className="h-full min-w-0">
                    <CardContent className="flex h-full flex-col gap-3 px-4 py-4">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent"
                        aria-hidden="true"
                      >
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-base font-semibold leading-snug text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MotionReveal>
  );
}
