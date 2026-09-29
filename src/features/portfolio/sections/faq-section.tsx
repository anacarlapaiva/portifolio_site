import type { PortfolioContent } from "@/features/portfolio/content";
import { FaqList } from "@/features/portfolio/sections/faq-list";
import { SectionHeading } from "@/shared/ui/section-heading";

type FaqSectionProps = {
  faq: PortfolioContent["faq"];
};

export function FaqSection({ faq }: FaqSectionProps) {
  return (
    <section id="faq" className="border-t border-line">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-[clamp(28px,5vw,64px)] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,120px)]">
        <div>
          <SectionHeading number="05" eyebrow={faq.eyebrow} title={faq.title} />
        </div>
        <FaqList items={faq.items} />
      </div>
    </section>
  );
}
