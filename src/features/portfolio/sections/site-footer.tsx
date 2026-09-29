import type { PortfolioContent } from "@/features/portfolio/content";

type SiteFooterProps = {
  footer: PortfolioContent["footer"];
  navItems: PortfolioContent["navItems"];
};

const footerAnchors = ["#projetos", "#sobre", "#contato"];

export function SiteFooter({ footer, navItems }: SiteFooterProps) {
  const links = [
    { label: footer.homeLabel, href: "#inicio" },
    ...navItems.filter((item) => footerAnchors.includes(item.href)),
  ];

  return (
    <footer className="relative z-[1] mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] pb-9">
      <div data-clip="" className="overflow-hidden" aria-hidden="true">
        <div className="text-chrome pt-2.5 pb-[18px] font-display text-[clamp(40px,12.5vw,176px)] leading-[0.9] font-bold tracking-[-0.06em] whitespace-nowrap">
          ana carla
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-[18px] text-[13px] text-muted">
        <span>{footer.role}</span>
        <nav className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="py-1">
              {link.label}
            </a>
          ))}
        </nav>
        <span className="font-pixel">{footer.builtWith}</span>
      </div>
    </footer>
  );
}
