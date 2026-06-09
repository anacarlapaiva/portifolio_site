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
per locale. Section components contain *zero* hardcoded user-facing strings — they read everything from
context. **When adding any UI text, add the field to the `PortfolioContent` type first, then fill it in
for all three locales (pt/en/es).** TypeScript will flag a locale you forget.

> ⚠️ `src/features/portfolio/data.ts` is **dead code** (no importers) — a leftover monolingual version
> of the content. Do not edit it expecting changes to appear; use `content.ts`.

**i18n delivery.** `PortfolioPage` resolves content server-side via `getPortfolioContent(locale)` and
wraps the tree in `PortfolioI18nProvider`. Client section components call `usePortfolioI18n()` to read
`{ locale, content }`. The provider also syncs `document.documentElement.lang` to `content.htmlLang`.

**Section anchors are language-independent.** All in-page nav uses the Portuguese ids (`#sobre`,
`#skills`, `#projetos`, `#faq`, `#contato`, `#inicio`, `#conteudo`) in every locale — only the visible
labels are translated. `useActiveSection` (`src/shared/hooks/`) drives nav highlighting off these ids
via IntersectionObserver, so the ids must stay in sync between section markup and `navItems`.

**Theming.** Dark/light via a `data-theme` attribute on `<html>`. An inline script in
`src/app/layout.tsx` sets it from `localStorage` (falling back to `prefers-color-scheme`) *before*
paint to avoid a flash — `suppressHydrationWarning` is on the html element for this reason. Color tokens
are CSS variables in `src/app/globals.css`, exposed to Tailwind v4 through `@theme inline` (so classes
like `bg-card`, `text-accent`, `border-line` resolve to themed tokens). `ThemeToggle` flips the attribute
and persists the choice.

**Smooth scroll** is global via `LenisProvider` (Lenis rAF loop) mounted in the root layout.

## Code layout

- `src/app/` — Next.js App Router entry points + root layout + `globals.css`.
- `src/features/portfolio/` — the feature. `content.ts` (copy + types), `portfolio-page.tsx` (composition),
  `portfolio-i18n.tsx` (context), and `sections/*` (one component per page section).
- `src/shared/` — cross-cutting pieces: `ui/` (language switcher, theme toggle, section heading,
  motion-reveal), `providers/` (Lenis), `hooks/` (active section, intersection reveal).
- `src/components/ui/` — low-level primitives (`button`, `card`) built with `class-variance-authority`;
  compose classes with `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge).

## Conventions

- Animations use the `motion` package (Framer Motion's successor) — `MotionReveal` / `use-intersection-reveal`
  for scroll-triggered entrances. Icons come from `lucide-react`.
- Mark components `"use client"` only when they need hooks/interactivity (toggles, nav state, context
  consumers). `page.tsx` and `portfolio-page.tsx` stay server components.
