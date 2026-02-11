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
| Typography | `--font-heading`, `--font-heading-weight`, `--font-body`, `--font-mono` | font stack, weight, via var() |
| Metadata | `--brand-name`, `--brand-description` | string |

## How Theming Works

```
brand.css (CSS vars) → globals.css (@theme inline maps to Tailwind) → components consume utilities
```

- `brand.css` defines raw oklch values as CSS variables
- `globals.css` maps them to Tailwind via `@theme inline { --color-primary: var(--primary); }`
- Components use Tailwind classes (`bg-primary`, `text-foreground`) — never raw CSS vars
- Fonts loaded via `next/font/google` in `layout.tsx`, referenced as `var(--font-inter)` in brand.css

## Font Handling Rules (CRITICAL)

Client CI documents often specify **commercial fonts** (e.g., Continuum, Avenir, Proxima Nova) that are NOT available on Google Fonts. The design system must handle this correctly.

### Two-Font Architecture

Every brand fork MUST separate heading and body fonts in `brand.css`:

```css
--font-heading: var(--font-HEADING), ui-sans-serif, system-ui, sans-serif;
--font-body: var(--font-BODY), ui-sans-serif, system-ui, sans-serif;
```

And `globals.css` MUST apply heading font AND weight to all heading elements:

```css
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: var(--font-heading-weight);
}
```

## Heading Weight Rule (CRITICAL)

**NEVER add `font-bold` or `font-semibold` to heading elements (h1-h6) in components or pages.**

Heading font weight is controlled centrally via `--font-heading-weight` in `brand.css`. This token is applied to all headings via the base CSS layer in `globals.css`. Adding Tailwind weight utilities to headings overrides this token, breaking brand compliance.

| Element | Weight Source | Tailwind Override |
|---------|-------------|------------------|
| h1-h6 | `var(--font-heading-weight)` via globals.css | FORBIDDEN |
| CardTitle (div) | Own `font-semibold` class | OK (not a heading) |
| Badge (div) | Own `font-semibold` class | OK (not a heading) |
| p, span, td | None (inherits normal) | OK (`font-medium`, `font-bold` for emphasis) |

### Why This Matters

Brand CI documents specify heading weight (e.g., "Continuum Light" = 300, "Inter Bold" = 700). If components add `font-bold`, forks must hunt through every component to change it. With the token, forks change `--font-heading-weight: 300;` in ONE place.

### When CI Specifies a Commercial Font

1. **Document the gap** in `brand.css` with a clear comment:
   - Which font is specified by CI
   - That it's not yet available
   - Who to contact for the font files
   - Exact steps to enable it when received

2. **Use CI-approved fallback** — If the CI specifies both a commercial primary and a free secondary font (common pattern), use the secondary font as temporary fallback.

3. **Never silently substitute** — Always document that a fallback is in use. Never just use a different font without explaining why.

4. **Structure layout.tsx for easy swap** — Keep the font variable separate so switching from Google Font fallback to self-hosted commercial font requires changing only 2 things:
   - `layout.tsx`: Add `localFont()` import
   - `brand.css`: Change `var(--font-FALLBACK)` to `var(--font-COMMERCIAL)`

### Font File Requirements

When client provides font files:
- Preferred format: `.woff2` (smallest, best browser support)
- Store in: `src/fonts/` directory
- Load via: `next/font/local` in `layout.tsx`
- Never commit unlicensed fonts

## Font Variable Placement Rule (CRITICAL)

**next/font CSS variables MUST be applied to `<html>`, NOT `<body>`.**

In `layout.tsx`:
```tsx
// CORRECT — font vars on <html>
<html lang="en" className={`${font.variable} ${monoFont.variable}`}>
  <body className="antialiased">

// WRONG — font vars on <body>, breaks Tailwind theme
<html lang="en">
  <body className={`${font.variable} ${monoFont.variable} antialiased`}>
```

### Why This Matters

Tailwind v4's `@theme inline` generates `:root`-level CSS custom properties. When `--font-sans` references a Next.js font variable (e.g., `var(--font-inter)`), that variable must be available at `:root` (`<html>`) level. If font variables are only on `<body>` (a child of `<html>`), the entire font chain resolves to empty and falls back to the browser default `ui-sans-serif`.

### The Variable Chain

```
layout.tsx: <html className={font.variable}>     → sets --font-inter on <html>
globals.css @theme: --font-sans: var(--font-inter) → resolves at :root level ✓
Tailwind preflight: html { font-family: var(--font-sans) } → applies font ✓
All elements inherit from html → font works everywhere ✓
```

### Verification

After font changes, always verify with browser DevTools:
```js
getComputedStyle(document.documentElement).fontFamily
// Should show actual font name, NOT "ui-sans-serif, system-ui, sans-serif"
```

## Component Color Rules (CRITICAL)

**NEVER hardcode Tailwind color values** (e.g., `green-500`, `yellow-500`, `blue-600`) in component variants. ALL colors MUST use semantic brand tokens defined in `brand.css`.

### Token Mapping

| Use Case | WRONG | CORRECT |
|----------|-------|---------|
| Success background | `bg-green-500` | `bg-success` |
| Success text | `text-green-700` | `text-success` |
| Success foreground | `text-white` | `text-success-foreground` |
| Success hover | `hover:bg-green-600` | `hover:bg-success/80` |
| Warning background | `bg-yellow-500` | `bg-warning` |
| Warning text | `text-yellow-700` | `text-warning` |
| Warning foreground | `text-white` | `text-warning-foreground` |
| Warning hover | `hover:bg-yellow-600` | `hover:bg-warning/80` |
| Primary | `bg-blue-600` | `bg-primary` |
| Destructive | `bg-red-500` | `bg-destructive` |

### Why This Matters

Each brand fork defines its OWN semantic colors in `brand.css`. Hardcoding `green-500` means the color can't be customized per brand — it will always be generic Tailwind green regardless of the client's CI.

### The Rule

Every color in every component variant MUST reference a CSS variable from `brand.css` via Tailwind utilities (`bg-primary`, `text-muted-foreground`, `border-success`, etc.). Zero exceptions.

### Verification

Before committing component changes, grep for hardcoded colors:
```bash
grep -rn 'green-\|yellow-\|blue-\|red-\|purple-\|orange-' src/components/ui/
```
If any matches → replace with semantic tokens before committing.

## Color Page Hierarchy Architecture (CRITICAL)

The foundation/colors page MUST follow a layered hierarchy to prevent duplication. Each color value appears exactly ONCE.

### Base Template Structure (4 layers)

```
Layer 1: Brand Colors    — primary, secondary, accent (defined ONCE, with foreground pairs)
Layer 2: Surfaces        — background/foreground pairs for UI layers
Layer 3: Semantic Colors — destructive, success, warning (independent of brand)
Layer 4: Chrome          — border, input, ring
```

### Fork Structure (6 layers — when client has CI palette)

```
Layer 0: CI Palette      — raw brand colors from identity guide (shown ONCE with hex + oklch)
Layer 1: Token Mapping   — visual: CI color → arrow → derived UI tokens
Layer 2: Surfaces        — background/foreground pairs
Layer 3: Semantic Colors — independent
Layer 4: Chrome          — border, input, ring
Layer 5: Code Reference  — full brand.css
```

### Anti-Pattern (causes duplication)

Showing all CSS variables as a flat list grouped by type (brand, ui, semantic, chrome). When tokens share values (e.g., `--primary = --dark-blue`, `--foreground = --dark-blue`), the same oklch value appears 3-4 times.

### Correct Pattern

Show source colors ONCE, then show derivation. The mapping section communicates "this CI color becomes these tokens" without repeating values.

## Brand Colors vs Semantic Colors (CRITICAL)

**Brand palette colors (Violet, Lime, Neon Cyan, etc.) are for brand identity display ONLY — they should appear on the Colors foundation page but NOT in application UI elements like badges, backgrounds, or status indicators.**

For application UI, always use semantic tokens:
- Status indicators: success, warning, destructive
- Interactive: primary, secondary, accent
- Content: foreground, muted-foreground
- Surfaces: card, muted, background

| Use Case | WRONG | CORRECT |
|----------|-------|---------|
| "Heizung" category badge | bg-lime/10 text-lime | bg-muted text-foreground |
| "Sanitär" category badge | bg-neon-cyan/10 text-neon-cyan | bg-accent/10 text-accent |
| Order status "Überfällig" | - | bg-destructive text-destructive-foreground |
| Order status "In Arbeit" | - | bg-primary text-primary-foreground |
| Order status "Abgeschlossen" | - | bg-success text-success-foreground |

### Why This Matters

Brand colors are high-saturation identity colors designed for logos and marketing. They create visual noise in UI. Semantic tokens have appropriate contrast and professional appearance.

### When to Use Brand Colors

Only use direct brand palette colors (violet, lime, neon-cyan, etc.) in these contexts:
- Brand identity pages (Color foundation page showing the palette)
- Marketing materials and landing pages
- Logos and brand marks
- Hero sections emphasizing brand identity

### When to Use Semantic Colors

Use semantic tokens for ALL functional UI:
- Data tables, forms, dashboards
- Badges, alerts, status indicators
- Interactive components (buttons, inputs)
- Navigation and layout elements

## AI Variation Workflow

Procedure for generating multiple UI design variations using different AI systems, enabling stakeholder comparison and selection.

### Step 1: Define Page Scope

Before generating any code, document:
- What data does the page display?
- What actions can the user take?
- Navigation context (what page leads here, what pages lead from here)
- Mock data structure (shared across ALL AI variations for fair comparison)

### Step 2: Generate Variations

Each AI system creates a separate file with underscore prefix:

| AI System | File | Generation Method |
|-----------|------|-------------------|
| Claude | `_claude.tsx` | Write directly (native design system awareness) |
| OpenAI (GPT-4o) | `_codex.tsx` | API call with design system prompt |
| Gemini | `_gemini.tsx` | API call with design system prompt |

**Prompt template for external AI** must include:
- Available components: `Badge`, `Button`, `Card` (CardHeader, CardTitle, CardDescription, CardContent), `Input` — all from `@/components/ui/`
- Available icons: from `lucide-react`
- Badge variants: `default`, `secondary`, `destructive`, `outline`, `success`, `warning`
- Rule: Use ONLY design system tokens (`text-foreground`, `bg-muted`, etc.) — NEVER raw Tailwind colors
- Rule: No `font-bold`/`font-semibold` on heading elements (h1-h6)
- Rule: Export default function with variation name suffix (e.g., `OrdersClaudeVariation`)
- Mock data: Include the shared mock data in the prompt
- Language: Specify target language (e.g., German)

### Step 3: Quality Gate

Check each generated variation for:
1. No raw Tailwind colors (`text-gray-*`, `bg-blue-*` etc.)
2. No `font-bold`/`font-semibold` on h1-h6 elements
3. Consistent target language
4. Proper imports from `@/components/ui/` (not from external libraries)
5. Same mock data across all variations
6. Valid Badge variant values

### Step 4: Wrap in Tabs

Create `page.tsx` that imports all variations and wraps them in Tabs:

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ClaudeVariation from './_claude';
import CodexVariation from './_codex';
import GeminiVariation from './_gemini';

export default function Page() {
  return (
    <Tabs defaultValue="claude">
      <TabsList>
        <TabsTrigger value="claude">Claude</TabsTrigger>
        <TabsTrigger value="codex">Codex</TabsTrigger>
        <TabsTrigger value="gemini">Gemini</TabsTrigger>
      </TabsList>
      <TabsContent value="claude"><ClaudeVariation /></TabsContent>
      <TabsContent value="codex"><CodexVariation /></TabsContent>
      <TabsContent value="gemini"><GeminiVariation /></TabsContent>
    </Tabs>
  );
}
```

### Step 5: Consolidate

After stakeholder review:
1. Pick the best design (or combine best elements)
2. Create final `page.tsx` with the chosen design
3. Delete variation files (`_claude.tsx`, `_codex.tsx`, `_gemini.tsx`)
4. Remove Tabs wrapper

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

## Base → Fork Workflow (CRITICAL)

**Universal fixes go in the BASE TEMPLATE, never in client forks.**

### What Goes Where

| Change Type | Where | Example |
|-------------|-------|---------|
| Bug fix in a component | BASE | cursor-pointer on buttons |
| CSS reset / base layer rule | BASE | interactive element cursor rule |
| New component | BASE | adding a table component |
| Tailwind theme structure | BASE | @theme inline token mapping |
| Brand colors/fonts | FORK | brand.css, layout.tsx fonts |
| CI-specific content | FORK | German page content, CI font files |
| Brand-specific @theme tokens | FORK | CI color tokens in globals.css |

### Correct Flow

```
1. Fix in BASE template → commit → push
2. In FORK: git fetch upstream && git rebase upstream/main
3. Resolve conflicts keeping fork's brand-specific overrides
4. Push fork (force if needed after rebase)
```

### Anti-Pattern (NEVER DO THIS)

```
❌ Fix bug in the fork only
❌ Fix bug in both repos independently
❌ Add universal features to fork without also adding to base
```

### Upstream Remote Setup

Every fork should have the base template as `upstream`:
```bash
git remote add upstream https://github.com/sftmlg/design-system-template.git
```
