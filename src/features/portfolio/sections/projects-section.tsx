"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";
import { XpTitleBar } from "@/shared/ui/xp-window";

export function ProjectsSection() {
  const { content } = usePortfolioI18n();
  const { projects } = content;

  return (
    <MotionReveal
      as="section"
      id="projetos"
      className="min-w-0 scroll-mt-24 rounded-[1.5rem] border border-white/25 glass-panel px-4 py-5 sm:scroll-mt-28 sm:rounded-[2rem] sm:px-8 sm:py-8"
      delay={0.1}
    >
      <SectionHeading eyebrow={projects.eyebrow} title={projects.title} />
      <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
        {projects.items.map((project, index) => (
          <MotionReveal key={project.title} delay={0.08 * index}>
            <Card className="group overflow-hidden p-0">
              <div className="aero-shine relative h-40 overflow-hidden border-b border-line sm:h-44">
                {project.category === "website" ? (
                  <>
                    <div
                      className="absolute inset-0 scale-110 bg-cover bg-center opacity-30 blur-2xl"
                      style={{ backgroundImage: `url(${project.imageSrc})` }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 40vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,40,58,0.05),rgba(6,40,58,0.55)),radial-gradient(circle_at_top_left,rgba(120,230,255,0.20),transparent_44%)]"
                      aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),transparent)]" aria-hidden="true" />
                    <div className="glass-panel-strong absolute inset-x-0 top-0 z-[1] flex items-center gap-2 border-b border-white/25 px-4 py-2" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.8)]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.8)]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.8)]" />
                      <span className="ml-1 truncate rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 text-[0.62rem] font-medium tracking-wide text-foreground">
                        {project.href.replace(/^https?:\/\//, "").replace(/\/.*$/, "")}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`absolute inset-0 ${
                        index % 2 === 0
                          ? "bg-[radial-gradient(circle_at_top_left,rgba(120,230,255,0.32),transparent_44%),linear-gradient(135deg,#0c4a66,#073246)]"
                          : "bg-[radial-gradient(circle_at_top_right,rgba(95,230,194,0.32),transparent_42%),linear-gradient(135deg,#0a5258,#073b3f)]"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_55%)] blur-2xl"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-6 bottom-0 top-10">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        unoptimized
                        sizes="(min-width: 1280px) 40vw, 100vw"
                        className="object-contain opacity-95 drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
                      />
                    </div>
                    <div
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,40,58,0.04),rgba(6,40,58,0.5))]"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 top-0 z-[1]" aria-hidden="true">
                      <XpTitleBar title={project.title} compact />
                    </div>
                  </>
                )}

              </div>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted sm:text-[0.96rem]">
                      {project.summary}
                    </p>
                  </div>
                  <ButtonLink
                    href={project.href}
                    variant="ghost"
                    size="icon"
                    aria-label={`${projects.viewProjectLabel}: ${project.title}`}
                    className="self-start"
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <ArrowUpRight size={18} />
                  </ButtonLink>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </MotionReveal>
  );
}
