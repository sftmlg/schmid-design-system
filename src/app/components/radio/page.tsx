import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';
import { Radio } from '@/components/ui/radio';

export default function RadioPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Radio"
				description="Radio buttons allow users to select a single option from a set of mutually exclusive choices."
				badge="Components"
			/>

			<Section id="basic" title="Basic Radio">
				<p className="text-sm text-muted-foreground">A single radio button with optional label.</p>
				<ComponentPreview>
					<div className="flex flex-col gap-4">
						<Radio label="Option 1" name="example1" value="option1" defaultChecked />
						<Radio label="Option 2" name="example1" value="option2" />
					</div>
				</ComponentPreview>
				<CodeBlock
					code={`import { Radio } from '@/components/ui/radio';

<Radio label="Option 1" name="example" value="option1" defaultChecked />
<Radio label="Option 2" name="example" value="option2" />`}
				/>
			</Section>

			<Section id="group" title="Radio Group">
				<p className="text-sm text-muted-foreground">
					Multiple radio buttons grouped together with the same name.
				</p>
				<ComponentPreview>
					<div className="flex flex-col gap-3">
						<Radio label="Kleinbus (bis 8 Personen)" name="vehicle" value="small" defaultChecked />
						<Radio label="Midi-Bus (9-30 Personen)" name="vehicle" value="medium" />
						<Radio label="Reisebus (31+ Personen)" name="vehicle" value="large" />
					</div>
				</ComponentPreview>
				<CodeBlock
					code={`import { Radio } from '@/components/ui/radio';

<div className="flex flex-col gap-3">
	<Radio label="Kleinbus (bis 8 Personen)" name="vehicle" value="small" defaultChecked />
	<Radio label="Midi-Bus (9-30 Personen)" name="vehicle" value="medium" />
	<Radio label="Reisebus (31+ Personen)" name="vehicle" value="large" />
</div>`}
				/>
			</Section>

			<Section id="disabled" title="Disabled State">
				<p className="text-sm text-muted-foreground">
					Radio buttons can be disabled to prevent interaction.
				</p>
				<ComponentPreview>
					<div className="flex flex-col gap-4">
						<Radio label="Available Option" name="example2" value="available" defaultChecked />
						<Radio label="Disabled Option" name="example2" value="disabled" disabled />
					</div>
				</ComponentPreview>
				<CodeBlock
					code={`import { Radio } from '@/components/ui/radio';

<Radio label="Available Option" name="example" value="available" defaultChecked />
<Radio label="Disabled Option" name="example" value="disabled" disabled />`}
				/>
			</Section>
		</div>
	);
}
