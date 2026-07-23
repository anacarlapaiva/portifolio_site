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
      className="min-w-0 scroll-mt-24 overflow-hidden rounded-[1.5rem] border border-white/25 glass-panel p-4 sm:scroll-mt-28 sm:rounded-[2rem] sm:p-6 lg:p-8"
    >
      <div className="flex flex-col gap-4">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />

        {/* Faixa única: foto compacta + texto. Sem coluna alta vs coluna vazia. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[13rem_minmax(0,1fr)] sm:items-start lg:grid-cols-[14rem_minmax(0,1fr)]">
          <div className="mx-auto w-[12rem] sm:mx-0 sm:w-full">
            <ProfilePhotoCard
              name="Ana Carla"
              alt={about.photoAlt}
              fallbackRole={about.fallbackRole}
            />
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">Ana Carla</h3>
                <p className="text-sm text-muted">{about.role}</p>
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

            <div className="flex flex-col gap-3 text-sm leading-6 text-muted sm:text-[0.95rem] sm:leading-7">
              <p>{about.paragraphs[0]}</p>
              {about.paragraphs[1] ? (
                <p className="hidden sm:block">{about.paragraphs[1]}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* 3 + 3 no mesmo ritmo */}
        <div className="flex flex-col gap-2">
          <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
            {about.focusTitle}
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {focusIcons.map((Icon, index) => {
              const item = about.focusAreas[index];
              if (!item) return null;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-line bg-inner-card p-3"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent"
                    aria-hidden="true"
                  >
                    <Icon size={15} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
            {about.credentialsTitle}
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {credentialIcons.map((Icon, index) => {
              const item = about.credentials[index];
              if (!item) return null;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-line bg-inner-card-subtle p-3"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent"
                    aria-hidden="true"
                  >
                    <Icon size={15} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionReveal>
  );
}
