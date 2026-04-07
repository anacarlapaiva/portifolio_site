import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactItems } from "@/features/portfolio/data";
import { MotionReveal } from "@/shared/ui/motion-reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function ContactSection() {
  return (
    <MotionReveal
      as="section"
      id="contato"
      className="scroll-mt-28 rounded-[2rem] border border-line bg-card px-5 py-8 shadow-[var(--shadow)] backdrop-blur sm:px-8"
      delay={0.15}
    >
      <SectionHeading eyebrow="Contato" title="Se a ideia for boa, eu quero construir junto" />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <p className="max-w-xl text-base leading-8 text-muted">
            Disponivel para freelas, novos produtos, landing pages premium e times
            que precisam elevar a experiencia do front-end sem perder consistencia
            tecnica.
          </p>
          <ButtonLink href="mailto:acfpaiva99@gmail.com" className="w-full sm:w-auto">
            Vamos conversar
            <ArrowRight size={18} />
          </ButtonLink>
        </div>

        <div className="grid gap-3">
          {contactItems.map(({ label, value, href, icon: Icon }, index) => (
            <MotionReveal key={label} delay={0.08 * index}>
              <a
                href={href}
                className="block"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`${label}: ${value}`}
              >
                <Card>
                  <CardContent className="flex w-full items-center gap-4 px-4 py-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent" aria-hidden="true">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm uppercase tracking-[0.25em] text-muted">
                        {label}
                      </p>
                      <p className="mt-1 truncate text-sm text-foreground sm:text-base">{value}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </MotionReveal>
          ))}
        </div>
      </div>
    </MotionReveal>
  );
}
