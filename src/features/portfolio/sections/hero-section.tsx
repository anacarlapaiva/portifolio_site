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
      className="min-w-0 scroll-mt-24 space-y-4 rounded-[1.5rem] border border-white/25 glass-panel px-4 py-5 xs:px-5 sm:scroll-mt-28 sm:space-y-6 sm:rounded-[2rem] sm:px-8 sm:py-7 lg:px-10"
    >
      <div className="grid min-w-0 grid-cols-1 items-start gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
        <MotionReveal className="flex min-w-0 flex-col gap-4 sm:gap-5">
          <div className="space-y-3">
            <span className="glass-panel inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 px-2.5 py-1 font-display text-[0.65rem] uppercase tracking-[0.18em] text-accent shadow-[var(--shadow-sm)] sm:px-3 sm:text-xs sm:tracking-[0.22em]">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-highlight [box-shadow:inset_0_1px_0_rgba(255,255,255,0.8),0_0_8px_rgba(95,230,194,0.8)]"
                aria-hidden="true"
              />
              <span className="truncate">{hero.eyebrow}</span>
            </span>
            <h1 className="aero-heading font-display text-[1.5rem] leading-[1.2] font-semibold sm:text-[2rem] lg:text-[2.15rem]">
              {hero.title}
            </h1>
            <p className="text-sm leading-6 text-muted sm:text-[0.95rem] sm:leading-7">
              {hero.description}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
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
            <div className="flex items-center justify-center gap-2 pt-1 sm:justify-start sm:pt-0">
              <ButtonLink
                href="mailto:acfpaiva99@gmail.com"
                variant="ghost"
                size="icon"
                aria-label={hero.emailAria}
              >
                <Mail size={17} />
              </ButtonLink>
              <ButtonLink
                href="https://github.com/anacarlapaiva"
                variant="ghost"
                size="icon"
                aria-label={hero.githubAria}
                target="_blank"
                rel="noreferrer"
              >
                <GitFork size={17} />
              </ButtonLink>
              <ButtonLink
                href="https://www.linkedin.com/in/anacarlapaiva"
                variant="ghost"
                size="icon"
                aria-label={hero.linkedinAria}
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness size={17} />
              </ButtonLink>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08} className="min-w-0">
          <XpWindow title={hero.labEyebrow} bodyClassName="space-y-3 p-3 sm:space-y-3.5 sm:p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
              <p className="text-sm leading-6 text-muted">{hero.labDescription}</p>
              <span className="aero-gloss w-fit shrink-0 rounded-full border border-accent/30 bg-accent/15 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-accent">
                {hero.specialtyBadge}
              </span>
            </div>

            <div className="rounded-xl border border-accent/15 bg-inner-card px-3.5 py-3 sm:px-4 sm:py-3.5">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                {hero.specialtyLabel}
              </p>
              <p className="mt-1.5 font-display text-[0.95rem] font-semibold leading-snug text-foreground sm:text-base">
                {hero.specialtyValue}
              </p>
            </div>
          </XpWindow>
        </MotionReveal>
      </div>

      <MotionReveal delay={0.12}>
        <ul className="grid grid-cols-1 gap-2 min-[400px]:grid-cols-3 min-[400px]:gap-2 sm:gap-2.5">
          {hero.stats.map((item) => (
            <li
              key={item.value}
              className="rounded-2xl border border-line bg-inner-card px-3.5 py-2.5 sm:px-4 sm:py-3"
            >
              <p className="font-display text-sm font-semibold text-accent">{item.value}</p>
              <p className="mt-0.5 text-xs leading-5 text-muted">{item.label}</p>
            </li>
          ))}
        </ul>
      </MotionReveal>
    </section>
  );
}
