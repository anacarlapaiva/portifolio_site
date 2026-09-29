import { contactEmail, socialLinks, type PortfolioContent } from "@/features/portfolio/content";
import { ContactForm } from "@/features/portfolio/sections/contact-form";
import { SectionHeading } from "@/shared/ui/section-heading";
import { WindowBar } from "@/shared/ui/window-bar";

type ContactSectionProps = {
  contact: PortfolioContent["contact"];
  newTabLabel: string;
};

export function ContactSection({ contact, newTabLabel }: ContactSectionProps) {
  return (
    <section id="contato" className="px-[clamp(20px,4vw,40px)] pb-[clamp(40px,5vw,64px)]">
      <div
        data-reveal=""
        className="shadow-glow mx-auto max-w-[1180px] overflow-hidden rounded-[22px] border border-line bg-surface"
      >
        <WindowBar title={contact.fileName} className="py-2.5" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-end gap-[clamp(32px,5vw,64px)] px-[clamp(20px,5vw,64px)] py-[clamp(36px,6vw,72px)]">
          <div>
            <SectionHeading
              reveal={false}
              number="06"
              eyebrow={contact.eyebrow}
              titleClassName="text-[clamp(28px,4.4vw,56px)]"
              title={
                <>
                  {contact.title} <span className="text-chrome">{contact.titleHighlight}</span>
                </>
              }
            />
            <p className="mt-[18px] mb-0 max-w-[28em] text-[17px] leading-[1.6] text-muted">{contact.description}</p>
            <ContactForm email={contactEmail} cta={contact.cta} form={contact.form} newTabLabel={newTabLabel} />
          </div>
          <ul className="m-0 list-none border-t-2 border-line2 p-0">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                  className="flex items-center justify-between gap-4 border-b border-line py-[18px] transition-[padding,color] duration-[400ms,300ms] ease-[var(--ease)] hover:pr-1 hover:pl-3"
                >
                  <span className="font-pixel text-[15px] text-muted">{link.label}</span>
                  <span className="min-w-0 text-right text-[15px] font-medium [overflow-wrap:anywhere]">
                    {link.value} <span aria-hidden="true">↗</span>
                    {link.href.startsWith("http") ? <span className="sr-only"> {newTabLabel}</span> : null}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
