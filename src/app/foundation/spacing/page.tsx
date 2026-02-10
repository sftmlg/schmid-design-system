import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/docs/section';
import { ComponentPreview } from '@/components/docs/component-preview';
import { CodeBlock } from '@/components/docs/code-block';

export default function SpacingPage() {
	const spacingScale = [
		{ size: '4px', class: 'gap-1', value: 1 },
		{ size: '8px', class: 'gap-2', value: 2 },
		{ size: '12px', class: 'gap-3', value: 3 },
		{ size: '16px', class: 'gap-4', value: 4 },
		{ size: '20px', class: 'gap-5', value: 5 },
		{ size: '24px', class: 'gap-6', value: 6 },
		{ size: '32px', class: 'gap-8', value: 8 },
		{ size: '40px', class: 'gap-10', value: 10 },
		{ size: '48px', class: 'gap-12', value: 12 },
		{ size: '64px', class: 'gap-16', value: 16 },
	];

	return (
		<div className='container mx-auto max-w-5xl py-8'>
			<PageHeader
				title='Spacing'
				description='Spacing scale, layout tokens, border radius, and shadows.'
				badge='Foundation'
			/>

			<Section id='spacing-scale' title='Spacing Scale'>
				<ComponentPreview>
					<div className='space-y-4'>
						{spacingScale.map((space) => (
							<div key={space.size} className='flex items-center gap-4'>
								<div className='w-16 text-sm text-muted-foreground'>
									{space.size}
								</div>
								<div
									className='h-8 rounded bg-primary'
									style={{ width: space.size }}
								/>
								<div className='font-mono text-sm text-muted-foreground'>
									{space.class}
								</div>
							</div>
						))}
					</div>
				</ComponentPreview>

				<CodeBlock
					title='Usage'
					code={`// Padding
<div className="p-4">Content with 16px padding</div>

// Margin
<div className="mb-6">Content with 24px bottom margin</div>

// Gap (flexbox/grid)
<div className="flex gap-4">Flex with 16px gap</div>
<div className="grid grid-cols-3 gap-6">Grid with 24px gap</div>`}
				/>
			</Section>

			<Section id='border-radius' title='Border Radius'>
				<ComponentPreview>
					<div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
						<div className='space-y-2'>
							<div className='flex h-24 items-center justify-center rounded-sm border-2 border-primary bg-primary/10'>
								<span className='font-mono text-sm'>sm</span>
							</div>
							<p className='text-center text-sm text-muted-foreground'>
								rounded-sm · 2px
							</p>
						</div>
						<div className='space-y-2'>
							<div className='flex h-24 items-center justify-center rounded-md border-2 border-primary bg-primary/10'>
								<span className='font-mono text-sm'>md</span>
							</div>
							<p className='text-center text-sm text-muted-foreground'>
								rounded-md · 6px
							</p>
						</div>
						<div className='space-y-2'>
							<div className='flex h-24 items-center justify-center rounded-lg border-2 border-primary bg-primary/10'>
								<span className='font-mono text-sm'>lg</span>
							</div>
							<p className='text-center text-sm text-muted-foreground'>
								rounded-lg · 8px
							</p>
						</div>
						<div className='space-y-2'>
							<div className='flex h-24 items-center justify-center rounded-xl border-2 border-primary bg-primary/10'>
								<span className='font-mono text-sm'>xl</span>
							</div>
							<p className='text-center text-sm text-muted-foreground'>
								rounded-xl · 12px
							</p>
						</div>
					</div>
				</ComponentPreview>
			</Section>

			<Section id='shadows' title='Shadows'>
				<ComponentPreview>
					<div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
						<div className='space-y-2'>
							<div className='flex h-24 items-center justify-center rounded-lg bg-card shadow-sm'>
								<span className='font-mono text-sm'>sm</span>
							</div>
							<p className='text-center text-sm text-muted-foreground'>
								shadow-sm
							</p>
						</div>
						<div className='space-y-2'>
							<div className='flex h-24 items-center justify-center rounded-lg bg-card shadow'>
								<span className='font-mono text-sm'>default</span>
							</div>
							<p className='text-center text-sm text-muted-foreground'>
								shadow
							</p>
						</div>
						<div className='space-y-2'>
							<div className='flex h-24 items-center justify-center rounded-lg bg-card shadow-md'>
								<span className='font-mono text-sm'>md</span>
							</div>
							<p className='text-center text-sm text-muted-foreground'>
								shadow-md
							</p>
						</div>
						<div className='space-y-2'>
							<div className='flex h-24 items-center justify-center rounded-lg bg-card shadow-lg'>
								<span className='font-mono text-sm'>lg</span>
							</div>
							<p className='text-center text-sm text-muted-foreground'>
								shadow-lg
							</p>
						</div>
					</div>
				</ComponentPreview>

				<CodeBlock
					title='Usage'
					code={`// Border radius
<div className="rounded-sm">Small radius (2px)</div>
<div className="rounded-md">Medium radius (6px)</div>
<div className="rounded-lg">Large radius (8px)</div>

// Shadows
<div className="shadow-sm">Subtle shadow</div>
<div className="shadow">Default shadow</div>
<div className="shadow-md">Medium shadow</div>
<div className="shadow-lg">Large shadow</div>`}
				/>
			</Section>
		</div>
	);
}
