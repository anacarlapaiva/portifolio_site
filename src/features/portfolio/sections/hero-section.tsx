import { ArrowRight, BriefcaseBusiness, Download, GitFork, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { highlights, stats } from "@/features/portfolio/data";
import { MotionReveal } from "@/shared/ui/motion-reveal";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-label="Apresentacao"
      className="mb-6 scroll-mt-28 grid gap-6 rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:py-12"
    >
      <MotionReveal className="space-y-8">
        <div className="space-y-4">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
            Desenvolvedora Full Stack
          </p>
          <div className="space-y-4">
            <h1 className="max-w-2xl font-display text-4xl leading-tight font-semibold text-foreground sm:text-5xl lg:text-6xl">
              Front-end, mobile e interface com acabamento de quem vive produto de verdade.
            </h1>
            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
              Sou desenvolvedora front-end com forte experiencia em interface, React
              Native, UI UX design e produtos digitais que precisam unir clareza,
              consistencia visual e implementacao bem feita.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {stats.map((item, index) => (
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
            Ver projetos
            <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="#sobre" variant="secondary" className="w-full sm:w-auto">
            <Download size={18} aria-hidden="true" />
            Conhecer perfil
          </ButtonLink>
          <div className="flex flex-wrap items-center gap-3 text-muted">
            <ButtonLink
              href="mailto:anacarla.dev@portfolio.com"
              variant="ghost"
              size="icon"
              aria-label="Enviar email"
            >
              <Mail size={18} />
            </ButtonLink>
            <ButtonLink
              href="https://github.com/anacarla"
              variant="ghost"
              size="icon"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <GitFork size={18} />
            </ButtonLink>
            <ButtonLink
              href="https://linkedin.com/in/anacarla"
              variant="ghost"
              size="icon"
              aria-label="LinkedIn"
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
                Laboratorio criativo
              </p>
              <p className="mt-2 text-sm text-muted">
                Interface, mobile e experiencias que equilibram forma e funcao
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
                  <p className="text-sm text-muted">Especialidade</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                    React, React Native e UI orientada a produto
                  </p>
                </div>
                <div className="rounded-2xl border border-accent/20 bg-accent/10 px-3 py-2 text-sm text-accent">
                  interface first
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
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
                <p className="font-display text-lg text-foreground">O que voce encontra aqui</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  perfil profissional
                </p>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-3">
                <div className="rounded-2xl border border-line bg-inner-card-subtle px-3 py-3">
                  Experiencia real em interface
                </div>
                <div className="rounded-2xl border border-line bg-inner-card-subtle px-3 py-3">
                  Visao mobile e produto
                </div>
                <div className="rounded-2xl border border-line bg-inner-card-subtle px-3 py-3">
                  Design e codigo trabalhando juntos
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
