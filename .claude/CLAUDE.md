# Design System Template

Forkable brand design system built with Next.js 16, Tailwind CSS v4, and Biome.

## Purpose

Living reference catalog showing all base UI components styled with a brand's design tokens. Serves as the **source of truth** for a brand design system. Fork per client, swap `brand.css`, everything updates.

## Brand Rules Location

**`src/app/brand.css`** — THE file you swap per client. Defines all design tokens as CSS variables:

| Token Group | Variables | Format |
|-------------|-----------|--------|
| Core Brand | `--primary`, `--secondary`, `--accent` + foregrounds | oklch() |
| Surfaces | `--background`, `--foreground`, `--card`, `--muted`, `--popover` | oklch() |
| Semantic | `--destructive`, `--success`, `--warning` + foregrounds | oklch() |
| Chrome | `--border`, `--input`, `--ring` | oklch() |
| Sidebar | `--sidebar`, `--sidebar-foreground` | oklch() |
| Shapes | `--radius` | rem |
| Typography | `--font-heading`, `--font-body`, `--font-mono` | font stack via var() |
| Metadata | `--brand-name`, `--brand-description` | string |

## How Theming Works

```
brand.css (CSS vars) → globals.css (@theme inline maps to Tailwind) → components consume utilities
```

- `brand.css` defines raw oklch values as CSS variables
- `globals.css` maps them to Tailwind via `@theme inline { --color-primary: var(--primary); }`
- Components use Tailwind classes (`bg-primary`, `text-foreground`) — never raw CSS vars
- Fonts loaded via `next/font/google` in `layout.tsx`, referenced as `var(--font-inter)` in brand.css

## Commands

```bash
pnpm dev          # Dev server on port 5050 (Turbopack)
pnpm build        # Production build
pnpm lint         # Biome check
pnpm typecheck    # TypeScript strict
pnpm quality      # Full quality gate (lint + typecheck + build)
```

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript strict
- Tailwind CSS v4 (`@theme inline` pattern)
- Biome (replaces ESLint/Prettier)
- CVA + clsx + tailwind-merge for component variants
- Lucide React for icons

## Structure

| Path | Purpose |
|------|---------|
| `src/app/brand.css` | Swappable brand tokens (THE file to change) |
| `src/app/globals.css` | Tailwind theme mapping (stays same across forks) |
| `src/app/layout.tsx` | Root layout with font loading |
| `src/components/ui/` | Base components (button, badge, alert, input, card) |
| `src/components/layout/` | Sidebar, page header |
| `src/components/docs/` | Component preview, code block, section |
| `src/app/foundation/` | Typography, colors, spacing, icons pages |
| `src/app/components/` | Buttons, inputs, cards, tables, badges, alerts pages |

## Forking for a New Brand

1. Fork this repo
2. Replace `src/app/brand.css` with client's design tokens
3. Update font loading in `layout.tsx` if using different fonts
4. Everything updates automatically — all components, all pages
