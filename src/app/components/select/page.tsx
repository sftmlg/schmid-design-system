import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';
import { Select } from '@/components/ui/select';

export default function SelectPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Select"
				description="Dropdown select components for choosing from a list of options."
				badge="Components"
			/>

			<Section id="basic" title="Basic Select">
				<ComponentPreview>
					<div className="w-full max-w-xs space-y-2">
						<Select>
							<option value="">Choose an option</option>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
						</Select>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Basic Usage"
					code={`<Select>
  <option value="">Choose an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>`}
				/>
			</Section>

			<Section id="with-label" title="With Label">
				<ComponentPreview>
					<div className="w-full max-w-xs space-y-2">
						<label htmlFor="country" className="text-sm font-medium">
							Country
						</label>
						<Select id="country">
							<option value="">Select a country</option>
							<option value="at">Austria</option>
							<option value="de">Germany</option>
							<option value="ch">Switzerland</option>
							<option value="it">Italy</option>
						</Select>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="With Label"
					code={`<div className="space-y-2">
  <label htmlFor="country" className="text-sm font-medium">
    Country
  </label>
  <Select id="country">
    <option value="">Select a country</option>
    <option value="at">Austria</option>
    <option value="de">Germany</option>
    <option value="ch">Switzerland</option>
    <option value="it">Italy</option>
  </Select>
</div>`}
				/>
			</Section>

			<Section id="disabled" title="Disabled State">
				<ComponentPreview>
					<div className="w-full max-w-xs space-y-4">
						<Select disabled>
							<option value="">Disabled select</option>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
						</Select>
						<Select defaultValue="2">
							<option value="1">Option 1</option>
							<option value="2">Selected and disabled</option>
							<option value="3">Option 3</option>
						</Select>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Disabled"
					code={`<Select disabled>
  <option value="">Disabled select</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>`}
				/>
			</Section>

			<Section id="sizes" title="Sizes">
				<ComponentPreview>
					<div className="w-full max-w-xs space-y-4">
						<Select className="h-8 text-xs">
							<option value="">Small select</option>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
						</Select>
						<Select>
							<option value="">Default select</option>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
						</Select>
						<Select className="h-12">
							<option value="">Large select</option>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
						</Select>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Sizes"
					code={`<Select className="h-8 text-xs">
  <option value="">Small select</option>
</Select>

<Select>
  <option value="">Default select</option>
</Select>

<Select className="h-12">
  <option value="">Large select</option>
</Select>`}
				/>
			</Section>

			<Section id="form" title="Form Example">
				<ComponentPreview>
					<div className="w-full max-w-md space-y-4">
						<div className="space-y-2">
							<label htmlFor="category" className="text-sm font-medium">
								Category
							</label>
							<Select id="category">
								<option value="">Select a category</option>
								<option value="bus">Bus Tours</option>
								<option value="taxi">Taxi Service</option>
								<option value="travel">Travel Agency</option>
								<option value="workshop">Workshop</option>
							</Select>
						</div>
						<div className="space-y-2">
							<label htmlFor="priority" className="text-sm font-medium">
								Priority
							</label>
							<Select id="priority">
								<option value="">Select priority</option>
								<option value="low">Low</option>
								<option value="medium">Medium</option>
								<option value="high">High</option>
								<option value="urgent">Urgent</option>
							</Select>
						</div>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Form Example"
					code={`<div className="space-y-4">
  <div className="space-y-2">
    <label htmlFor="category" className="text-sm font-medium">
      Category
    </label>
    <Select id="category">
      <option value="">Select a category</option>
      <option value="bus">Bus Tours</option>
      <option value="taxi">Taxi Service</option>
    </Select>
  </div>
</div>`}
				/>
			</Section>

			<Section id="accessibility" title="Accessibility">
				<ComponentPreview>
					<div className="space-y-4">
						<p className="text-sm text-muted-foreground">
							The Select component is built on the native HTML select element with proper
							accessibility features:
						</p>
						<ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
							<li>Keyboard navigation with arrow keys</li>
							<li>Focus management with visible focus ring</li>
							<li>Disabled state support</li>
							<li>Label association with htmlFor and id</li>
							<li>Native browser select behavior preserved</li>
						</ul>
					</div>
				</ComponentPreview>
			</Section>
		</div>
	);
}
