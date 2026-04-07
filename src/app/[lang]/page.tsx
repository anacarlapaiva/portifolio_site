import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPortfolioContent, hasLocale, locales } from "@/features/portfolio/content";
import { PortfolioPage } from "@/features/portfolio/portfolio-page";

type LangPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export async function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "pt")
    .map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  return getPortfolioContent(lang).metadata;
}

export default async function LangPage({ params }: LangPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang) || lang === "pt") {
    notFound();
  }

  return <PortfolioPage locale={lang} />;
}
