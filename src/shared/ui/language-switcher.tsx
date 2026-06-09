"use client";

import { Languages } from "lucide-react";
import { usePathname } from "next/navigation";

import type { Locale, PortfolioContent } from "@/features/portfolio/content";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  languageSwitcher: PortfolioContent["languageSwitcher"];
  className?: string;
};

function getLocalizedPath(pathname: string, targetLocale: Locale) {
  const pathWithoutLocale = pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "/";

  if (targetLocale === "pt") {
    return pathWithoutLocale;
  }

  return pathWithoutLocale === "/" ? `/${targetLocale}` : `/${targetLocale}${pathWithoutLocale}`;
}

export function LanguageSwitcher({
  currentLocale,
  languageSwitcher,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "glass-panel inline-flex items-center gap-1 rounded-full border border-line p-1 text-xs text-muted shadow-[var(--shadow-sm)]",
        className,
      )}
      aria-label={languageSwitcher.label}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full text-foreground sm:h-9 sm:w-9" aria-hidden="true">
        <Languages size={16} />
      </span>
      {languageSwitcher.options.map((option) => {
        const isActive = option.locale === currentLocale;

        return (
          <a
            key={option.locale}
            href={getLocalizedPath(pathname, option.locale)}
            hrefLang={option.locale}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "inline-flex min-h-8 items-center justify-center rounded-full px-2.5 text-[0.78rem] font-semibold transition sm:min-h-9 sm:px-3 sm:text-xs",
              isActive
                ? "aero-gloss bg-[linear-gradient(180deg,color-mix(in_srgb,var(--accent)_72%,white),var(--accent))] text-white [box-shadow:inset_0_1px_0_rgba(255,255,255,0.6)]"
                : "text-muted hover:bg-accent-soft hover:text-foreground",
            )}
            title={option.label}
          >
            {option.shortLabel}
          </a>
        );
      })}
    </div>
  );
}
