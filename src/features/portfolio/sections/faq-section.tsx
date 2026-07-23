"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { cn } from "@/lib/utils";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { content } = usePortfolioI18n();
  const { faq } = content;

  return (
    <MotionReveal
      as="section"
      id="faq"
      className="min-w-0 scroll-mt-24 rounded-[1.5rem] border border-white/25 glass-panel px-4 py-5 sm:scroll-mt-28 sm:rounded-[2rem] sm:px-8 sm:py-8"
      delay={0.14}
    >
      <SectionHeading
        eyebrow={faq.eyebrow}
        title={faq.title}
        titleClassName="max-w-3xl"
      />

      <div className="mt-5 grid gap-3 sm:mt-8 sm:gap-4">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <MotionReveal key={item.question} delay={0.05 * index}>
              <Card className="overflow-hidden px-0 py-0">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span
                    className={cn(
                      "pr-2 font-display text-lg leading-snug font-semibold text-foreground sm:text-xl",
                      isOpen && "text-accent",
                    )}
                  >
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-inner-card-subtle text-foreground transition",
                      isOpen && "border-accent/30 bg-accent-soft text-accent",
                    )}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-line/70 px-5 pb-5 pt-4 sm:px-6">
                      <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </MotionReveal>
          );
        })}
      </div>
    </MotionReveal>
  );
}
