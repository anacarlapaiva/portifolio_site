"use client";

import { ArrowRight, BriefcaseBusiness, Download, GitFork, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { XpWindow } from "@/shared/ui/xp-window";

export function HeroSection() {
  const { content } = usePortfolioI18n();
  const { hero } = content;

  return (
    <section
      id="inicio"
      aria-label={hero.eyebrow}
      className="min-w-0 scroll-mt-28 grid grid-cols-1 gap-6 rounded-[2rem] border border-line glass-panel px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:px-10 lg:py-12"
    >
      <MotionReveal className="space-y-8">
        <div className="space-y-4">
          <span className="glass-panel inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 font-display text-xs uppercase tracking-[0.3em] text-accent shadow-[var(--shadow-sm)]">
            <span
              className="h-2 w-2 rounded-full bg-highlight [box-shadow:inset_0_1px_0_rgba(255,255,255,0.8),0_0_8px_rgba(95,230,194,0.8)]"
              aria-hidden="true"
            />
            {hero.eyebrow}
          </span>
          <div className="space-y-4">
            <h1 className="aero-heading max-w-2xl font-display text-[2.25rem] leading-[1.02] font-semibold sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="max-w-xl text-[0.96rem] leading-7 text-muted sm:text-lg sm:leading-8">
              {hero.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href="#projetos" className="w-full sm:w-auto">
            {hero.primaryCta}
            <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={hero.resumeHref}
            variant="secondary"
            className="w-full sm:w-auto"
            target="_blank"
            rel="noreferrer"
            download={hero.resumeDownloadName}
          >
            <Download size={18} aria-hidden="true" />
            {hero.secondaryCta}
          </ButtonLink>
          <div className="flex flex-wrap items-center gap-3 text-muted">
            <ButtonLink
              href="mailto:acfpaiva99@gmail.com"
              variant="ghost"
              size="icon"
              aria-label={hero.emailAria}
            >
              <Mail size={18} />
            </ButtonLink>
            <ButtonLink
              href="https://github.com/anacarlapaiva"
              variant="ghost"
              size="icon"
              aria-label={hero.githubAria}
              target="_blank"
              rel="noreferrer"
            >
              <GitFork size={18} />
            </ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/in/anacarlapaiva"
              variant="ghost"
              size="icon"
              aria-label={hero.linkedinAria}
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness size={18} />
            </ButtonLink>
          </div>
        </div>
      </MotionReveal>

      <MotionReveal delay={0.12}>
        <XpWindow title={hero.labEyebrow}>
          <p className="text-sm leading-6 text-muted">{hero.labDescription}</p>

          <div className="mt-4 rounded-2xl border border-accent/15 bg-inner-card p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{hero.specialtyLabel}</p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  {hero.specialtyValue}
                </p>
              </div>
              <span className="aero-gloss shrink-0 rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                {hero.specialtyBadge}
              </span>
            </div>
          </div>

          <div className="mt-3 grid gap-2">
            {hero.stats.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-line bg-inner-card-subtle px-4 py-3"
              >
                <span className="font-display text-base font-semibold text-accent">{item.value}</span>
                <span className="text-sm leading-5 text-muted">{item.label}</span>
              </div>
            ))}
          </div>
        </XpWindow>
      </MotionReveal>
    </section>
  );
}
