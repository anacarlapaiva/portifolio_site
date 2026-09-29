import type { PortfolioContent } from "@/features/portfolio/content";
import { delay } from "@/lib/utils";
import { SectionHeading } from "@/shared/ui/section-heading";

type SkillsSectionProps = {
  skills: PortfolioContent["skills"];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="border-y border-line bg-sky/80">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,120px)]">
        <SectionHeading number="03" eyebrow={skills.eyebrow} title={skills.title} titleClassName="max-w-[15em]" />
        <ul className="m-0 mt-[clamp(36px,5vw,56px)] grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-3.5 p-0">
          {skills.items.map((skill, index) => (
            <li
              key={skill.title}
              data-reveal=""
              data-spot=""
              style={delay(index * 80)}
              className="relative flex min-h-[176px] flex-col justify-between gap-[26px] overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-[border-color] duration-500 hover:border-accent"
            >
              <div className="spot-glow pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="relative flex justify-between font-pixel text-sm text-muted" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="text-accent">✦</span>
              </div>
              <div className="relative">
                <h3 className="m-0 text-[19px] font-semibold tracking-[-0.015em]">{skill.title}</h3>
                <p className="mt-2 mb-0 text-[15px] leading-normal text-muted">{skill.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
