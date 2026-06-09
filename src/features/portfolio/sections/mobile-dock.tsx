"use client";

import { Briefcase, CircleHelp, House, Mail, Sparkles } from "lucide-react";

import { usePortfolioI18n } from "@/features/portfolio/portfolio-i18n";
import { useActiveSection } from "@/shared/hooks/use-active-section";
import { cn } from "@/lib/utils";

const dockIcons = [House, Sparkles, Briefcase, CircleHelp, Mail];

export function MobileDock() {
  const { content } = usePortfolioI18n();
  const { navItems, mobileDock } = content;
  const activeSection = useActiveSection(["inicio", "skills", "projetos", "faq", "contato"]);

  return (
    <nav
      aria-label={mobileDock.ariaLabel}
      className="fixed inset-x-4 bottom-4 z-40 md:hidden"
    >
      <div className="glass-panel-strong grid grid-cols-5 gap-1 rounded-[1.75rem] border border-white/25 p-2 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.5),0_12px_30px_rgba(2,22,35,0.30)]">
        {navItems.map((item, index) => {
          const Icon = dockIcons[index];
          const isActive = activeSection === item.href.replace("#", "");

          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className="group flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1 text-[0.62rem] font-medium transition"
            >
              <span
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-full transition duration-300",
                  isActive
                    ? "-translate-y-0.5 bg-[radial-gradient(circle_at_50%_18%,#d9f6ff,color-mix(in_srgb,var(--accent)_90%,#0a5d7e)_82%)] text-white [box-shadow:inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(0,45,65,0.30),0_4px_8px_rgba(2,40,60,0.32)]"
                    : "text-muted group-hover:bg-accent-soft group-hover:text-foreground",
                )}
              >
                <Icon size={17} aria-hidden="true" />
              </span>
              <span className={cn("leading-none transition", isActive ? "font-semibold text-accent" : "text-muted")}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
