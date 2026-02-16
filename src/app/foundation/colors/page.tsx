'use client';

import { useEffect, useState } from 'react';
import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';

/* ────────────────────────────────────────────────
 * Color Hierarchy Architecture
 *
 * This page is structured as a layered hierarchy to prevent duplication:
 *
 * Layer 0: CI Palette    — raw brand colors (Schmid Busreisen only)
 * Layer 1: Brand Tokens  — primary, secondary, accent (defined ONCE)
 * Layer 2: Surfaces      — background/foreground pairs (derived from brand or independent)
 * Layer 3: Semantic       — destructive, success, warning (independent)
 * Layer 4: Chrome        — border, input, ring (utility)
 *
 * The CI Palette section shows the raw corporate identity colors exactly once,
 * with both hex and oklch values for reference.
 * ──────────────────────────────────────────────── */

/* CI Palette — raw brand colors from corporate identity */
const ciPalette = [
	{
		group: 'Burgundy Family',
		colors: [
			{
				name: 'Burgundy',
				variable: '--brand-burgundy',
				hex: '#ac031c',
				usage: 'Primary brand red',
			},
			{
				name: 'Dark Burgundy',
				variable: '--brand-burgundy-dark',
				hex: '#ad1730',
				usage: 'Interactive states',
			},
			{
				name: 'Light Burgundy',
				variable: '--brand-burgundy-light',
				hex: '#c5271a',
				usage: 'Accents',
			},
		],
	},
	{
		group: 'Neutrals',
		colors: [
			{ name: 'Charcoal', variable: '--brand-charcoal', hex: '#22272a', usage: 'Text, footer' },
			{ name: 'Medium Gray', variable: '--brand-gray', hex: '#666666', usage: 'Secondary text' },
			{ name: 'Mint', variable: '--brand-mint', hex: '#f2f8f7', usage: 'Light background' },
			{
				name: 'Light Gray',
				variable: '--brand-light-gray',
				hex: '#d9d9d7',
				usage: 'Button backgrounds',
			},
			{
				name: 'Off-White',
				variable: '--brand-off-white',
				hex: '#eeedeb',
				usage: 'Section backgrounds',
			},
		],
	},
	{
		group: 'Sub-brand Accents',
		colors: [
			{ name: 'Olive', variable: '--brand-olive', hex: '#948b6b', usage: 'E5 Hiking' },
			{ name: 'Blue', variable: '--brand-blue', hex: '#147fa9', usage: 'E5 Accent' },
		],
	},
];

/* Brand tokens — the core identity colors */
const brandColors = [
	{ name: 'Primary', variable: '--primary', usage: 'Main actions, buttons, sidebar' },
	{ name: 'Secondary', variable: '--secondary', usage: 'Secondary actions, accents' },
	{ name: 'Accent', variable: '--accent', usage: 'Highlights, links, focus rings' },
];

/* Surface derivation: shows which tokens share values */
const surfaceMapping = [
	{ role: 'Page', bgVar: '--background', fgVar: '--foreground', derived: 'Independent' },
	{ role: 'Card', bgVar: '--card', fgVar: '--card-foreground', derived: 'Same as page' },
	{ role: 'Muted', bgVar: '--muted', fgVar: '--muted-foreground', derived: 'Independent' },
	{ role: 'Popover', bgVar: '--popover', fgVar: '--popover-foreground', derived: 'Same as page' },
];

/* Semantic colors — independent of brand palette */
const semanticColors = [
	{
		name: 'Destructive',
		variable: '--destructive',
		fgVar: '--destructive-foreground',
		usage: 'Errors, delete actions',
	},
	{
		name: 'Success',
		variable: '--success',
		fgVar: '--success-foreground',
		usage: 'Completed, confirmed',
	},
	{
		name: 'Warning',
		variable: '--warning',
		fgVar: '--warning-foreground',
		usage: 'Caution, overdue',
	},
];

/* Chrome — border/input/ring */
const chromeColors = [
	{ name: 'Border', variable: '--border' },
	{ name: 'Input', variable: '--input' },
	{ name: 'Ring', variable: '--ring' },
];

/* ──────────────────────────── Components ──────────────────────────── */

function ColorSwatch({ variable, size = 'md' }: { variable: string; size?: 'sm' | 'md' | 'lg' }) {
	const [computed, setComputed] = useState('');

	useEffect(() => {
		const val = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
		setComputed(val);
	}, [variable]);

	const heights = { sm: 'h-12', md: 'h-16', lg: 'h-20' };

	return (
		<div className="space-y-1.5">
			<div
				className={`${heights[size]} w-full rounded-lg border border-border shadow-sm`}
				style={{ backgroundColor: `var(${variable})` }}
			/>
			<p className="font-mono text-xs text-muted-foreground">{variable}</p>
			{computed && <p className="font-mono text-xs text-muted-foreground truncate">{computed}</p>}
		</div>
	);
}

function PairedSwatch({
	name,
	bgVar,
	fgVar,
	usage,
}: {
	name: string;
	bgVar: string;
	fgVar: string;
	usage: string;
}) {
	return (
		<div className="space-y-1.5">
			<div
				className="h-16 w-full rounded-lg border border-border shadow-sm flex items-center justify-center px-4"
				style={{ backgroundColor: `var(${bgVar})`, color: `var(${fgVar})` }}
			>
				<span className="text-sm font-medium truncate">{name}</span>
			</div>
			<p className="font-mono text-xs text-muted-foreground">{bgVar}</p>
			<p className="text-xs text-muted-foreground">{usage}</p>
		</div>
	);
}

function CIColorCard({
	name,
	variable,
	hex,
	usage,
}: {
	name: string;
	variable: string;
	hex: string;
	usage: string;
}) {
	const [computed, setComputed] = useState('');

	useEffect(() => {
		const val = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
		setComputed(val);
	}, [variable]);

	return (
		<div className="space-y-2">
			<div
				className="h-20 w-full rounded-lg border border-border shadow-sm"
				style={{ backgroundColor: `var(${variable})` }}
			/>
			<div className="space-y-0.5">
				<p className="text-sm font-medium">{name}</p>
				<p className="font-mono text-xs text-muted-foreground">{hex}</p>
				<p className="font-mono text-xs text-muted-foreground">{variable}</p>
				{computed && <p className="font-mono text-xs text-muted-foreground truncate">{computed}</p>}
				<p className="text-xs text-muted-foreground">{usage}</p>
			</div>
		</div>
	);
}

/* ──────────────────────────── Page ──────────────────────────── */

export default function ColorsPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Colors"
				description="Color token system using CSS variables. All colors defined once in brand.css — no duplication."
				badge="Foundation"
			/>

			{/* ── Section 0: CI Palette ── */}
			<Section id="ci-palette" title="CI Palette">
				<p className="text-sm text-muted-foreground">
					Raw brand colors from Schmid Reisen corporate identity. These are the source colors — all
					UI tokens below are derived from these values.
				</p>
				{ciPalette.map((group) => (
					<div key={group.group} className="mt-6">
						<h3 className="text-sm font-medium mb-3">{group.group}</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
							{group.colors.map((color) => (
								<CIColorCard key={color.variable} {...color} />
							))}
						</div>
					</div>
				))}
			</Section>

			{/* ── Section 1: Brand Colors ── */}
			<Section id="brand-colors" title="Brand Colors">
				<p className="text-sm text-muted-foreground">
					Core identity colors. When forking, replace these in{' '}
					<code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">brand.css</code> with
					the client's CI palette.
				</p>
				<ComponentPreview>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{brandColors.map((c) => (
							<div key={c.variable} className="space-y-1.5">
								<ColorSwatch variable={c.variable} size="lg" />
								<p className="text-sm font-medium">{c.name}</p>
								<p className="text-xs text-muted-foreground">{c.usage}</p>
							</div>
						))}
					</div>
					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
						{brandColors.map((c) => {
							const fgVar = `${c.variable}-foreground`;
							return (
								<div key={fgVar} className="space-y-1.5">
									<div
										className="h-12 w-full rounded-lg border border-border shadow-sm flex items-center justify-center px-4"
										style={{ backgroundColor: `var(${c.variable})`, color: `var(${fgVar})` }}
									>
										<span className="text-sm font-medium truncate">{c.name} text on bg</span>
									</div>
									<p className="font-mono text-xs text-muted-foreground">{fgVar}</p>
								</div>
							);
						})}
					</div>
				</ComponentPreview>
			</Section>

			{/* ── Section 2: Surfaces ── */}
			<Section id="surfaces" title="Surfaces">
				<p className="text-sm text-muted-foreground">
					Background/foreground pairs for UI layers. Card and popover share page colors by default.
				</p>
				<ComponentPreview>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{surfaceMapping.map((s) => (
							<PairedSwatch
								key={s.bgVar}
								name={s.role}
								bgVar={s.bgVar}
								fgVar={s.fgVar}
								usage={s.derived}
							/>
						))}
					</div>
				</ComponentPreview>
			</Section>

			{/* ── Section 3: Semantic Colors ── */}
			<Section id="semantic" title="Semantic Colors">
				<p className="text-sm text-muted-foreground">
					Independent of brand palette — for status, feedback, and actions.
				</p>
				<ComponentPreview>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{semanticColors.map((c) => (
							<PairedSwatch
								key={c.variable}
								name={c.name}
								bgVar={c.variable}
								fgVar={c.fgVar}
								usage={c.usage}
							/>
						))}
					</div>
				</ComponentPreview>
			</Section>

			{/* ── Section 4: Chrome ── */}
			<Section id="chrome" title="Border & Ring">
				<ComponentPreview>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{chromeColors.map((c) => (
							<ColorSwatch key={c.variable} variable={c.variable} size="sm" />
						))}
					</div>
				</ComponentPreview>
			</Section>

			{/* ── Section 5: Code Reference ── */}
			<Section id="code" title="CSS Variables (brand.css)">
				<p className="text-sm text-muted-foreground">
					Full token definition. To rebrand: replace{' '}
					<code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
						src/app/brand.css
					</code>
					.
				</p>
				<CodeBlock
					title="brand.css — Default Neutral Theme"
					code={`:root {
  /* Core Brand */
  --primary: oklch(0.37 0.07 260);
  --primary-foreground: oklch(0.98 0 0);
  --secondary: oklch(0.96 0.005 260);
  --accent: oklch(0.96 0.005 260);

  /* Surfaces */
  --background: oklch(1 0 0);
  --foreground: oklch(0.14 0.005 285);
  --card: oklch(1 0 0);
  --muted: oklch(0.97 0.001 286);

  /* Semantic */
  --destructive: oklch(0.58 0.22 29);
  --success: oklch(0.65 0.17 162);
  --warning: oklch(0.75 0.18 85);

  /* Chrome */
  --border: oklch(0.92 0.004 286);
  --ring: oklch(0.37 0.07 260);
  --radius: 0.625rem;
}`}
				/>
			</Section>
		</div>
	);
}
