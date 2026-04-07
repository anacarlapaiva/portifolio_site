"use client";

import { Briefcase, CircleHelp, House, Mail, Sparkles } from "lucide-react";

import { navItems } from "@/features/portfolio/data";
import { useActiveSection } from "@/shared/hooks/use-active-section";
import { cn } from "@/lib/utils";

const dockIcons = [House, Sparkles, Briefcase, CircleHelp, Mail];

export function MobileDock() {
  const activeSection = useActiveSection(["inicio", "skills", "projetos", "faq", "contato"]);

  return (
    <nav
      aria-label="Navegacao rapida mobile"
      className="fixed inset-x-4 bottom-4 z-40 md:hidden"
    >
      <div className="grid grid-cols-5 rounded-full border border-line bg-card-strong p-2 shadow-[var(--shadow)] backdrop-blur">
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
                  ? "bg-accent text-white"
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
