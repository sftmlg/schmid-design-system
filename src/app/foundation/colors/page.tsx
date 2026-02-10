'use client';

import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/docs/section';
import { ComponentPreview } from '@/components/docs/component-preview';
import { CodeBlock } from '@/components/docs/code-block';
import { useEffect, useState } from 'react';

interface ColorSwatch {
	name: string;
	variable: string;
	value: string;
}

const colorVars = [
	{ name: 'Primary', variable: '--primary', group: 'brand' },
	{ name: 'Primary Foreground', variable: '--primary-foreground', group: 'brand' },
	{ name: 'Secondary', variable: '--secondary', group: 'brand' },
	{ name: 'Secondary Foreground', variable: '--secondary-foreground', group: 'brand' },
	{ name: 'Accent', variable: '--accent', group: 'brand' },
	{ name: 'Accent Foreground', variable: '--accent-foreground', group: 'brand' },
	{ name: 'Background', variable: '--background', group: 'ui' },
	{ name: 'Foreground', variable: '--foreground', group: 'ui' },
	{ name: 'Card', variable: '--card', group: 'ui' },
	{ name: 'Card Foreground', variable: '--card-foreground', group: 'ui' },
	{ name: 'Muted', variable: '--muted', group: 'ui' },
	{ name: 'Muted Foreground', variable: '--muted-foreground', group: 'ui' },
	{ name: 'Popover', variable: '--popover', group: 'ui' },
	{ name: 'Popover Foreground', variable: '--popover-foreground', group: 'ui' },
	{ name: 'Destructive', variable: '--destructive', group: 'semantic' },
	{ name: 'Destructive Foreground', variable: '--destructive-foreground', group: 'semantic' },
	{ name: 'Success', variable: '--success', group: 'semantic' },
	{ name: 'Success Foreground', variable: '--success-foreground', group: 'semantic' },
	{ name: 'Warning', variable: '--warning', group: 'semantic' },
	{ name: 'Warning Foreground', variable: '--warning-foreground', group: 'semantic' },
	{ name: 'Border', variable: '--border', group: 'chrome' },
	{ name: 'Input', variable: '--input', group: 'chrome' },
	{ name: 'Ring', variable: '--ring', group: 'chrome' },
];

function ColorSwatchCard({ name, variable, size = 'md' }: { name: string; variable: string; size?: 'sm' | 'md' | 'lg' }) {
	const [computedValue, setComputedValue] = useState('');

	useEffect(() => {
		const val = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
		setComputedValue(val);
	}, [variable]);

	const heights = { sm: 'h-16', md: 'h-20', lg: 'h-24' };

	return (
		<div className="space-y-2">
			<div
				className={`${heights[size]} w-full rounded-lg border border-border shadow-sm`}
				style={{ backgroundColor: `var(${variable})` }}
			/>
			<div className="space-y-1">
				<p className="font-medium text-sm">{name}</p>
				<p className="font-mono text-xs text-muted-foreground">{variable}</p>
				{computedValue && (
					<p className="font-mono text-xs text-muted-foreground">{computedValue}</p>
				)}
			</div>
		</div>
	);
}

export default function ColorsPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Colors"
				description="Color palette system using CSS variables for dynamic theming."
				badge="Foundation"
			/>

			<Section id="brand-colors" title="Brand Colors">
				<ComponentPreview>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{colorVars
							.filter((c) => c.group === 'brand' && !c.name.includes('Foreground'))
							.map((color) => (
								<ColorSwatchCard key={color.variable} name={color.name} variable={color.variable} size="lg" />
							))}
					</div>
					<div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
						{colorVars
							.filter((c) => c.group === 'brand' && c.name.includes('Foreground'))
							.map((color) => (
								<ColorSwatchCard key={color.variable} name={color.name} variable={color.variable} size="sm" />
							))}
					</div>
				</ComponentPreview>
			</Section>

			<Section id="ui-colors" title="UI Colors">
				<ComponentPreview>
					<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
						{colorVars
							.filter((c) => c.group === 'ui')
							.map((color) => (
								<ColorSwatchCard key={color.variable} name={color.name} variable={color.variable} size="sm" />
							))}
					</div>
				</ComponentPreview>
			</Section>

			<Section id="semantic-colors" title="Semantic Colors">
				<ComponentPreview>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{colorVars
							.filter((c) => c.group === 'semantic' && !c.name.includes('Foreground'))
							.map((color) => (
								<ColorSwatchCard key={color.variable} name={color.name} variable={color.variable} />
							))}
					</div>
					<div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
						{colorVars
							.filter((c) => c.group === 'semantic' && c.name.includes('Foreground'))
							.map((color) => (
								<ColorSwatchCard key={color.variable} name={color.name} variable={color.variable} size="sm" />
							))}
					</div>
				</ComponentPreview>
			</Section>

			<Section id="border-ring" title="Border & Ring">
				<ComponentPreview>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{colorVars
							.filter((c) => c.group === 'chrome')
							.map((color) => (
								<ColorSwatchCard key={color.variable} name={color.name} variable={color.variable} size="sm" />
							))}
					</div>
				</ComponentPreview>

				<CodeBlock
					title="CSS Variables (brand.css)"
					language="css"
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
