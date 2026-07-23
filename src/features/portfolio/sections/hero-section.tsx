"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  FlaskConical,
  GitFork,
  Mail,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { XpWindow } from "@/shared/ui/xp-window";

/** Ritmo único de espaçamento: tudo usa gap-4 / p-4 */
export function HeroSection() {
  const { content } = usePortfolioI18n();
  const { hero } = content;

  return (
    <section
      id="inicio"
      aria-label={hero.eyebrow}
      className="min-w-0 scroll-mt-24 overflow-hidden rounded-[1.5rem] border border-white/25 glass-panel p-4 sm:scroll-mt-28 sm:rounded-[2rem] sm:p-6 lg:p-8"
    >
      <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-2 lg:items-start lg:gap-4">
        {/* Coluna A */}
        <MotionReveal className="flex min-w-0 flex-col gap-4">
          <span className="glass-panel inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-accent/30 px-3 py-1 font-display text-[0.65rem] uppercase tracking-[0.18em] text-accent shadow-[var(--shadow-sm)] sm:text-xs">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-highlight [box-shadow:inset_0_1px_0_rgba(255,255,255,0.8),0_0_8px_rgba(95,230,194,0.8)]"
              aria-hidden="true"
            />
            <span className="truncate">{hero.eyebrow}</span>
          </span>

          <h1 className="aero-heading font-display text-[1.5rem] leading-[1.2] font-semibold sm:text-[1.85rem] lg:text-[2rem]">
            {hero.title}
          </h1>

          <p className="text-sm leading-6 text-muted sm:text-[0.95rem] sm:leading-7">
            {hero.description}
          </p>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <ButtonLink href="#projetos" className="w-full">
              {hero.primaryCta}
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={hero.resumeHref}
              variant="secondary"
              className="w-full"
              target="_blank"
              rel="noreferrer"
              download={hero.resumeDownloadName}
            >
              <Download size={18} aria-hidden="true" />
              {hero.secondaryCta}
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2">
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
        </MotionReveal>

        {/* Coluna B — mesma largura, mesmo gap interno */}
        <MotionReveal delay={0.08} className="min-w-0">
          <XpWindow
            title={hero.labEyebrow}
            icon={<FlaskConical size={13} />}
            bodyClassName="flex flex-col gap-4 p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="aero-gloss rounded-full border border-accent/30 bg-accent/15 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-accent">
                {hero.specialtyBadge}
              </span>
              <p className="text-sm leading-6 text-muted">{hero.labDescription}</p>
            </div>

            <div className="rounded-xl border border-accent/20 bg-inner-card p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                {hero.specialtyLabel}
              </p>
              <p className="mt-2 font-display text-base font-semibold leading-snug text-foreground sm:text-lg">
                {hero.specialtyValue}
              </p>
            </div>

            <ul className="grid grid-cols-3 gap-2">
              {hero.stats.map((item) => (
                <li
                  key={item.value}
                  className="min-w-0 rounded-xl border border-line bg-inner-card-subtle p-3"
                >
                  <p className="truncate font-display text-xs font-semibold text-accent sm:text-sm">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[0.65rem] leading-4 text-muted sm:text-xs">{item.label}</p>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 rounded-xl border border-highlight/25 bg-highlight/10 p-3">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-highlight [box-shadow:0_0_8px_rgba(95,230,194,0.85)]"
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-foreground">{hero.labStatus}</p>
            </div>
          </XpWindow>
        </MotionReveal>
      </div>
    </section>
  );
}
