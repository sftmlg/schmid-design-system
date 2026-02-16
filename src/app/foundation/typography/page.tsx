import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';

export default function TypographyPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Typography"
				description="Font families, heading hierarchy, body text styles, and type scale."
				badge="Foundation"
			/>

			<Section id="font-families" title="Font Families">
				<ComponentPreview>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="space-y-3">
							<p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								Heading
							</p>
							<p className="text-4xl font-bold">Inter</p>
							<p className="text-sm text-muted-foreground">
								Default · Configurable via --font-heading
							</p>
						</div>
						<div className="space-y-3">
							<p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								Body
							</p>
							<p className="text-4xl">Inter</p>
							<p className="text-sm text-muted-foreground">
								Default · Configurable via --font-body
							</p>
						</div>
						<div className="space-y-3">
							<p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								Code
							</p>
							<p className="text-4xl font-mono">JetBrains Mono</p>
							<p className="text-sm text-muted-foreground">Google Fonts</p>
						</div>
					</div>
				</ComponentPreview>
			</Section>

			<Section id="heading-elements" title="Heading Elements">
				<ComponentPreview>
					<div className="space-y-6">
						<div className="space-y-1">
							<h1 className="text-5xl tracking-tight">The quick brown fox</h1>
							<p className="text-sm text-muted-foreground">
								H1 - Display Large · 48px · 700 · -0.02em
							</p>
						</div>
						<div className="space-y-1">
							<h2 className="text-4xl tracking-tight">The quick brown fox</h2>
							<p className="text-sm text-muted-foreground">H2 - Display · 36px · 700 · -0.02em</p>
						</div>
						<div className="space-y-1">
							<h3 className="text-3xl tracking-tight">The quick brown fox</h3>
							<p className="text-sm text-muted-foreground">
								H3 - Heading 1 · 30px · 600 · -0.015em
							</p>
						</div>
						<div className="space-y-1">
							<h4 className="text-2xl tracking-tight">The quick brown fox</h4>
							<p className="text-sm text-muted-foreground">H4 - Heading 2 · 24px · 600 · -0.01em</p>
						</div>
						<div className="space-y-1">
							<h5 className="text-xl tracking-tight">The quick brown fox</h5>
							<p className="text-sm text-muted-foreground">H5 - Heading 3 · 20px · 600 · -0.01em</p>
						</div>
						<div className="space-y-1">
							<h6 className="text-lg tracking-tight">The quick brown fox</h6>
							<p className="text-sm text-muted-foreground">H6 - Heading 4 · 18px · 600 · normal</p>
						</div>
					</div>
				</ComponentPreview>
			</Section>

			<Section id="body-text" title="Body Text">
				<ComponentPreview>
					<div className="space-y-6">
						<div className="space-y-2">
							<p className="text-xl">
								Body Extra Large - The quick brown fox jumps over the lazy dog. This text
								demonstrates the base reading experience for large body content.
							</p>
							<p className="text-sm text-muted-foreground">text-xl · 20px · 400 · 1.7</p>
						</div>
						<div className="space-y-2">
							<p className="text-lg">
								Body Large - The quick brown fox jumps over the lazy dog. This text demonstrates the
								base reading experience for emphasized body content.
							</p>
							<p className="text-sm text-muted-foreground">text-lg · 18px · 400 · 1.6</p>
						</div>
						<div className="space-y-2">
							<p className="text-base">
								Body - The quick brown fox jumps over the lazy dog. This text demonstrates the base
								reading experience for standard body content and paragraphs.
							</p>
							<p className="text-sm text-muted-foreground">text-base · 16px · 400 · 1.6</p>
						</div>
						<div className="space-y-2">
							<p className="text-sm">
								Body Small - The quick brown fox jumps over the lazy dog. This text is used for
								supporting information and secondary content.
							</p>
							<p className="text-sm text-muted-foreground">text-sm · 14px · 400 · 1.5</p>
						</div>
						<div className="space-y-2">
							<p className="text-xs">
								Body Extra Small - The quick brown fox jumps over the lazy dog. This text is used
								for captions and labels.
							</p>
							<p className="text-sm text-muted-foreground">text-xs · 12px · 400 · 1.5</p>
						</div>
					</div>
				</ComponentPreview>
			</Section>

			<Section id="font-weights" title="Font Weights">
				<ComponentPreview>
					<div className="space-y-4">
						<div className="flex items-center gap-4">
							<span className="w-20 text-sm text-muted-foreground">Light</span>
							<p className="flex-1 font-light">The quick brown fox jumps over the lazy dog</p>
							<span className="text-sm text-muted-foreground">300</span>
						</div>
						<div className="flex items-center gap-4">
							<span className="w-20 text-sm text-muted-foreground">Regular</span>
							<p className="flex-1 font-normal">The quick brown fox jumps over the lazy dog</p>
							<span className="text-sm text-muted-foreground">400</span>
						</div>
						<div className="flex items-center gap-4">
							<span className="w-20 text-sm text-muted-foreground">Medium</span>
							<p className="flex-1 font-medium">The quick brown fox jumps over the lazy dog</p>
							<span className="text-sm text-muted-foreground">500</span>
						</div>
						<div className="flex items-center gap-4">
							<span className="w-20 text-sm text-muted-foreground">Semibold</span>
							<p className="flex-1 font-semibold">The quick brown fox jumps over the lazy dog</p>
							<span className="text-sm text-muted-foreground">600</span>
						</div>
						<div className="flex items-center gap-4">
							<span className="w-20 text-sm text-muted-foreground">Bold</span>
							<p className="flex-1 font-bold">The quick brown fox jumps over the lazy dog</p>
							<span className="text-sm text-muted-foreground">700</span>
						</div>
					</div>
				</ComponentPreview>
			</Section>

			<Section id="code-font" title="Code Font">
				<ComponentPreview>
					<div className="space-y-4">
						<p className="font-mono text-sm">The quick brown fox jumps over the lazy dog</p>
						<div className="rounded-md bg-muted p-4">
							<code className="font-mono text-sm">
								{`const greeting = 'Hello, World!';\nconsole.log(greeting);`}
							</code>
						</div>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Usage"
					code={`// Headings (use --font-heading from brand.css)
<h1 className="text-5xl tracking-tight">Display Large</h1>
<h2 className="text-4xl tracking-tight">Display</h2>
<h3 className="text-3xl tracking-tight">Heading 1</h3>

// Body text (uses --font-body from brand.css)
<p className="text-base">Standard paragraph text</p>
<p className="text-sm">Small supporting text</p>

// Code
<code className="font-mono text-sm">Inline code</code>`}
				/>
			</Section>
		</div>
	);
}
