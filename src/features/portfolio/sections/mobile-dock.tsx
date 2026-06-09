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
      <div className="glass-panel-strong grid grid-cols-5 rounded-full border border-line p-2 shadow-[var(--shadow)]">
        {navItems.map((item, index) => {
          const Icon = dockIcons[index];
          const isActive = activeSection === item.href.replace("#", "");

          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex min-h-12 flex-col items-center justify-center rounded-full px-2 py-2 text-xs font-medium transition",
                isActive
                  ? "aero-gloss bg-[linear-gradient(180deg,color-mix(in_srgb,var(--accent)_72%,white),var(--accent))] text-white [box-shadow:inset_0_1px_0_rgba(255,255,255,0.6)]"
                  : "text-muted hover:bg-accent-soft hover:text-foreground",
              )}
            >
              <Icon size={18} aria-hidden="true" />
              <span className="mt-1">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
