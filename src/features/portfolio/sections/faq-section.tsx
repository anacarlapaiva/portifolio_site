"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { faqItems } from "@/features/portfolio/data";
import { cn } from "@/lib/utils";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <MotionReveal
      as="section"
      id="faq"
      className="scroll-mt-28 rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
      delay={0.14}
    >
      <SectionHeading
        eyebrow="FAQ"
        title="Dúvidas frequentes sobre minha atuação, stack e forma de construir"
        titleClassName="max-w-3xl"
      />

      <div className="mt-8 grid gap-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <MotionReveal key={item.question} delay={0.05 * index}>
              <Card className="overflow-hidden px-0 py-0">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
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
