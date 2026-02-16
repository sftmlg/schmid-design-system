import { ArrowRight, Mail } from 'lucide-react';
import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function CardsPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Cards"
				description="Card containers for grouping related content and actions."
				badge="Components"
			/>

			<Section id="default-card" title="Default Card">
				<ComponentPreview>
					<Card className="w-full max-w-md">
						<CardHeader>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>A brief description of the card content goes here.</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm">
								This is the main content area of the card. You can add any content here including
								text, images, or other components.
							</p>
						</CardContent>
					</Card>
				</ComponentPreview>

				<CodeBlock
					title="Default Card"
					code={`<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      A brief description of the card content.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm">Card content goes here.</p>
  </CardContent>
</Card>`}
				/>
			</Section>

			<Section id="with-footer" title="With Header and Footer">
				<ComponentPreview>
					<Card className="w-full max-w-md">
						<CardHeader>
							<div className="flex items-start justify-between">
								<div className="space-y-1">
									<CardTitle>Project Alpha</CardTitle>
									<CardDescription>Updated 2 hours ago</CardDescription>
								</div>
								<Badge>Active</Badge>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								Complete the design system documentation and component showcase pages. Includes
								foundation elements and interactive examples.
							</p>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline">Dismiss</Button>
							<Button>
								View Details
								<ArrowRight className="h-4 w-4" />
							</Button>
						</CardFooter>
					</Card>
				</ComponentPreview>

				<CodeBlock
					title="With Footer"
					code={`<Card>
  <CardHeader>
    <CardTitle>Project Alpha</CardTitle>
    <CardDescription>Updated 2 hours ago</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Card content description
    </p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Dismiss</Button>
    <Button>View Details</Button>
  </CardFooter>
</Card>`}
				/>
			</Section>

			<Section id="accent-card" title="Accent Card">
				<ComponentPreview>
					<Card className="w-full max-w-md border-l-4 border-l-primary">
						<CardHeader>
							<CardTitle>Important Notice</CardTitle>
							<CardDescription>Highlighted with accent border</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm">
								This card uses a left border accent to draw attention to important or priority
								content.
							</p>
						</CardContent>
					</Card>
				</ComponentPreview>

				<CodeBlock
					title="Accent Card"
					code={`<Card className="border-l-4 border-l-primary">
  <CardHeader>
    <CardTitle>Important Notice</CardTitle>
    <CardDescription>Highlighted with accent border</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm">Accented content here</p>
  </CardContent>
</Card>`}
				/>
			</Section>

			<Section id="interactive-card" title="Interactive Card">
				<ComponentPreview>
					<div className="grid gap-4 sm:grid-cols-2">
						<Card className="cursor-pointer transition-colors hover:bg-accent">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Mail className="h-5 w-5" />
									Messages
								</CardTitle>
								<CardDescription>3 unread messages</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-2xl font-bold">12</p>
								<p className="text-sm text-muted-foreground">Total messages</p>
							</CardContent>
						</Card>

						<Card className="cursor-pointer transition-colors hover:bg-accent">
							<CardHeader>
								<CardTitle>Tasks</CardTitle>
								<CardDescription>5 tasks remaining</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-2xl font-bold">8</p>
								<p className="text-sm text-muted-foreground">Total tasks</p>
							</CardContent>
						</Card>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Interactive Card"
					code={`<Card className="cursor-pointer transition-colors hover:bg-accent">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Mail className="h-5 w-5" />
      Messages
    </CardTitle>
    <CardDescription>3 unread messages</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-2xl font-bold">12</p>
    <p className="text-sm text-muted-foreground">Total messages</p>
  </CardContent>
</Card>`}
				/>
			</Section>
		</div>
	);
}
