import { ArrowRight, Download, Loader2, Mail, Plus } from 'lucide-react';
import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';

export default function ButtonsPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Buttons"
				description="Button components with variants, sizes, states, and icon support."
				badge="Components"
			/>

			<Section id="variants" title="Variants">
				<ComponentPreview>
					<div className="flex flex-wrap items-center gap-4">
						<Button variant="default">Default</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="destructive">Destructive</Button>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Variants"
					code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}
				/>
			</Section>

			<Section id="sizes" title="Sizes">
				<ComponentPreview>
					<div className="flex flex-wrap items-center gap-4">
						<Button size="sm">Small</Button>
						<Button size="default">Default</Button>
						<Button size="lg">Large</Button>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Sizes"
					code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
				/>
			</Section>

			<Section id="with-icons" title="With Icons">
				<ComponentPreview>
					<div className="flex flex-wrap items-center gap-4">
						<Button>
							<Plus className="h-4 w-4" />
							Add Item
						</Button>
						<Button variant="outline">
							Continue
							<ArrowRight className="h-4 w-4" />
						</Button>
						<Button size="icon" variant="ghost">
							<Mail className="h-4 w-4" />
						</Button>
						<Button variant="secondary">
							<Download className="h-4 w-4" />
							Download
						</Button>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="With Icons"
					code={`import { Plus, ArrowRight, Mail, Download } from 'lucide-react';

// Icon before text
<Button>
  <Plus className="h-4 w-4" />
  Add Item
</Button>

// Icon after text
<Button variant="outline">
  Continue
  <ArrowRight className="h-4 w-4" />
</Button>

// Icon only
<Button size="icon" variant="ghost">
  <Mail className="h-4 w-4" />
</Button>`}
				/>
			</Section>

			<Section id="states" title="States">
				<ComponentPreview>
					<div className="flex flex-wrap items-center gap-4">
						<Button>Normal</Button>
						<Button disabled>Disabled</Button>
						<Button>
							<Loader2 className="h-4 w-4 animate-spin" />
							Loading
						</Button>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="States"
					code={`// Disabled state
<Button disabled>Disabled</Button>

// Loading state
<Button>
  <Loader2 className="h-4 w-4 animate-spin" />
  Loading
</Button>`}
				/>
			</Section>

			<Section id="examples" title="Common Examples">
				<ComponentPreview>
					<div className="space-y-4">
						<div className="flex flex-wrap gap-2">
							<Button variant="default" size="sm">
								Save Changes
							</Button>
							<Button variant="outline" size="sm">
								Cancel
							</Button>
						</div>
						<div className="flex flex-wrap gap-2">
							<Button variant="destructive">
								<Loader2 className="h-4 w-4 animate-spin" />
								Deleting...
							</Button>
						</div>
						<div className="flex flex-wrap gap-2">
							<Button size="lg">
								<Plus className="h-5 w-5" />
								Create New Project
							</Button>
						</div>
					</div>
				</ComponentPreview>
			</Section>
		</div>
	);
}
