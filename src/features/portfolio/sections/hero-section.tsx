import { Fragment } from "react";

import type { CodeLine, PortfolioContent } from "@/features/portfolio/content";
import { socialLinks } from "@/features/portfolio/content";
import { delay } from "@/lib/utils";
import { MarqueeToggle } from "@/shared/ui/marquee-toggle";
import { WindowBar } from "@/shared/ui/window-bar";

type HeroSectionProps = {
  hero: PortfolioContent["hero"];
  newTabLabel: string;
};

type Token = { text: string; className: string };

const tone = {
  keyword: "text-[var(--code-kw)]",
  punct: "text-muted",
  key: "text-accent",
  string: "text-[var(--code-str)]",
  ident: "text-ink",
};

function valueTokens(value: CodeLine["value"]): Token[] {
  if (typeof value === "string") {
    return [{ text: `'${value}'`, className: tone.string }];
  }

  return [
    { text: "[", className: tone.punct },
    ...value.flatMap((item, index) => [
      { text: `'${item}'`, className: tone.string },
      ...(index < value.length - 1 ? [{ text: ", ", className: tone.punct }] : []),
    ]),
    { text: "]", className: tone.punct },
  ];
}

function buildCodeLines(code: PortfolioContent["hero"]["code"]): Token[][] {
  return [
    [
      { text: "const ", className: tone.keyword },
      { text: code.objectName, className: tone.ident },
      { text: " = {", className: tone.punct },
    ],
    ...code.lines.map((line) => [
      { text: `  ${line.key}`, className: tone.key },
      { text: ": ", className: tone.punct },
      ...valueTokens(line.value),
      { text: ",", className: tone.punct },
    ]),
    [{ text: "};", className: tone.punct }],
    [{ text: " ", className: tone.punct }],
    [
      { text: "export default ", className: tone.keyword },
      { text: code.objectName, className: tone.ident },
      { text: ";", className: tone.punct },
    ],
  ];
}

const sparkles = [
  { glyph: "✦", depth: 30, className: "top-[5%] left-[40%] text-[22px] text-accent", dur: "3.2s", d: "0s" },
  { glyph: "✦", depth: -20, className: "top-[72%] left-[5%] text-sm text-lilac", dur: "2.6s", d: ".8s" },
  { glyph: "✧", depth: 45, className: "top-[9%] right-[7%] text-base text-lilac", dur: "3.8s", d: "1.4s" },
  { glyph: "✦", depth: -35, className: "right-[45%] bottom-[12%] text-xs text-accent", dur: "2.2s", d: ".3s" },
];

export function HeroSection({ hero, newTabLabel }: HeroSectionProps) {
  const words = hero.title.split(" ");
  const highlightWords = hero.titleHighlight.split(" ");
  const codeLines = buildCodeLines(hero.code);

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative">
      <div aria-hidden="true">
        <div
          className="animate-drift pointer-events-none absolute -top-20 -right-[120px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] max-[760px]:h-[380px] max-[760px]:w-[380px]"
          style={{ "--dur": "16s" } as React.CSSProperties}
        />
        <div
          className="animate-drift pointer-events-none absolute bottom-0 -left-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--lilac)_45%,transparent),transparent_65%)] max-[760px]:h-[300px] max-[760px]:w-[300px]"
          style={{ "--dur": "20s", "--dir": "reverse" } as React.CSSProperties}
        />
        {sparkles.map((sparkle) => (
          <span
            key={sparkle.className}
            data-depth={sparkle.depth}
            className={`animate-twinkle pointer-events-none absolute ${sparkle.className}`}
            style={{ "--dur": sparkle.dur, "--d": sparkle.d } as React.CSSProperties}
          >
            {sparkle.glyph}
          </span>
        ))}
      </div>

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(40px,6vw,72px)] px-[clamp(20px,4vw,40px)] pt-[clamp(48px,8vw,110px)] pb-[clamp(56px,7vw,96px)]">
        <div className="min-w-0">
          <p
            data-hero=""
            className="m-0 inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-surface py-[5px] pr-3 pl-1.5 font-pixel text-sm text-muted"
          >
            <span
              className="bg-orb grid h-[22px] w-[22px] flex-none place-items-center rounded-full text-[11px] text-[#0b1a2b]"
              aria-hidden="true"
            >
              ★
            </span>
            <span className="min-w-0">{hero.badge}</span>
          </p>

          <h1
            id="hero-title"
            className="mt-[22px] mb-0 flex max-w-full flex-wrap gap-x-[0.24em] font-display text-[clamp(30px,calc(5.6vw+12px),72px)] leading-[1.04] font-semibold tracking-[-0.045em]"
          >
            {[...words, ...highlightWords].map((word, index) => {
              const isHighlight = index >= words.length;

              return (
                <Fragment key={`${word}-${index}`}>
                  <span className="inline-block overflow-hidden pr-[0.04em] pb-[0.1em]">
                    <span
                      data-word=""
                      style={delay(120 + index * 70)}
                      className={isHighlight ? "text-chrome inline-block" : "inline-block"}
                    >
                      {word}
                    </span>
                  </span>{" "}
                </Fragment>
              );
            })}
          </h1>

          <p className="mt-6 mb-0 max-w-[30em] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-pretty text-muted"
          >
            {hero.description}
          </p>

          <div data-hero="" style={delay(550)} className="mt-[34px] flex flex-wrap items-center gap-3">
            <a href="#projetos" data-magnetic="" className="btn-primary">
              {hero.primaryCta}
              <span data-arrow="" className="btn-orb" aria-hidden="true">
                ↓
              </span>
            </a>
            <a href={hero.resumeHref} target="_blank" rel="noopener" data-magnetic="" className="btn-ghost">
              {hero.secondaryCta}
              <span className="sr-only"> {newTabLabel}</span>
              <span data-arrow="" className="inline-block transition-transform duration-500" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <ul
            data-hero=""
            style={delay(650)}
            className="m-0 mt-[34px] flex list-none flex-wrap gap-5 p-0 text-sm text-muted"
          >
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                  className="inline-block py-1"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                  {link.href.startsWith("http") ? <span className="sr-only"> {newTabLabel}</span> : null}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div data-hero="" style={delay(300)} className="w-full max-w-[410px] min-w-0 justify-self-center">
          <div
            data-depth="-12"
            className="overflow-hidden rounded-[18px] border border-line bg-surface shadow-[0_40px_80px_-40px_var(--glow),0_1px_0_var(--line)] transition-[translate] duration-1000 ease-[var(--ease)]"
          >
            <WindowBar title={hero.code.fileName} className="px-3" />
            <div aria-hidden="true" className="overflow-x-auto py-[18px] font-mono text-[12px] leading-[1.75] min-[400px]:text-[13.5px]">
                {codeLines.map((tokens, index) => (
                  <div
                    key={index}
                    data-hero=""
                    style={delay(500 + index * 90)}
                    className="grid grid-cols-[34px_1fr] whitespace-pre min-[400px]:grid-cols-[44px_1fr]"
                  >
                    <span className="pr-3 text-right text-muted select-none min-[400px]:pr-4" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span>
                      {tokens.map((token, tokenIndex) => (
                        <span key={tokenIndex} className={token.className}>
                          {token.text}
                        </span>
                      ))}
                      {index === codeLines.length - 1 ? (
                        <span
                          className="animate-blink ml-0.5 inline-block h-[1.1em] w-2 bg-accent align-[-3px]"
                          aria-hidden="true"
                        />
                      ) : null}
                    </span>
                  </div>
                ))}
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-line bg-bar px-3.5 py-[9px] text-[12.5px] text-muted">
              <span className="flex items-center gap-2">
                <span
                  className="h-[7px] w-[7px] flex-none rounded-full bg-[#34c778] shadow-[0_0_0_3px_rgba(52,199,120,0.2)]"
                  aria-hidden="true"
                />
                {hero.status}
              </span>
              <span className="font-pixel" aria-hidden="true">
                TSX
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-line bg-surface/55">
        <MarqueeToggle pauseLabel={hero.tickerPause} playLabel={hero.tickerPlay} />
        <div data-marquee="">
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className="m-0 flex list-none p-0"
              >
                {hero.ticker.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-[26px] px-[13px] py-[15px] font-display text-[15px] font-medium tracking-[-0.02em] whitespace-nowrap text-muted"
                  >
                    {item}
                    <span className="text-[13px] text-accent" aria-hidden="true">
                      ✦
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
