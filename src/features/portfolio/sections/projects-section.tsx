import { ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/features/portfolio/data";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function ProjectsSection() {
  return (
    <MotionReveal
      as="section"
      id="projetos"
      className="scroll-mt-28 rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
      delay={0.1}
    >
      <SectionHeading eyebrow="Laboratorio" title="Projetos pensados para marca, produto e conversao" />
      <div className="mt-8 grid gap-4">
        {projects.map((project, index) => (
          <MotionReveal
            key={project.title}
            delay={0.08 * index}
          >
            <Card className="overflow-hidden p-0">
              <div
                className={`h-36 border-b border-line ${
                  index === 0
                    ? "bg-[radial-gradient(circle_at_top_left,rgba(255,122,89,0.20),transparent_45%),linear-gradient(135deg,#33191c,#2f1b1f)]"
                    : index === 1
                      ? "bg-[radial-gradient(circle_at_top,rgba(255,177,109,0.20),transparent_35%),linear-gradient(135deg,#3a1f24,#221215)]"
                      : "bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_35%),linear-gradient(135deg,#2d1519,#1a0d0f)]"
                }`}
              >
                <div className="flex h-full items-end p-5">
                  <div className="rounded-2xl border border-line bg-inner-card px-3 py-2 text-xs uppercase tracking-[0.3em] text-foreground">
                    case {index + 1}
                  </div>
                </div>
              </div>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {project.summary}
                    </p>
                  </div>
                  <ButtonLink
                    href={project.href}
                    variant="ghost"
                    size="icon"
                    aria-label={`Ver ${project.title}`}
                    className="self-start"
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
