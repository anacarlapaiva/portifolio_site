import type { Metadata } from "next";

import { PortfolioPage } from "@/features/portfolio/portfolio-page";

export const metadata: Metadata = {
  title: "Ana Carla | Portfolio",
  description:
    "Landing page pessoal com foco em desenvolvimento full stack, interfaces premium e experiencias digitais modernas.",
};

export default function Home() {
  return <PortfolioPage />;
}
