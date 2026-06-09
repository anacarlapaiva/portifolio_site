import type { Locale } from "@/features/portfolio/content";
import { getPortfolioContent } from "@/features/portfolio/content";
import { PortfolioI18nProvider } from "@/features/portfolio/portfolio-i18n";
import { AboutSection } from "@/features/portfolio/sections/about-section";
import { ContactSection } from "@/features/portfolio/sections/contact-section";
import { FaqSection } from "@/features/portfolio/sections/faq-section";
import { HeroSection } from "@/features/portfolio/sections/hero-section";
import { MobileDock } from "@/features/portfolio/sections/mobile-dock";
import { ProcessSection } from "@/features/portfolio/sections/process-section";
import { ProjectsSection } from "@/features/portfolio/sections/projects-section";
import { SkillsSection } from "@/features/portfolio/sections/skills-section";
import { SiteHeader } from "@/features/portfolio/sections/site-header";

type PortfolioPageProps = {
  locale: Locale;
};

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = getPortfolioContent(locale);

  return (
    <PortfolioI18nProvider locale={locale} content={content}>
      <main className="relative isolate overflow-hidden">
        <a href="#conteudo" className="skip-link">
          {content.skipLink}
        </a>
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(120,230,255,0.16),transparent_55%),radial-gradient(circle_at_72%_8%,rgba(95,230,194,0.12),transparent_45%)]" aria-hidden="true" />
        <div className="aero-bubble absolute -z-10 hidden h-40 w-40 opacity-60 blur-[1px] lg:left-[6%] lg:top-[16%] lg:block" aria-hidden="true" />
        <div className="aero-bubble absolute -z-10 hidden h-24 w-24 opacity-50 blur-[1px] lg:right-[5%] lg:top-[44%] lg:block" aria-hidden="true" />
        <div className="aero-bubble absolute -z-10 hidden h-14 w-14 opacity-50 blur-[0.5px] lg:left-[3%] lg:top-[30%] lg:block" aria-hidden="true" />
        <div className="aero-bubble absolute -z-10 hidden h-28 w-28 opacity-40 blur-[1px] lg:right-[10%] lg:top-[66%] lg:block" aria-hidden="true" />
        <div className="aero-bubble absolute -z-10 h-16 w-16 opacity-35 blur-[1px] right-[6%] top-[58%] sm:h-20 sm:w-20 lg:hidden" aria-hidden="true" />
        <div className="aero-bubble absolute -z-10 h-12 w-12 opacity-30 blur-[1px] left-[4%] top-[82%] lg:left-[14%]" aria-hidden="true" />
        <div
          id="conteudo"
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 pb-24 pt-6 sm:px-6 md:pb-12 lg:px-8"
        >
          <SiteHeader />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProcessSection />
          <ProjectsSection />
          <FaqSection />
          <ContactSection />
          <footer role="contentinfo" className="rounded-[2rem] border border-line glass-panel px-5 py-6 shadow-[var(--shadow)] backdrop-blur sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  <span className="text-accent">&lt;/&gt;</span> Ana Carla
                </p>
                <p className="mt-1 text-sm text-muted">{content.footer.role}</p>
              </div>
              <p className="text-xs text-muted">{content.footer.builtWith}</p>
            </div>
          </footer>
        </div>
        <MobileDock />
      </main>
    </PortfolioI18nProvider>
  );
}
