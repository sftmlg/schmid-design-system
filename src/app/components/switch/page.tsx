'use client';

import * as React from 'react';
import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';
import { Switch } from '@/components/ui/switch';

export default function SwitchPage() {
	const [checked1, setChecked1] = React.useState(false);
	const [checked2, setChecked2] = React.useState(true);

	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Switch"
				description="A toggle switch that allows users to switch between two states, typically on and off."
				badge="Components"
			/>

			<Section id="basic" title="Basic Switch">
				<p className="text-sm text-muted-foreground">A simple switch without a label.</p>
				<ComponentPreview>
					<Switch checked={checked1} onCheckedChange={setChecked1} />
				</ComponentPreview>
				<CodeBlock
					code={`import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

const [checked, setChecked] = useState(false);

<Switch checked={checked} onCheckedChange={setChecked} />`}
				/>
			</Section>

			<Section id="with-label" title="With Label">
				<p className="text-sm text-muted-foreground">A switch with an accompanying label.</p>
				<ComponentPreview>
					<div className="flex flex-col gap-4">
						<Switch
							checked={checked2}
							onCheckedChange={setChecked2}
							label="E-Mail Benachrichtigungen"
						/>
						<Switch checked={false} onCheckedChange={() => {}} label="SMS Benachrichtigungen" />
					</div>
				</ComponentPreview>
				<CodeBlock
					code={`import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

const [checked, setChecked] = useState(true);

<Switch
	checked={checked}
	onCheckedChange={setChecked}
	label="E-Mail Benachrichtigungen"
/>`}
				/>
			</Section>

			<Section id="disabled" title="Disabled State">
				<p className="text-sm text-muted-foreground">
					Switches can be disabled to prevent interaction.
				</p>
				<ComponentPreview>
					<div className="flex flex-col gap-4">
						<Switch checked={true} onCheckedChange={() => {}} disabled label="Enabled (Disabled)" />
						<Switch
							checked={false}
							onCheckedChange={() => {}}
							disabled
							label="Disabled (Disabled)"
						/>
					</div>
				</ComponentPreview>
				<CodeBlock
					code={`import { Switch } from '@/components/ui/switch';

<Switch checked={true} onCheckedChange={() => {}} disabled label="Enabled (Disabled)" />
<Switch checked={false} onCheckedChange={() => {}} disabled label="Disabled (Disabled)" />`}
				/>
			</Section>
		</div>
	);
}
