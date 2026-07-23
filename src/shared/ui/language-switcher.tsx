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
        "glass-panel inline-flex items-center gap-1 rounded-full border border-white/25 p-1 text-xs text-muted [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(2,22,35,0.18),0_6px_14px_rgba(2,22,35,0.16)]",
        className,
      )}
      aria-label={languageSwitcher.label}
    >
      <span className="hidden h-8 w-8 items-center justify-center rounded-full text-foreground min-[380px]:flex sm:h-9 sm:w-9" aria-hidden="true">
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
                ? "bg-[radial-gradient(circle_at_50%_-15%,rgba(255,255,255,0.9),transparent_52%),linear-gradient(180deg,color-mix(in_srgb,var(--accent)_88%,white),color-mix(in_srgb,var(--accent)_90%,#0a5d7e))] text-white [text-shadow:0_1px_2px_rgba(0,40,60,0.55)] [box-shadow:inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-4px_7px_rgba(0,45,65,0.28),0_3px_7px_rgba(2,40,60,0.28)]"
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
