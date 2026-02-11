import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
	Type,
	Palette,
	Ruler,
	Grid3X3,
	RectangleHorizontal,
	TextCursorInput,
	CreditCard,
	Table,
	Tag,
	AlertCircle,
} from 'lucide-react';

const foundationLinks = [
	{
		title: 'Typography',
		description: 'Font families, sizes, weights, and text styles',
		href: '/foundation/typography',
		icon: Type,
	},
	{
		title: 'Colors',
		description: 'Color palette, semantic colors, and usage guidelines',
		href: '/foundation/colors',
		icon: Palette,
	},
	{
		title: 'Spacing',
		description: 'Spacing scale, margins, padding, and layout guidelines',
		href: '/foundation/spacing',
		icon: Ruler,
	},
	{
		title: 'Icons',
		description: 'Icon library, usage, and sizing guidelines',
		href: '/foundation/icons',
		icon: Grid3X3,
	},
];

const componentLinks = [
	{
		title: 'Buttons',
		description: 'Button variants, sizes, and interactive states',
		href: '/components/buttons',
		icon: RectangleHorizontal,
	},
	{
		title: 'Inputs',
		description: 'Text inputs, text areas, and form controls',
		href: '/components/inputs',
		icon: TextCursorInput,
	},
	{
		title: 'Cards',
		description: 'Card layouts and container components',
		href: '/components/cards',
		icon: CreditCard,
	},
	{
		title: 'Tables',
		description: 'Data tables with sorting and filtering',
		href: '/components/tables',
		icon: Table,
	},
	{
		title: 'Badges',
		description: 'Labels, tags, and status indicators',
		href: '/components/badges',
		icon: Tag,
	},
	{
		title: 'Alerts',
		description: 'Notification messages and feedback components',
		href: '/components/alerts',
		icon: AlertCircle,
	},
];

export default function HomePage() {
	return (
		<div className="container max-w-6xl py-10 space-y-10">
			<div className="space-y-4">
				<h1 className="text-4xl tracking-tight">Design System</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					A comprehensive design system built with Next.js, Tailwind CSS, and
					modern web standards. Explore our foundation elements and reusable
					components to build consistent, accessible interfaces.
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">4</CardTitle>
						<CardDescription>Foundation Categories</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							Typography, Colors, Spacing, and Icons
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">6</CardTitle>
						<CardDescription>UI Components</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							Buttons, Inputs, Cards, Tables, Badges, and Alerts
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">100%</CardTitle>
						<CardDescription>Accessible</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							WCAG 2.1 AA compliant components
						</p>
					</CardContent>
				</Card>
			</div>

			<div className="space-y-6">
				<div className="flex items-center gap-3">
					<h2 className="text-2xl tracking-tight">Foundation</h2>
					<Badge variant="secondary">4 Categories</Badge>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					{foundationLinks.map((item) => {
						const Icon = item.icon;
						return (
							<Link key={item.href} href={item.href}>
								<Card className="transition-colors hover:bg-accent">
									<CardHeader>
										<div className="flex items-center gap-3">
											<div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
												<Icon className="h-5 w-5 text-primary" />
											</div>
											<CardTitle>{item.title}</CardTitle>
										</div>
										<CardDescription>{item.description}</CardDescription>
									</CardHeader>
								</Card>
							</Link>
						);
					})}
				</div>
			</div>

			<div className="space-y-6">
				<div className="flex items-center gap-3">
					<h2 className="text-2xl tracking-tight">Components</h2>
					<Badge variant="secondary">6 Components</Badge>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					{componentLinks.map((item) => {
						const Icon = item.icon;
						return (
							<Link key={item.href} href={item.href}>
								<Card className="transition-colors hover:bg-accent">
									<CardHeader>
										<div className="flex items-center gap-3">
											<div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
												<Icon className="h-5 w-5 text-primary" />
											</div>
											<CardTitle>{item.title}</CardTitle>
										</div>
										<CardDescription>{item.description}</CardDescription>
									</CardHeader>
								</Card>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
