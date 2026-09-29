"use client";

import { useEffect, useRef, useState } from "react";

import type { Locale, PortfolioContent } from "@/features/portfolio/content";
import { LanguageSwitcher } from "@/shared/ui/language-switcher";
import { ThemeToggle } from "@/shared/ui/theme-toggle";

type SiteHeaderProps = {
  locale: Locale;
  navItems: PortfolioContent["navItems"];
  labels: PortfolioContent["siteHeader"];
  themeLabel: string;
  languageLabel: string;
};

export function SiteHeader({ locale, navItems, labels, themeLabel, languageLabel }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const desktop = window.matchMedia("(min-width: 761px)");
    const close = () => setIsOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        toggleRef.current?.focus();
      }
    };
    const onBreakpoint = () => {
      if (desktop.matches) close();
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 px-[clamp(12px,3vw,28px)] pt-3">
      <div className="relative mx-auto max-w-[1180px]">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface/70 py-2 pr-2 pl-4 shadow-[0_10px_30px_-20px_var(--glow)] backdrop-blur-[16px]">
          <a href="#inicio" className="flex items-center gap-2 font-pixel text-[17px] whitespace-nowrap">
            <span className="text-accent" aria-hidden="true">
              &lt;/&gt;
            </span>
            ana_carla
            <span className="animate-blink text-accent" aria-hidden="true">
              _
            </span>
          </a>

          <nav aria-label={labels.navAriaLabel} className="hidden min-[761px]:block">
            <ul className="m-0 flex list-none gap-1 p-0 text-sm text-muted">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-[9px] px-3 py-[7px] transition-colors duration-[250ms] hover:bg-sky hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? labels.closeMenuAria : labels.openMenuAria}
              className="h-[34px] cursor-pointer rounded-[10px] border border-line bg-bar px-3 font-pixel text-sm text-ink min-[761px]:hidden"
            >
              {isOpen ? labels.closeLabel : labels.menuLabel}
            </button>
            <LanguageSwitcher currentLocale={locale} label={languageLabel} className="max-[439px]:hidden" />
            <ThemeToggle label={themeLabel} />
          </div>
        </div>

        <nav
          id="mobile-navigation"
          aria-label={labels.mobileNavAriaLabel}
          hidden={!isOpen}
          className="absolute inset-x-0 top-full mt-2 flex-col rounded-2xl border border-line bg-surface p-2 shadow-[0_20px_40px_-20px_var(--glow)] min-[761px]:hidden [&:not([hidden])]:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-[10px] px-3 py-3.5 font-display text-lg font-medium tracking-[-0.02em]"
            >
              <span>{item.label}</span>
              <span className="font-pixel text-[13px] text-muted">{item.number}</span>
            </a>
          ))}
          <div className="mt-1 flex border-t border-line px-3 pt-3 pb-1 min-[440px]:hidden">
            <LanguageSwitcher currentLocale={locale} label={languageLabel} />
          </div>
        </nav>
      </div>
    </header>
  );
}
