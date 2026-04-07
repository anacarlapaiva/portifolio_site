"use client";

import { createContext, useContext, useEffect } from "react";

import type { Locale, PortfolioContent } from "@/features/portfolio/content";

type PortfolioI18nContextValue = {
  locale: Locale;
  content: PortfolioContent;
};

const PortfolioI18nContext = createContext<PortfolioI18nContextValue | null>(null);

type PortfolioI18nProviderProps = {
  locale: Locale;
  content: PortfolioContent;
  children: React.ReactNode;
};

export function PortfolioI18nProvider({
  locale,
  content,
  children,
}: PortfolioI18nProviderProps) {
  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
  }, [content.htmlLang]);

  return (
    <PortfolioI18nContext.Provider value={{ locale, content }}>
      {children}
    </PortfolioI18nContext.Provider>
  );
}

export function usePortfolioI18n() {
  const context = useContext(PortfolioI18nContext);

  if (!context) {
    throw new Error("usePortfolioI18n must be used within PortfolioI18nProvider");
  }

  return context;
}
