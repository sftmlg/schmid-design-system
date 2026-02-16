import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';
import { Checkbox } from '@/components/ui/checkbox';

export default function CheckboxPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Checkbox"
				description="Checkbox components for selecting multiple options from a list."
				badge="Components"
			/>

			<Section id="basic" title="Basic Checkbox">
				<ComponentPreview>
					<div className="space-y-4">
						<Checkbox label="Accept terms and conditions" />
						<Checkbox label="Subscribe to newsletter" />
						<Checkbox label="Enable notifications" />
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Basic Usage"
					code={`<Checkbox label="Accept terms and conditions" />
<Checkbox label="Subscribe to newsletter" />
<Checkbox label="Enable notifications" />`}
				/>
			</Section>

			<Section id="without-label" title="Without Label">
				<ComponentPreview>
					<div className="flex items-center gap-4">
						<Checkbox />
						<Checkbox defaultChecked />
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Without Label"
					code={`<Checkbox />
<Checkbox defaultChecked />`}
				/>
			</Section>

			<Section id="states" title="States">
				<ComponentPreview>
					<div className="space-y-4">
						<Checkbox label="Unchecked" />
						<Checkbox label="Checked" defaultChecked />
						<Checkbox label="Disabled" disabled />
						<Checkbox label="Checked and disabled" defaultChecked disabled />
					</div>
				</ComponentPreview>

				<CodeBlock
					title="States"
					code={`<Checkbox label="Unchecked" />
<Checkbox label="Checked" defaultChecked />
<Checkbox label="Disabled" disabled />
<Checkbox label="Checked and disabled" defaultChecked disabled />`}
				/>
			</Section>

			<Section id="form" title="Form Example">
				<ComponentPreview>
					<div className="w-full max-w-md space-y-4">
						<div>
							<h3 className="mb-4">Select your interests</h3>
							<div className="space-y-3">
								<Checkbox label="Bus Tours" />
								<Checkbox label="Taxi Service" />
								<Checkbox label="Travel Planning" />
								<Checkbox label="Group Transportation" />
								<Checkbox label="Airport Transfers" />
							</div>
						</div>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Form Example"
					code={`<div>
  <h3 className="mb-4">Select your interests</h3>
  <div className="space-y-3">
    <Checkbox label="Bus Tours" />
    <Checkbox label="Taxi Service" />
    <Checkbox label="Travel Planning" />
    <Checkbox label="Group Transportation" />
    <Checkbox label="Airport Transfers" />
  </div>
</div>`}
				/>
			</Section>

			<Section id="controlled" title="Controlled Checkbox">
				<ComponentPreview>
					<div className="space-y-4">
						<p className="text-sm text-muted-foreground">
							Use the checked and onChange props to control the checkbox state:
						</p>
						<div className="space-y-3">
							<Checkbox label="Controlled checkbox" />
							<p className="text-xs text-muted-foreground">
								This example shows basic usage. For controlled state, use React state with checked
								and onChange props.
							</p>
						</div>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Controlled"
					code={`const [checked, setChecked] = useState(false);

<Checkbox
  label="Controlled checkbox"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
				/>
			</Section>

			<Section id="list" title="Checkbox List">
				<ComponentPreview>
					<div className="w-full max-w-md border rounded-md p-4">
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<h4 className="text-sm font-medium">Features</h4>
								<span className="text-xs text-muted-foreground">3 selected</span>
							</div>
							<div className="space-y-2">
								<Checkbox label="Online booking system" defaultChecked />
								<Checkbox label="Driver app" defaultChecked />
								<Checkbox label="Customer portal" />
								<Checkbox label="Payment integration" defaultChecked />
								<Checkbox label="GPS tracking" />
							</div>
						</div>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Checkbox List"
					code={`<div className="border rounded-md p-4">
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-medium">Features</h4>
      <span className="text-xs text-muted-foreground">3 selected</span>
    </div>
    <div className="space-y-2">
      <Checkbox label="Online booking system" defaultChecked />
      <Checkbox label="Driver app" defaultChecked />
      <Checkbox label="Customer portal" />
      <Checkbox label="Payment integration" defaultChecked />
      <Checkbox label="GPS tracking" />
    </div>
  </div>
</div>`}
				/>
			</Section>

			<Section id="accessibility" title="Accessibility">
				<ComponentPreview>
					<div className="space-y-4">
						<p className="text-sm text-muted-foreground">
							The Checkbox component is built with proper accessibility features:
						</p>
						<ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
							<li>Native HTML checkbox element for proper semantics</li>
							<li>Label association with htmlFor and unique ID</li>
							<li>Keyboard navigation support (Space to toggle)</li>
							<li>Focus management with visible focus ring</li>
							<li>Disabled state support</li>
							<li>Proper contrast ratios for all states</li>
						</ul>
					</div>
				</ComponentPreview>
			</Section>
		</div>
	);
}
