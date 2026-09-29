import Image from "next/image";

import { matchProteinHref, type PortfolioContent, type ProjectItem } from "@/features/portfolio/content";
import { MatchProteinShowcase } from "@/features/portfolio/sections/match-protein-showcase";
import { cn, delay } from "@/lib/utils";
import { SectionHeading } from "@/shared/ui/section-heading";
import { WindowBar } from "@/shared/ui/window-bar";

type ProjectsSectionProps = {
  projects: PortfolioContent["projects"];
  newTabLabel: string;
};

export function ProjectsSection({ projects, newTabLabel }: ProjectsSectionProps) {
  return (
    <section
      id="projetos"
      className="mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,120px)]"
    >
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <SectionHeading
            number="01"
            eyebrow={projects.eyebrow}
            title={projects.title}
            titleClassName="max-w-[14em]"
          />
        </div>
        <p data-reveal="" style={delay(140)} className="m-0 max-w-[22em] text-[15px] leading-[1.55] text-muted">
          {projects.description}
        </p>
      </div>

      <MatchProteinShowcase featured={projects.featured} href={matchProteinHref} newTabLabel={newTabLabel} />

      <ul className="m-0 mt-5 flex list-none flex-wrap gap-5 p-0">
        {projects.items.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            number={index + 2}
            delayMs={index * 100}
            newTabLabel={newTabLabel}
          />
        ))}
      </ul>
    </section>
  );
}

type ProjectCardProps = {
  project: ProjectItem;
  number: number;
  delayMs: number;
  newTabLabel: string;
};

function ProjectCard({ project, number, delayMs, newTabLabel }: ProjectCardProps) {
  const isApp = project.kind === "app";

  return (
    <li
      data-reveal=""
      data-tilt=""
      style={delay(delayMs)}
      className="group flex min-w-0 flex-[1_1_300px] flex-col overflow-hidden rounded-[18px] border border-line bg-surface text-ink transition-shadow duration-600 hover:shadow-[0_34px_60px_-34px_var(--glow)]"
    >
      <a href={project.href} target="_blank" rel="noopener" className="flex flex-col text-ink hover:text-ink">
        <WindowBar title={project.domain} size="sm" />
        <div
          data-clip=""
          style={delay(delayMs)}
          className="relative flex aspect-[16/10] max-h-[400px] w-full items-end justify-center overflow-hidden bg-[radial-gradient(110%_80%_at_50%_110%,color-mix(in_oklab,var(--accent)_26%,var(--sky)),var(--sky))] px-[26px] pt-[26px]"
        >
          <div
            className={cn(
              "relative max-h-full flex-none overflow-hidden rounded-t-xl",
              isApp
                ? "h-full w-[58%]"
                : "aspect-[1920/1098] w-full bg-surface shadow-[0_-1px_0_var(--line),0_20px_50px_-20px_rgba(11,26,43,0.45)]",
            )}
          >
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              sizes={isApp ? "(min-width: 1180px) 320px, (min-width: 700px) 30vw, 58vw" : "(min-width: 1180px) 560px, (min-width: 700px) 50vw, 100vw"}
              className={cn("parallax-img zoom-img origin-top object-top", isApp ? "object-contain" : "object-cover")}
            />
          </div>
          <div className="shine pointer-events-none absolute inset-0" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-2 px-5 pt-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="m-0 font-display text-[19px] font-semibold tracking-[-0.03em]">{project.title}</h3>
            <span className="font-pixel text-sm text-muted">{String(number).padStart(2, "0")}</span>
          </div>
          <p className="m-0 text-[15px] leading-[1.55] text-muted">{project.summary}</p>
          <span className="sr-only"> {newTabLabel}</span>
        </div>
      </a>

      <div className="mt-auto flex flex-col gap-3.5 px-5 pt-4 pb-[18px]">
        <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>
        {project.stores ? (
          <div className="flex flex-wrap gap-2">
            {project.stores.map((store) =>
              store.href ? (
                <a
                  key={store.label}
                  href={store.href}
                  target="_blank"
                  rel="noopener"
                  className="group/store inline-flex items-center gap-3 rounded-full border border-line bg-sky py-1.5 pr-1.5 pl-4 text-ink transition-[border-color,translate,box-shadow] duration-[350ms] ease-[var(--ease)] hover:-translate-y-0.5 hover:border-ink hover:text-ink hover:shadow-[0_14px_26px_-16px_var(--glow)]"
                >
                  <span className="flex flex-col gap-px leading-[1.15]">
                    <span className="text-[10px] text-muted">{store.prefix}</span>
                    <span className="text-sm font-semibold">{store.label}</span>
                  </span>
                  <span
                    className="btn-orb h-8 w-8 text-[13px] transition-[rotate] duration-500 ease-[var(--ease)] group-hover/store:rotate-45"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                  <span className="sr-only"> {newTabLabel}</span>
                </a>
              ) : (
                <div
                  key={store.label}
                  title={store.title}
                  className="inline-flex items-center gap-3 rounded-full border border-dashed border-line2/40 py-1.5 pr-1.5 pl-4 text-ink"
                >
                  <span className="flex flex-col gap-px leading-[1.15]">
                    <span className="text-[10px] text-muted">{store.prefix}</span>
                    <span className="text-sm font-semibold">{store.label}</span>
                  </span>
                  <span
                    className="grid h-8 w-8 place-items-center rounded-full border border-dashed border-line2/40 text-[12px]"
                    aria-hidden="true"
                  >
                    🔒︎
                  </span>
                </div>
              ),
            )}
          </div>
        ) : null}
      </div>
    </li>
  );
}
