import { AboutSection } from "@/features/portfolio/sections/about-section";
import { ContactSection } from "@/features/portfolio/sections/contact-section";
import { HeroSection } from "@/features/portfolio/sections/hero-section";
import { MobileDock } from "@/features/portfolio/sections/mobile-dock";
import { ProcessSection } from "@/features/portfolio/sections/process-section";
import { ProjectsSection } from "@/features/portfolio/sections/projects-section";
import { SkillsSection } from "@/features/portfolio/sections/skills-section";
import { SiteHeader } from "@/features/portfolio/sections/site-header";

export function PortfolioPage() {
  return (
    <main className="relative isolate overflow-hidden">
      <a href="#conteudo" className="skip-link">
        Pular para o conteudo principal
      </a>
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,122,89,0.10),transparent_50%)]" aria-hidden="true" />
      <div
        id="conteudo"
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-24 pt-6 sm:px-6 md:pb-12 lg:px-8"
      >
        <SiteHeader />
        <HeroSection />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <AboutSection />
          <div className="grid gap-6">
            <SkillsSection />
            <ProcessSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </div>
        <footer role="contentinfo" className="mt-6 rounded-[2rem] border border-line bg-card px-5 py-6 shadow-[var(--shadow)] backdrop-blur sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-foreground">
                <span className="text-accent">&lt;/&gt;</span> Ana Carla
              </p>
              <p className="mt-1 text-sm text-muted">Desenvolvedora front-end, interface e produto.</p>
            </div>
            <p className="text-xs text-muted">Feito com Next.js, Tailwind e Motion</p>
          </div>
        </footer>
      </div>
      <MobileDock />
    </main>
  );
}
