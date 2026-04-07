import { BriefcaseBusiness, GitFork, GraduationCap, Mail, Smartphone } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { credentials } from "@/features/portfolio/data";
import { ProfilePhotoCard } from "@/features/portfolio/sections/profile-photo-card";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function AboutSection() {
  return (
    <MotionReveal
      as="section"
      id="sobre"
      className="scroll-mt-28 rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
    >
      <SectionHeading eyebrow="Sobre" title="Muito prazer, eu transformo boas ideias em interfaces fortes e usaveis" />
      <div className="mt-8 grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
        <aside className="space-y-5">
          <ProfilePhotoCard name="Ana Carla" />
          <div className="text-center xl:text-left">
            <h3 className="font-display text-2xl font-semibold text-foreground">Ana Carla</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted">
              Front-end developer • React Native • UI UX
            </p>
          </div>
          <div className="flex justify-center gap-3 xl:justify-start">
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

        <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
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
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {credentials.map(({ title, description, icon: Icon }) => (
              <Card key={title} className="h-full">
                <CardContent className="px-4 py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <p className="mt-4 font-display text-lg font-semibold text-foreground">
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardContent className="px-5 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent" aria-hidden="true">
                    <GraduationCap size={20} />
                  </div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    Formacao e repertorio
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Minha base me ajuda a pensar experiencia, sistema, manutencao e
                  produto junto. Nao vejo interface como acabamento: vejo como parte
                  central da estrategia.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="px-5 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent" aria-hidden="true">
                    <Smartphone size={20} />
                  </div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    O que costumo entregar
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Landing pages premium, produtos web com boa hierarquia, apps e
                  fluxos mobile com foco em clareza, usabilidade e polimento visual.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MotionReveal>
  );
}
