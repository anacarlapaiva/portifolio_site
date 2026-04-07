"use client";

import { ArrowRight, BriefcaseBusiness, Download, GitFork, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { MotionReveal } from "@/shared/ui/motion-reveal";

export function HeroSection() {
  const { content } = usePortfolioI18n();
  const { hero } = content;

  return (
    <section
      id="inicio"
      aria-label={hero.eyebrow}
      className="mb-6 scroll-mt-28 grid gap-6 rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:py-12"
    >
      <MotionReveal className="space-y-8">
        <div className="space-y-4">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
            {hero.eyebrow}
          </p>
          <div className="space-y-4">
            <h1 className="max-w-2xl font-display text-[2.25rem] leading-[1.02] font-semibold text-foreground sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="max-w-xl text-[0.96rem] leading-7 text-muted sm:text-lg sm:leading-8">
              {hero.description}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {hero.stats.map((item, index) => (
            <MotionReveal key={item.label} delay={0.08 * index}>
              <Card className="h-full hover:translate-y-0">
                <CardContent className="px-4 py-4">
                  <p className="font-display text-2xl font-semibold text-foreground">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
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
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_75%,#33191c),color-mix(in_srgb,var(--surface)_94%,#1f0e10))] p-5 shadow-2xl">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" aria-hidden="true" />
          <div className="flex items-center justify-between border-b border-line pb-4">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.25em] text-accent">
                {hero.labEyebrow}
              </p>
              <p className="mt-2 text-sm text-muted">
                {hero.labDescription}
              </p>
            </div>
            <div className="flex gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-300/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <div className="rounded-[1.5rem] border border-accent/12 bg-inner-card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">{hero.specialtyLabel}</p>
                  <p className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {hero.specialtyValue}
                  </p>
                </div>
                <div className="rounded-2xl border border-accent/20 bg-accent/10 px-3 py-2 text-sm text-accent">
                  {hero.specialtyBadge}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {hero.highlights.map((item, index) => (
                <MotionReveal
                  key={item}
                  delay={0.08 * index}
                  className={`rounded-[1.5rem] border px-4 py-4 ${
                    index === 0
                      ? "border-highlight/30 bg-highlight/10"
                      : "border-line bg-inner-card-subtle"
                  } ${index === 2 ? "sm:col-span-2" : ""}`}
                >
                  <p className="text-sm leading-7 text-foreground">{item}</p>
                </MotionReveal>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-line bg-inner-card-subtle p-4">
              <div className="flex items-center justify-between">
                <p className="font-display text-base text-foreground sm:text-lg">{hero.findHereTitle}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  {hero.profileLabel}
                </p>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-3">
                {hero.profileHighlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-line bg-inner-card-subtle px-3 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
