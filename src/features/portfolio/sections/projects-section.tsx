"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function ProjectsSection() {
  const { content } = usePortfolioI18n();
  const { projects } = content;

  return (
    <MotionReveal
      as="section"
      id="projetos"
      className="scroll-mt-28 rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
      delay={0.1}
    >
      <SectionHeading eyebrow={projects.eyebrow} title={projects.title} />
      <div className="mt-8 grid gap-4 xl:grid-cols-2">
        {projects.items.map((project, index) => (
          <MotionReveal key={project.title} delay={0.08 * index}>
            <Card className="overflow-hidden p-0">
              <div className="relative h-40 overflow-hidden border-b border-line sm:h-44">
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
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,14,17,0.16),rgba(28,14,17,0.78)),radial-gradient(circle_at_top_left,rgba(255,122,89,0.16),transparent_42%)]"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <>
                    <div
                      className={`absolute inset-0 ${
                        index % 2 === 0
                          ? "bg-[radial-gradient(circle_at_top_left,rgba(255,122,89,0.24),transparent_42%),linear-gradient(135deg,#33191c,#241215)]"
                          : "bg-[radial-gradient(circle_at_top_right,rgba(255,177,109,0.24),transparent_38%),linear-gradient(135deg,#2f181b,#201012)]"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_55%)] blur-2xl"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-6 bottom-0 top-4">
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
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,14,17,0.08),rgba(28,14,17,0.72))]"
                      aria-hidden="true"
                    />
                  </>
                )}

                <div className="relative flex h-full items-end p-5">
                  <div className="rounded-2xl border border-line bg-inner-card px-3 py-2 text-xs uppercase tracking-[0.3em] text-foreground">
                    {projects.caseLabel} {index + 1}
                  </div>
                </div>
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
