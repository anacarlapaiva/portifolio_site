# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> The line above is not optional: this repo runs **Next.js 16.2.2 / React 19 / Tailwind v4**, which differ from older conventions. Read the relevant guide in `node_modules/next/dist/docs/` before writing routing, metadata, or config code.

## Commands

```bash
npm run dev      # Dev server (Turbopack) at http://localhost:3000
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint (eslint-config-next: core-web-vitals + typescript)
```

There is no test suite. Type-checking happens through `next build` (`tsc` runs with `noEmit`).
The `@/*` path alias maps to `src/*`.

## What this is

A single-page multilingual portfolio (Ana Carla). One page, rendered in three locales. Almost all
work is editing the page content or its section components — there is no backend, database, or API.

## Architecture

**Routing — one page, three locales.** The default locale `pt` is served at `/` (`src/app/page.tsx`).
`en` and `es` are served at `/[lang]` (`src/app/[lang]/page.tsx`), which `generateStaticParams`
pre-renders for every locale except `pt` and `notFound()`s anything else. Both routes render the same
`<PortfolioPage locale={...} />`. To add a locale, extend `locales` in `content.ts` and add its content
object — routing follows automatically.

**Content is fully centralized and typed.** `src/features/portfolio/content.ts` is the single source of
truth: the `PortfolioContent` type defines every piece of copy (nav, hero, about, skills, process,
projects, faq, contact, metadata, aria-labels), and `portfolioContent` holds one fully-populated object
per locale (shared, non-translated data such as `socialLinks`, `flavorMedia` and `matchProteinHref` live
beside it). Section components contain *zero* hardcoded user-facing strings — they receive their slice
of content as props. **When adding any UI text, add the field to the `PortfolioContent` type first, then
fill it in for all three locales (pt/en/es).** TypeScript will flag a locale you forget.

**i18n delivery.** `PortfolioPage` (server) resolves content via `getPortfolioContent(locale)` and passes
each section only the slice it needs (`hero={content.hero}` etc.). There is no React context. The inline
boot script in `src/app/layout.tsx` sets `<html lang>` for `/en` and `/es` before paint (the root layout
is shared by all locales and hardcodes `pt-BR`).

**Server vs client.** Sections are server components. Only interactive islands are `"use client"`:
`site-header` (mobile menu), `match-protein-showcase` (flavor videos), `faq-list`, `contact-form`
(builds a `mailto:` with subject/body, plus Gmail/copy fallbacks), `ThemeToggle`, and `PageEffects`. Pass
them minimal props — everything passed to a client component is serialized into the page payload.
`whatsapp-widget` stays a server component: it opens via the native `popover` attribute (no JS).

**Section anchors are language-independent.** All in-page nav uses the Portuguese ids (`#projetos`,
`#sobre`, `#skills`, `#faq`, `#contato`, `#inicio`, `#conteudo`) in every locale — only the visible
labels are translated. Keep the ids in sync between section markup and `navItems`. Anchor scrolling is
native CSS (`scroll-behavior: smooth` + `scroll-padding-top` for the sticky header); there is no
smooth-scroll library.

**Theming.** Light is the default token set on `:root`; `[data-theme="dark"]` overrides it. The boot
script sets `data-theme` from `localStorage("theme")` (falling back to `prefers-color-scheme`) *before*
paint — `suppressHydrationWarning` is on `<html>` for this reason. Tokens are CSS variables in
`src/app/globals.css`, exposed to Tailwind v4 through `@theme inline` (`bg-surface`, `text-ink`,
`text-muted`, `border-line`, `bg-sky`, `text-accent`, `font-display`/`font-pixel`...). `ThemeToggle` has
no React state: it flips the attribute, and CSS shows the matching icon (avoids hydration mismatch).

**Motion is CSS-first.** Fonts come from `next/font/google` (Geist, Unbounded, Pixelify Sans — self-hosted).
- Hero entrance uses `data-hero` / `data-word` + CSS keyframes, so it paints before hydration (LCP).
- Below the fold, mark elements with `data-reveal` (fade-up), `data-clip` (curtain), or `data-line`
  (draw). `PageEffects` adds `.in` via one IntersectionObserver; CSS hides them only under `html.js`
  and outside `prefers-reduced-motion`. Stagger with `style={delay(ms)}` from `src/lib/utils.ts`.
- Scroll progress, the process scrub bar, and image parallax use native scroll-driven animations
  (`animation-timeline`), with a small JS fallback for the progress bar only.
- Hover-only effects (`data-tilt`, `data-magnetic`, `data-spot`, `data-depth`) run only on
  `(hover: hover) and (pointer: fine)`.
- Custom CSS classes live in `@layer base` / `@layer components` so Tailwind utilities can override them.

## Code layout

- `src/app/` — Next.js App Router entry points + root layout + `globals.css`.
- `src/features/portfolio/` — the feature. `content.ts` (copy + types), `portfolio-page.tsx` (composition),
  and `sections/*` (one component per page section, plus the client islands above).
- `src/shared/ui/` — `window-bar` (window chrome title bar), `section-heading`, `language-switcher`,
  `theme-toggle`, `page-effects`.
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge) and `delay()`.
- `public/project-previews/` — preview JPGs and the Match Protein clips (H.264, no audio, faststart) with
  posters. Re-encode new clips the same way (e.g. `ffmpeg -an -vf scale=960:-2 -crf 27 -movflags +faststart`).

## Conventions

- No icon library: glyphs are Unicode (↗ ↓ ✦ ☾ ☀); the WhatsApp mark is the only inline SVG. Videos use
 `preload="none"` + poster.
- Accessibility: every `target="_blank"` link gets `<span className="sr-only"> {newTabLabel}</span>`;
  decorative glyphs are `aria-hidden`; auto-moving content must stay pausable (`MarqueeToggle`).
  Keep text contrast ≥ 4.5:1 in both themes (checked with axe-core).
- No code comments in `src/` (project preference).
- Mark components `"use client"` only when they need hooks/interactivity. `page.tsx`, `portfolio-page.tsx`
  and the sections stay server components.
