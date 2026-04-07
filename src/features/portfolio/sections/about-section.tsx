import { BriefcaseBusiness, GitFork, GraduationCap, Mail, Smartphone } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { credentials } from "@/features/portfolio/data";
import { ProfilePhotoCard } from "@/features/portfolio/sections/profile-photo-card";
import { cn } from "@/lib/utils";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function AboutSection() {
  return (
    <MotionReveal
      as="section"
      id="sobre"
      className="min-w-0 scroll-mt-28 rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
    >
      <SectionHeading
        eyebrow="Sobre"
        title="Muito prazer, eu transformo boas ideias em interfaces fortes e usaveis"
        titleClassName="max-w-3xl lg:max-w-4xl"
      />
      <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
        <aside className="min-w-0 space-y-5">
          <ProfilePhotoCard name="Ana Carla" />
          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl font-semibold text-foreground">Ana Carla</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted">
              Front-end developer • React Native • UI UX
            </p>
          </div>
          <div className="flex justify-center gap-3 lg:justify-start">
            <ButtonLink
              href="mailto:anacarla.dev@portfolio.com"
              variant="ghost"
              size="icon"
              aria-label="Email"
            >
              <Mail size={18} />
            </ButtonLink>
            <ButtonLink
              href="https://github.com/anacarla"
              variant="ghost"
              size="icon"
              aria-label="GitHub"
            >
              <GitFork size={18} />
            </ButtonLink>
            <ButtonLink
              href="https://linkedin.com/in/anacarla"
              variant="ghost"
              size="icon"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={18} />
            </ButtonLink>
          </div>
        </aside>

        <div className="@container min-w-0 space-y-8 text-base leading-8 text-muted sm:text-lg">
          <div className="space-y-5">
            <p>
              Sou desenvolvedora front-end com bastante experiencia em interface e um
              jeito de trabalhar muito conectado ao que o usuario percebe na ponta.
              Gosto de construir experiencias que parecem simples de usar, mas por tras
              tem criterio visual, componentes bem pensados e codigo organizado.
            </p>
            <p>
              Minha trajetoria passa por React, React Native, UI UX design e produtos
              digitais que exigem mais do que uma tela bonita. Tenho pos-graduacao em
              desenvolvimento mobile, formacao em Engenharia de Software e tambem uma
              base em Node, Nest e integracoes, o suficiente para dialogar com o
              ecossistema inteiro do produto.
            </p>
          </div>

          <div className="space-y-4 border-t border-line/60 pt-8">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Credenciais
            </h3>
            <div className="grid grid-cols-1 gap-4 @min-[30rem]:grid-cols-2 @min-[56rem]:grid-cols-3">
              {credentials.map(({ title, description, icon: Icon }, index) => (
                <Card
                  key={title}
                  className={cn(
                    "h-full min-w-0",
                    credentials.length === 3 &&
                      index === 2 &&
                      "@min-[30rem]:col-span-2 @min-[56rem]:col-span-1",
                  )}
                >
                  <CardContent className="px-5 py-5">
                    <div className="flex gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent"
                        aria-hidden="true"
                      >
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-lg font-semibold text-foreground">{title}</p>
                        <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4 border-t border-line/60 pt-8">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Repertorio e entrega
            </h3>
            <div className="flex flex-col gap-4 @min-[30rem]:flex-row @min-[30rem]:items-stretch">
              <Card className="min-w-0 w-full @min-[30rem]:flex-1">
                <CardContent className="px-5 py-5">
                  <div className="flex gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent"
                      aria-hidden="true"
                    >
                      <GraduationCap size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-lg font-semibold text-foreground">
                        Formacao e repertorio
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        Minha base me ajuda a pensar experiencia, sistema, manutencao e
                        produto junto. Nao vejo interface como acabamento: vejo como parte
                        central da estrategia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="min-w-0 w-full @min-[30rem]:flex-1">
                <CardContent className="px-5 py-5">
                  <div className="flex gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent"
                      aria-hidden="true"
                    >
                      <Smartphone size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-lg font-semibold text-foreground">
                        O que costumo entregar
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        Landing pages premium, produtos web com boa hierarquia, apps e
                        fluxos mobile com foco em clareza, usabilidade e polimento visual.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MotionReveal>
  );
}
