import type { PortfolioContent } from "@/features/portfolio/content";
import { delay } from "@/lib/utils";
import { SectionHeading } from "@/shared/ui/section-heading";

type ProcessSectionProps = {
  process: PortfolioContent["process"];
};

export function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <section
      aria-labelledby="process-title"
      className="mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,120px)]"
    >
      <SectionHeading number="04" eyebrow={process.eyebrow} title={<span id="process-title">{process.title}</span>} />
      <div className="mt-[clamp(36px,5vw,56px)] h-[3px] overflow-hidden rounded-[3px] bg-line" aria-hidden="true">
        <div className="scrub bg-chrome h-full" />
      </div>
      <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[clamp(24px,4vw,48px)] p-0 pt-7">
        {process.items.map((step, index) => (
          <li key={step.title} data-reveal="" style={delay(200 + index * 180)}>
            <div className="font-pixel text-[44px] leading-none text-accent" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-[18px] mb-0 text-xl font-semibold tracking-[-0.015em]">{step.title}</h3>
            <p className="mt-2 mb-0 max-w-[22em] text-[15px] leading-[1.55] text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
