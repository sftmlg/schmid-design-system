import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';
import { Input } from '@/components/ui/input';

export default function InputsPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Inputs"
				description="Text input controls with labels, placeholders, and form patterns."
				badge="Components"
			/>

			<Section id="text-inputs" title="Text Inputs">
				<ComponentPreview>
					<div className="w-full max-w-md space-y-6">
						<div className="space-y-2">
							<label htmlFor="default-input" className="text-sm font-medium leading-none">
								Default Input
							</label>
							<Input id="default-input" placeholder="Enter text..." />
						</div>

						<div className="space-y-2">
							<label htmlFor="email-input" className="text-sm font-medium leading-none">
								Email Address
							</label>
							<Input id="email-input" type="email" placeholder="you@example.com" />
							<p className="text-sm text-muted-foreground">We&apos;ll never share your email.</p>
						</div>

						<div className="space-y-2">
							<label htmlFor="disabled-input" className="text-sm font-medium leading-none">
								Disabled Input
							</label>
							<Input id="disabled-input" placeholder="Disabled" disabled value="Cannot edit this" />
						</div>

						<div className="space-y-2">
							<label
								htmlFor="error-input"
								className="text-sm font-medium leading-none text-destructive"
							>
								With Error
							</label>
							<Input
								id="error-input"
								placeholder="username"
								className="border-destructive focus-visible:ring-destructive"
							/>
							<p className="text-sm text-destructive">This username is already taken.</p>
						</div>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Text Inputs"
					code={`// With label
<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email Address
  </label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>

// With helper text
<div className="space-y-2">
  <Input placeholder="Enter text..." />
  <p className="text-sm text-muted-foreground">Helper text here</p>
</div>

// Disabled
<Input disabled value="Cannot edit this" />

// With error
<Input
  className="border-destructive focus-visible:ring-destructive"
  placeholder="username"
/>
<p className="text-sm text-destructive">Error message</p>`}
				/>
			</Section>

			<Section id="input-types" title="Input Types">
				<ComponentPreview>
					<div className="w-full max-w-md space-y-4">
						<div className="space-y-2">
							<label htmlFor="text-input" className="text-sm font-medium">
								Text
							</label>
							<Input id="text-input" type="text" placeholder="Text input" />
						</div>
						<div className="space-y-2">
							<label htmlFor="password-input" className="text-sm font-medium">
								Password
							</label>
							<Input id="password-input" type="password" placeholder="Password" />
						</div>
						<div className="space-y-2">
							<label htmlFor="email-input-2" className="text-sm font-medium">
								Email
							</label>
							<Input id="email-input-2" type="email" placeholder="Email" />
						</div>
						<div className="space-y-2">
							<label htmlFor="number-input" className="text-sm font-medium">
								Number
							</label>
							<Input id="number-input" type="number" placeholder="Number" />
						</div>
						<div className="space-y-2">
							<label htmlFor="date-input" className="text-sm font-medium">
								Date
							</label>
							<Input id="date-input" type="date" />
						</div>
					</div>
				</ComponentPreview>
			</Section>

			<Section id="form-pattern" title="Complete Form Example">
				<ComponentPreview>
					<div className="w-full max-w-md space-y-6">
						<div className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="form-name" className="text-sm font-medium leading-none">
									Full Name
								</label>
								<Input id="form-name" placeholder="John Doe" />
							</div>

							<div className="space-y-2">
								<label htmlFor="form-email" className="text-sm font-medium leading-none">
									Email
								</label>
								<Input id="form-email" type="email" placeholder="john@example.com" />
								<p className="text-sm text-muted-foreground">Your primary contact email</p>
							</div>

							<div className="space-y-2">
								<label htmlFor="form-password" className="text-sm font-medium leading-none">
									Password
								</label>
								<Input id="form-password" type="password" />
								<p className="text-sm text-muted-foreground">Must be at least 8 characters</p>
							</div>
						</div>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Form Example"
					code={`<div className="space-y-6">
  <div className="space-y-2">
    <label htmlFor="name" className="text-sm font-medium">
      Full Name
    </label>
    <Input id="name" placeholder="John Doe" />
  </div>

  <div className="space-y-2">
    <label htmlFor="email" className="text-sm font-medium">
      Email
    </label>
    <Input id="email" type="email" placeholder="john@example.com" />
    <p className="text-sm text-muted-foreground">
      Your primary contact email
    </p>
  </div>

  <div className="space-y-2">
    <label htmlFor="password" className="text-sm font-medium">
      Password
    </label>
    <Input id="password" type="password" />
    <p className="text-sm text-muted-foreground">
      Must be at least 8 characters
    </p>
  </div>
</div>`}
				/>
			</Section>
		</div>
	);
}
