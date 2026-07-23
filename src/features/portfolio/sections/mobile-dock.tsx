"use client";

import { Briefcase, CircleHelp, House, Mail, Sparkles } from "lucide-react";

import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { useActiveSection } from "@/shared/hooks/use-active-section";
import { cn } from "@/lib/utils";

const dockMeta = [
  { href: "#inicio", icon: House, id: "inicio" },
  { href: "#skills", icon: Sparkles, id: "skills" },
  { href: "#projetos", icon: Briefcase, id: "projetos" },
  { href: "#faq", icon: CircleHelp, id: "faq" },
  { href: "#contato", icon: Mail, id: "contato" },
] as const;

export function MobileDock() {
  const { content } = usePortfolioI18n();
  const { navItems, mobileDock } = content;
  const activeSection = useActiveSection(["inicio", "skills", "projetos", "faq", "contato"]);

  const labelByHref = new Map(navItems.map((item) => [item.href, item.label]));
  labelByHref.set("#inicio", mobileDock.homeLabel);

  return (
    <nav
      aria-label={mobileDock.ariaLabel}
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 sm:inset-x-4 md:hidden"
    >
      <div className="glass-panel-strong grid grid-cols-5 gap-0.5 rounded-[1.5rem] border border-white/25 p-1.5 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.5),0_12px_30px_rgba(2,22,35,0.30)] sm:gap-1 sm:rounded-[1.75rem] sm:p-2">
        {dockMeta.map(({ href, icon: Icon, id }) => {
          const isActive = activeSection === id;
          const label = labelByHref.get(href) ?? id;

          return (
            <a
              key={href}
              href={href}
              aria-label={label}
              aria-current={isActive ? "page" : undefined}
              className="group flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl px-0.5 py-1 text-[0.58rem] font-medium transition sm:min-h-14 sm:gap-1 sm:text-[0.62rem]"
            >
              <span
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-full transition duration-300 sm:h-9 sm:w-9",
                  isActive
                    ? "-translate-y-0.5 bg-[radial-gradient(circle_at_50%_18%,#d9f6ff,color-mix(in_srgb,var(--accent)_90%,#0a5d7e)_82%)] text-white [box-shadow:inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(0,45,65,0.30),0_4px_8px_rgba(2,40,60,0.32)]"
                    : "text-muted group-hover:bg-accent-soft group-hover:text-foreground",
                )}
              >
                <Icon size={16} aria-hidden="true" />
              </span>
              <span
                className={cn(
                  "max-w-full truncate px-0.5 leading-none transition",
                  isActive ? "font-semibold text-accent" : "text-muted",
                )}
              >
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
