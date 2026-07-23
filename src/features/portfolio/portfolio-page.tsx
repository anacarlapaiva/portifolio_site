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
      <main className="relative">
        <a href="#conteudo" className="skip-link">
          {content.skipLink}
        </a>

        {/* Céu contínuo full-viewport — sem corte horizontal */}
        <div className="aero-sky" aria-hidden="true">
          <div className="aero-sky__glow aero-sky__glow--a" />
          <div className="aero-sky__glow aero-sky__glow--b" />
          <div className="aero-sky__glow aero-sky__glow--c" />
        </div>

        {/* Bolhas glossy — só desktop, pra não poluir mobile */}
        <div
          className="aero-bubble pointer-events-none fixed z-[1] hidden h-44 w-44 opacity-55 blur-[0.5px] lg:block"
          style={{ left: "4%", top: "22%" }}
          aria-hidden="true"
        />
        <div
          className="aero-bubble pointer-events-none fixed z-[1] hidden h-28 w-28 opacity-45 blur-[0.5px] lg:block"
          style={{ right: "5%", top: "38%" }}
          aria-hidden="true"
        />
        <div
          className="aero-bubble pointer-events-none fixed z-[1] hidden h-16 w-16 opacity-40 lg:block"
          style={{ left: "2%", top: "48%" }}
          aria-hidden="true"
        />
        <div
          className="aero-bubble pointer-events-none fixed z-[1] hidden h-32 w-32 opacity-35 blur-[0.5px] lg:block"
          style={{ right: "10%", top: "68%" }}
          aria-hidden="true"
        />

        <div
          id="conteudo"
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-4 px-3 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-4 sm:gap-5 sm:px-6 sm:pb-12 sm:pt-6 md:pb-12 lg:gap-6 lg:px-8"
        >
          <SiteHeader />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProcessSection />
          <ProjectsSection />
          <FaqSection />
          <ContactSection />
          <footer
            role="contentinfo"
            className="rounded-[1.5rem] border border-white/25 glass-panel px-4 py-5 sm:rounded-[2rem] sm:px-8 sm:py-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div>
                <p className="font-display text-base font-semibold text-foreground sm:text-lg">
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
