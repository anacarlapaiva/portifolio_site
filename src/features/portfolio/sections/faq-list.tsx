"use client";

import { useId, useState } from "react";

import type { PortfolioContent } from "@/features/portfolio/content";
import { delay } from "@/lib/utils";

type FaqListProps = {
  items: PortfolioContent["faq"]["items"];
};

export function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="border-t-2 border-line2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;

        return (
          <div key={item.question} data-reveal="" style={delay(index * 70)} className="border-b border-line">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent py-5 text-left text-[17px] font-medium text-ink transition-[padding] duration-[400ms] ease-[var(--ease)] hover:pl-2"
              >
                {item.question}
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 flex-none place-items-center rounded-full text-[17px] transition-[transform,background-color] duration-[450ms,300ms] ease-[var(--ease-spring)]"
                  style={{
                    background: isOpen ? "var(--ink)" : "var(--sky)",
                    color: isOpen ? "var(--bg)" : "var(--ink)",
                    transform: isOpen ? "rotate(135deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className="grid transition-[grid-template-rows] duration-500 ease-[var(--ease)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="m-0 pr-11 pb-5 text-[15px] leading-[1.6] text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
