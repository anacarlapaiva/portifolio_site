import type { Locale } from "@/features/portfolio/content";
import { getPortfolioContent } from "@/features/portfolio/content";
import { AboutSection } from "@/features/portfolio/sections/about-section";
import { ContactSection } from "@/features/portfolio/sections/contact-section";
import { FaqSection } from "@/features/portfolio/sections/faq-section";
import { HeroSection } from "@/features/portfolio/sections/hero-section";
import { ProcessSection } from "@/features/portfolio/sections/process-section";
import { ProjectsSection } from "@/features/portfolio/sections/projects-section";
import { SiteFooter } from "@/features/portfolio/sections/site-footer";
import { SiteHeader } from "@/features/portfolio/sections/site-header";
import { SkillsSection } from "@/features/portfolio/sections/skills-section";
import { WhatsappWidget } from "@/features/portfolio/sections/whatsapp-widget";
import { PageEffects } from "@/shared/ui/page-effects";

type PortfolioPageProps = {
  locale: Locale;
};

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = getPortfolioContent(locale);

  return (
    <>
      <a href="#conteudo" className="skip-link">
        {content.skipLink}
      </a>

      <div className="relative min-h-screen overflow-x-clip text-ink">
        <div
          className="scroll-progress bg-chrome pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
          aria-hidden="true"
        />
        <div className="bg-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

        <SiteHeader
          locale={locale}
          navItems={content.navItems}
          labels={content.siteHeader}
          themeLabel={content.themeToggle.label}
          languageLabel={content.languageSwitcher.label}
        />

        <main id="conteudo" tabIndex={-1} className="relative z-[1] outline-none">
          <HeroSection hero={content.hero} newTabLabel={content.newTabLabel} />
          <ProjectsSection projects={content.projects} newTabLabel={content.newTabLabel} />
          <AboutSection about={content.about} newTabLabel={content.newTabLabel} />
          <SkillsSection skills={content.skills} />
          <ProcessSection process={content.process} />
          <FaqSection faq={content.faq} />
          <ContactSection contact={content.contact} newTabLabel={content.newTabLabel} />
        </main>

        <SiteFooter footer={content.footer} navItems={content.navItems} />
      </div>

      <WhatsappWidget whatsapp={content.whatsapp} newTabLabel={content.newTabLabel} />

      <PageEffects />
    </>
  );
}
