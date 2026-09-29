import { getLocalePath, type Locale } from "@/features/portfolio/content";
import { cn } from "@/lib/utils";

const localeOptions: Array<{ locale: Locale; short: string; name: string }> = [
  { locale: "pt", short: "PT", name: "Português" },
  { locale: "en", short: "EN", name: "English" },
  { locale: "es", short: "ES", name: "Español" },
];

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
  className?: string;
};

export function LanguageSwitcher({ currentLocale, label, className }: LanguageSwitcherProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn("flex gap-0.5 rounded-[10px] border border-line p-[3px] font-pixel text-xs", className)}
    >
      {localeOptions.map((option) => {
        const isActive = option.locale === currentLocale;

        return (
          <a
            key={option.locale}
            href={getLocalePath(option.locale)}
            hrefLang={option.locale}
            lang={option.locale}
            title={option.name}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "inline-flex min-h-7 min-w-8 items-center justify-center rounded-[7px] px-2",
              isActive ? "bg-sky text-ink" : "text-muted",
            )}
          >
            {option.short}
          </a>
        );
      })}
    </div>
  );
}
