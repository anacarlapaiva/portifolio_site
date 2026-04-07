import type { Metadata } from "next";

import { defaultLocale, getPortfolioContent } from "@/features/portfolio/content";
import { PortfolioPage } from "@/features/portfolio/portfolio-page";

const content = getPortfolioContent(defaultLocale);

export const metadata: Metadata = content.metadata;

export default function Home() {
  return <PortfolioPage locale={defaultLocale} />;
}
