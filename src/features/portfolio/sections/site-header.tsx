"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { useActiveSection } from "@/shared/hooks/use-active-section";
import { LanguageSwitcher } from "@/shared/ui/language-switcher";
import { ThemeToggle } from "@/shared/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, content } = usePortfolioI18n();
  const { navItems, siteHeader, themeToggle, languageSwitcher } = content;
  const activeSection = useActiveSection(["sobre", "skills", "projetos", "faq", "contato"]);

  return (
    <header className="sticky top-2 z-30 rounded-[2rem] border border-line glass-panel px-5 py-4 shadow-[var(--shadow)] backdrop-blur sm:top-4 md:px-8" role="banner">
      <div className="flex flex-wrap items-start gap-3 md:flex-nowrap md:items-center md:justify-between">
        <a
          href="#inicio"
          className="min-w-0 flex-1 font-display text-base font-semibold tracking-wide text-foreground sm:text-lg md:flex-none"
        >
          <span className="whitespace-nowrap">
            <span className="text-accent" aria-hidden="true">&lt;/&gt;</span> {siteHeader.brandLabel}
          </span>
        </a>
        <div className="flex w-full items-center justify-between gap-2 md:hidden">
          <LanguageSwitcher
            currentLocale={locale}
            languageSwitcher={languageSwitcher}
            className="min-w-0 flex-1 max-w-[13rem] bg-inner-card/90"
          />
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle
              ariaLabel={themeToggle.ariaLabel}
              enableLightLabel={themeToggle.enableLight}
              enableDarkLabel={themeToggle.enableDark}
              className="h-10 w-10 bg-inner-card/90"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? siteHeader.closeMenu : siteHeader.openMenu}
              onClick={() => setIsOpen((current) => !current)}
              className="h-10 w-10 bg-inner-card/90"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>
        <nav aria-label={siteHeader.navAriaLabel} className="hidden md:block">
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-3 text-sm text-foreground">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 transition hover:text-accent",
                        isActive && "bg-accent-soft text-accent",
                      )}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/80" aria-hidden="true" />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <LanguageSwitcher currentLocale={locale} languageSwitcher={languageSwitcher} />
            <ThemeToggle
              ariaLabel={themeToggle.ariaLabel}
              enableLightLabel={themeToggle.enableLight}
              enableDarkLabel={themeToggle.enableDark}
            />
          </div>
        </nav>
      </div>
      <div
        id="mobile-navigation"
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 md:hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mt-1 grid gap-3 border-t border-line pt-4">
            <nav aria-label={siteHeader.mobileNavAriaLabel}>
              <ul className="grid gap-2 text-sm text-foreground">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "inline-flex min-h-12 w-full items-center justify-between rounded-2xl border border-line bg-inner-card/90 px-4 py-3 transition hover:border-accent/30 hover:bg-accent-soft hover:text-accent",
                        activeSection === item.href.replace("#", "") && "border-accent/30 bg-accent-soft text-accent",
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="h-2 w-2 rounded-full bg-accent/80" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
