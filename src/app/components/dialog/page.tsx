'use client';

import { useState } from 'react';
import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function DialogPage() {
	const [basicOpen, setBasicOpen] = useState(false);
	const [formOpen, setFormOpen] = useState(false);
	const [destructiveOpen, setDestructiveOpen] = useState(false);

	return (
		<div className="container mx-auto py-8">
			<PageHeader
				title="Dialog"
				description="A modal dialog that interrupts the user with important content and expects a response."
			/>

			<Section id="basic-dialog" title="Basic Dialog">
				<ComponentPreview>
					<Button onClick={() => setBasicOpen(true)}>Open Dialog</Button>
					<Dialog open={basicOpen} onOpenChange={setBasicOpen}>
						<DialogClose onClose={() => setBasicOpen(false)} />
						<DialogHeader>
							<DialogTitle>Dialog Title</DialogTitle>
							<DialogDescription>
								This is a basic dialog with a title, description, and close button.
							</DialogDescription>
						</DialogHeader>
						<DialogContent>
							<p className="text-sm">
								You can add any content here. The dialog will close when you click the X button or
								press Escape.
							</p>
						</DialogContent>
					</Dialog>
				</ComponentPreview>
				<CodeBlock
					code={`import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';

export function BasicDialog() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setOpen(true)}>Open Dialog</Button>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogClose onClose={() => setOpen(false)} />
				<DialogHeader>
					<DialogTitle>Dialog Title</DialogTitle>
					<DialogDescription>
						This is a basic dialog with a title, description, and close button.
					</DialogDescription>
				</DialogHeader>
				<DialogContent>
					<p className="text-sm">
						You can add any content here. The dialog will close when you click the X button or
						press Escape.
					</p>
				</DialogContent>
			</Dialog>
		</>
	);
}`}
				/>
			</Section>

			<Section id="with-form" title="With Form">
				<ComponentPreview>
					<Button onClick={() => setFormOpen(true)}>Edit Profile</Button>
					<Dialog open={formOpen} onOpenChange={setFormOpen}>
						<DialogClose onClose={() => setFormOpen(false)} />
						<DialogHeader>
							<DialogTitle>Edit Profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you're done.
							</DialogDescription>
						</DialogHeader>
						<DialogContent>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-2">
									<Label htmlFor="name">Name</Label>
									<Input id="name" defaultValue="David Moling" />
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="email">Email</Label>
									<Input id="email" type="email" defaultValue="david@example.com" />
								</div>
							</div>
						</DialogContent>
						<DialogFooter>
							<Button variant="ghost" onClick={() => setFormOpen(false)}>
								Cancel
							</Button>
							<Button onClick={() => setFormOpen(false)}>Save Changes</Button>
						</DialogFooter>
					</Dialog>
				</ComponentPreview>
				<CodeBlock
					code={`import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function FormDialog() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setOpen(true)}>Edit Profile</Button>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogClose onClose={() => setOpen(false)} />
				<DialogHeader>
					<DialogTitle>Edit Profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<DialogContent>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" defaultValue="David Moling" />
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email" defaultValue="david@example.com" />
						</div>
					</div>
				</DialogContent>
				<DialogFooter>
					<Button variant="ghost" onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<Button onClick={() => setOpen(false)}>Save Changes</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}`}
				/>
			</Section>

			<Section id="destructive-action" title="Destructive Action">
				<ComponentPreview>
					<Button variant="destructive" onClick={() => setDestructiveOpen(true)}>
						Delete Account
					</Button>
					<Dialog open={destructiveOpen} onOpenChange={setDestructiveOpen}>
						<DialogClose onClose={() => setDestructiveOpen(false)} />
						<DialogHeader>
							<DialogTitle>Are you absolutely sure?</DialogTitle>
							<DialogDescription>
								This action cannot be undone. This will permanently delete your account and remove
								your data from our servers.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button variant="ghost" onClick={() => setDestructiveOpen(false)}>
								Cancel
							</Button>
							<Button variant="destructive" onClick={() => setDestructiveOpen(false)}>
								Delete Account
							</Button>
						</DialogFooter>
					</Dialog>
				</ComponentPreview>
				<CodeBlock
					code={`import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';

export function DestructiveDialog() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button variant="destructive" onClick={() => setOpen(true)}>
				Delete Account
			</Button>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogClose onClose={() => setOpen(false)} />
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your account and remove
						your data from our servers.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button variant="ghost" onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<Button variant="destructive" onClick={() => setOpen(false)}>
						Delete Account
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}`}
				/>
			</Section>
		</div>
	);
}
