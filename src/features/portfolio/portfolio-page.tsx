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
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,122,89,0.10),transparent_50%)]" aria-hidden="true" />
        <div
          id="conteudo"
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-24 pt-6 sm:px-6 md:pb-12 lg:px-8"
        >
          <SiteHeader />
          <HeroSection />
          <div className="grid min-w-0 grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <AboutSection />
            <div className="grid min-w-0 gap-6">
              <SkillsSection />
              <ProcessSection />
              <ProjectsSection />
              <FaqSection />
              <ContactSection />
            </div>
          </div>
          <footer role="contentinfo" className="mt-6 rounded-[2rem] border border-line bg-card px-5 py-6 shadow-[var(--shadow)] backdrop-blur sm:px-8">
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
