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
        title="Muito prazer, eu transformo boas ideias em interfaces fortes e usáveis"
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
              href="mailto:acfpaiva99@gmail.com"
              variant="ghost"
              size="icon"
              aria-label="Email"
            >
              <Mail size={18} />
            </ButtonLink>
            <ButtonLink
              href="https://github.com/anacarlapaiva"
              variant="ghost"
              size="icon"
              aria-label="GitHub"
            >
              <GitFork size={18} />
            </ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/in/anacarlapaiva"
              variant="ghost"
              size="icon"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={18} />
            </ButtonLink>
          </div>
        </aside>

        <div className="@container min-w-0 space-y-8 text-[0.96rem] leading-7 text-muted sm:text-lg sm:leading-8">
          <div className="space-y-5">
            <p>
              Sou desenvolvedora front-end com bastante experiência em interface e um
              jeito de trabalhar muito conectado ao que o usuário percebe na ponta.
              Gosto de construir experiências que parecem simples de usar, mas por trás
              têm critério visual, componentes bem pensados e código organizado.
            </p>
            <p>
              Minha trajetória passa por React, React Native, UI UX design e produtos
              digitais que exigem mais do que uma tela bonita. Tenho pós-graduação em
              desenvolvimento mobile, formação em Engenharia de Software e também uma
              base em Node, Nest e integrações, o suficiente para dialogar com o
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
        </div>
      </div>

      <div className="mt-8 space-y-4 border-t border-line/60 pt-8">
        <h3 className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Repertório e entrega
        </h3>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="min-w-0 h-full">
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
                    Formação e repertório
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Minha base me ajuda a pensar experiência, sistema, manutenção e
                    produto junto. Não vejo interface como acabamento: vejo como parte
                    central da estratégia.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="min-w-0 h-full">
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
    </MotionReveal>
  );
}
