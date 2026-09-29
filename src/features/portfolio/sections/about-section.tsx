import Image from "next/image";

import { socialLinks, type PortfolioContent } from "@/features/portfolio/content";
import { delay } from "@/lib/utils";
import { SectionHeading } from "@/shared/ui/section-heading";
import { WindowBar } from "@/shared/ui/window-bar";

type AboutSectionProps = {
  about: PortfolioContent["about"];
  newTabLabel: string;
};

const profileLinks = socialLinks.filter((link) => link.label !== "Email");

export function AboutSection({ about, newTabLabel }: AboutSectionProps) {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] pt-[clamp(32px,5vw,60px)] pb-[clamp(64px,9vw,120px)]"
    >
      <SectionHeading number="02" eyebrow={about.eyebrow} title={about.title} />

      <div className="mt-[clamp(36px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,330px),1fr))] items-start gap-[clamp(28px,4vw,56px)]">
        <div
          data-reveal=""
          data-tilt=""
          className="group overflow-hidden rounded-[18px] border border-line bg-surface shadow-[0_30px_60px_-40px_var(--glow)]"
        >
          <WindowBar title="ana-carla.jpg" size="sm" />
          <div data-clip="" style={delay(150)} className="relative aspect-[4/4.4] overflow-hidden bg-sky">
            <Image
              src="/profile-photo-v2.jpg"
              alt={about.photoAlt}
              fill
              sizes="(min-width: 1180px) 540px, (min-width: 760px) 46vw, 100vw"
              className="parallax-img zoom-img object-cover [scale:1.12] group-hover:[scale:1.16]"
            />
            <div className="shine pointer-events-none absolute inset-0" aria-hidden="true" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3.5">
            <div>
              <p className="m-0 text-base font-semibold">{about.name}</p>
              <p className="m-0 mt-0.5 text-[13px] text-muted">{about.role}</p>
            </div>
            <div className="flex gap-3 text-[13px] text-muted">
              {profileLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener" className="py-1">
                  {link.label}
                  <span className="sr-only"> {newTabLabel}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-10">
          <div data-reveal="" className="flex flex-col gap-4 text-[clamp(17px,1.4vw,19px)] leading-[1.65] text-pretty">
            <p className="m-0">{about.paragraphs[0]}</p>
            <p className="m-0 text-muted">{about.paragraphs[1]}</p>
          </div>
          <DefinitionList title={about.focusTitle} items={about.focusAreas} />
          <DefinitionList title={about.credentialsTitle} items={about.credentials} />
        </div>
      </div>
    </section>
  );
}

function DefinitionList({ title, items }: { title: string; items: PortfolioContent["about"]["focusAreas"] }) {
  return (
    <div>
      <h3 className="m-0 pb-2.5 font-pixel text-sm font-normal text-muted">{title}</h3>
      <div data-line="" className="h-0.5 bg-line2" aria-hidden="true" />
      <dl className="m-0">
        {items.map((item, index) => (
          <div
            key={item.title}
            data-reveal=""
            style={delay(150 + index * 90)}
            className="grid grid-cols-[minmax(110px,170px)_1fr] gap-4 border-b border-line py-3.5 text-[15px]"
          >
            <dt className="font-semibold">{item.title}</dt>
            <dd className="m-0 text-muted">{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
