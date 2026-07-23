"use client";

import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  GitFork,
  Mail,
  Server,
  Smartphone,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { ProfilePhotoCard } from "@/features/portfolio/sections/profile-photo-card";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

const focusIcons = [Code2, Server, Smartphone] as const;
const credentialIcons = [BadgeCheck, Smartphone, Server] as const;

export function AboutSection() {
  const { content } = usePortfolioI18n();
  const { about } = content;

  return (
    <MotionReveal
      as="section"
      id="sobre"
      className="min-w-0 scroll-mt-24 space-y-4 rounded-[1.5rem] border border-white/25 glass-panel px-4 py-5 sm:scroll-mt-28 sm:space-y-6 sm:rounded-[2rem] sm:px-8 sm:py-7"
    >
      <SectionHeading eyebrow={about.eyebrow} title={about.title} />

      <div className="grid min-w-0 grid-cols-1 items-center gap-4 sm:grid-cols-[11.5rem_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <div className="mx-auto w-full max-w-[13rem] sm:mx-0 sm:max-w-none">
          <ProfilePhotoCard name="Ana Carla" alt={about.photoAlt} fallbackRole={about.fallbackRole} />
        </div>

        <div className="flex min-w-0 flex-col justify-center gap-3 text-center sm:gap-4 sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">Ana Carla</h3>
              <p className="mt-0.5 text-sm text-muted">{about.role}</p>
            </div>
            <div className="flex gap-2">
              <ButtonLink
                href="mailto:acfpaiva99@gmail.com"
                variant="ghost"
                size="icon"
                aria-label={about.emailAria}
              >
                <Mail size={17} />
              </ButtonLink>
              <ButtonLink
                href="https://github.com/anacarlapaiva"
                variant="ghost"
                size="icon"
                aria-label={about.githubAria}
              >
                <GitFork size={17} />
              </ButtonLink>
              <ButtonLink
                href="https://www.linkedin.com/in/anacarlapaiva"
                variant="ghost"
                size="icon"
                aria-label={about.linkedinAria}
              >
                <BriefcaseBusiness size={17} />
              </ButtonLink>
            </div>
          </div>

          <p className="text-sm leading-6 text-muted sm:text-base sm:leading-7">
            {about.paragraphs[0]}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.24em]">
          {about.focusTitle}
        </h3>
        <ul className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-3 sm:gap-2.5">
          {focusIcons.map((Icon, index) => {
            const item = about.focusAreas[index];
            if (!item) return null;

            return (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-2xl border border-line bg-inner-card px-3 py-2.5 sm:px-3.5 sm:py-3"
              >
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent"
                  aria-hidden="true"
                >
                  <Icon size={15} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-xs leading-5 text-muted">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.24em]">
          {about.credentialsTitle}
        </h3>
        <ul className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-3 sm:gap-2.5">
          {credentialIcons.map((Icon, index) => {
            const item = about.credentials[index];
            if (!item) return null;

            return (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-2xl border border-line bg-inner-card-subtle px-3 py-2.5 sm:px-3.5 sm:py-3"
              >
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent"
                  aria-hidden="true"
                >
                  <Icon size={15} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-xs leading-5 text-muted">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </MotionReveal>
  );
}
