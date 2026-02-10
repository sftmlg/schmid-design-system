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

export default function ColorsPage() {
	const [colors, setColors] = useState<ColorSwatch[]>([]);

	useEffect(() => {
		const root = document.documentElement;
		const computedStyle = getComputedStyle(root);

		const colorVars = [
			{ name: 'Primary', variable: '--primary' },
			{ name: 'Primary Foreground', variable: '--primary-foreground' },
			{ name: 'Secondary', variable: '--secondary' },
			{ name: 'Secondary Foreground', variable: '--secondary-foreground' },
			{ name: 'Accent', variable: '--accent' },
			{ name: 'Accent Foreground', variable: '--accent-foreground' },
			{ name: 'Background', variable: '--background' },
			{ name: 'Foreground', variable: '--foreground' },
			{ name: 'Card', variable: '--card' },
			{ name: 'Card Foreground', variable: '--card-foreground' },
			{ name: 'Muted', variable: '--muted' },
			{ name: 'Muted Foreground', variable: '--muted-foreground' },
			{ name: 'Popover', variable: '--popover' },
			{ name: 'Popover Foreground', variable: '--popover-foreground' },
			{ name: 'Destructive', variable: '--destructive' },
			{ name: 'Destructive Foreground', variable: '--destructive-foreground' },
			{ name: 'Border', variable: '--border' },
			{ name: 'Input', variable: '--input' },
			{ name: 'Ring', variable: '--ring' },
		];

		const resolved = colorVars.map((cv) => ({
			...cv,
			value: computedStyle.getPropertyValue(cv.variable).trim(),
		}));

		setColors(resolved);
	}, []);

	return (
		<div className='container mx-auto max-w-5xl py-8'>
			<PageHeader
				title='Colors'
				description='Color palette system using CSS variables for dynamic theming.'
				badge='Foundation'
			/>

			<Section id='brand-colors' title='Brand Colors'>
				<ComponentPreview>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
						{colors
							.filter((c) =>
								['Primary', 'Secondary', 'Accent'].includes(c.name),
							)
							.map((color) => (
								<div key={color.name} className='space-y-2'>
									<div
										className='h-24 w-full rounded-lg border border-border shadow-sm'
										style={{ backgroundColor: `hsl(${color.value})` }}
									/>
									<div className='space-y-1'>
										<p className='font-medium'>{color.name}</p>
										<p className='font-mono text-xs text-muted-foreground'>
											{color.variable}
										</p>
										<p className='font-mono text-xs text-muted-foreground'>
											{color.value}
										</p>
									</div>
								</div>
							))}
					</div>
				</ComponentPreview>
			</Section>

			<Section id='ui-colors' title='UI Colors'>
				<ComponentPreview>
					<div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
						{colors
							.filter((c) =>
								[
									'Background',
									'Foreground',
									'Card',
									'Card Foreground',
									'Muted',
									'Muted Foreground',
									'Popover',
									'Popover Foreground',
								].includes(c.name),
							)
							.map((color) => (
								<div key={color.name} className='space-y-2'>
									<div
										className='h-16 w-full rounded-md border border-border'
										style={{ backgroundColor: `hsl(${color.value})` }}
									/>
									<div className='space-y-0.5'>
										<p className='text-sm font-medium'>{color.name}</p>
										<p className='font-mono text-xs text-muted-foreground'>
											{color.variable}
										</p>
									</div>
								</div>
							))}
					</div>
				</ComponentPreview>
			</Section>

			<Section id='semantic-colors' title='Semantic Colors'>
				<ComponentPreview>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
						{colors
							.filter((c) =>
								['Destructive', 'Destructive Foreground'].includes(c.name),
							)
							.map((color) => (
								<div key={color.name} className='space-y-2'>
									<div
										className='h-20 w-full rounded-lg border border-border shadow-sm'
										style={{ backgroundColor: `hsl(${color.value})` }}
									/>
									<div className='space-y-1'>
										<p className='font-medium'>{color.name}</p>
										<p className='font-mono text-xs text-muted-foreground'>
											{color.variable}
										</p>
										<p className='font-mono text-xs text-muted-foreground'>
											{color.value}
										</p>
									</div>
								</div>
							))}
					</div>
				</ComponentPreview>
			</Section>

			<Section id='border-ring' title='Border & Ring'>
				<ComponentPreview>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
						{colors
							.filter((c) => ['Border', 'Input', 'Ring'].includes(c.name))
							.map((color) => (
								<div key={color.name} className='space-y-2'>
									<div
										className='h-16 w-full rounded-md border border-border'
										style={{ backgroundColor: `hsl(${color.value})` }}
									/>
									<div className='space-y-1'>
										<p className='font-medium'>{color.name}</p>
										<p className='font-mono text-xs text-muted-foreground'>
											{color.variable}
										</p>
										<p className='font-mono text-xs text-muted-foreground'>
											{color.value}
										</p>
									</div>
								</div>
							))}
					</div>
				</ComponentPreview>

				<CodeBlock
					title='CSS Variables'
					language='css'
					code={`:root {
  --primary: 222 47% 11%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222 47% 11%;
  --accent: 210 40% 96%;
  --accent-foreground: 222 47% 11%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 210 40% 98%;
  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 222 47% 11%;
}`}
				/>
			</Section>
		</div>
	);
}
