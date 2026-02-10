'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
	ChevronDown,
	Menu,
	X,
	Search,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

const foundationItems = [
	{ name: 'Typography', href: '/foundation/typography', icon: Type },
	{ name: 'Colors', href: '/foundation/colors', icon: Palette },
	{ name: 'Spacing', href: '/foundation/spacing', icon: Ruler },
	{ name: 'Icons', href: '/foundation/icons', icon: Grid3X3 },
];

const componentItems = [
	{
		name: 'Buttons',
		href: '/components/buttons',
		icon: RectangleHorizontal,
	},
	{ name: 'Inputs', href: '/components/inputs', icon: TextCursorInput },
	{ name: 'Cards', href: '/components/cards', icon: CreditCard },
	{ name: 'Tables', href: '/components/tables', icon: Table },
	{ name: 'Badges', href: '/components/badges', icon: Tag },
	{ name: 'Alerts', href: '/components/alerts', icon: AlertCircle },
];

interface NavSectionProps {
	title: string;
	items: typeof foundationItems;
	defaultExpanded?: boolean;
}

function NavSection({ title, items, defaultExpanded = true }: NavSectionProps) {
	const pathname = usePathname();
	const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

	return (
		<div className="space-y-1">
			<button
				type="button"
				onClick={() => setIsExpanded(!isExpanded)}
				className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
			>
				<span>{title}</span>
				<ChevronDown
					className={cn(
						'h-4 w-4 transition-transform',
						isExpanded ? 'transform rotate-0' : 'transform -rotate-90',
					)}
				/>
			</button>
			{isExpanded && (
				<div className="space-y-0.5 pl-3">
					{items.map((item) => {
						const Icon = item.icon;
						const isActive = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
									isActive
										? 'bg-accent text-accent-foreground font-medium'
										: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
								)}
							>
								<Icon className="h-4 w-4 flex-shrink-0" />
								<span>{item.name}</span>
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
}

export function Sidebar() {
	const [isMobileOpen, setIsMobileOpen] = React.useState(false);

	const sidebarContent = (
		<div className="flex h-full flex-col">
			<div className="flex items-center justify-between border-b p-6">
				<Link href="/" className="flex items-center gap-2">
					<div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
						DS
					</div>
					<span className="text-lg font-semibold">Design System</span>
				</Link>
				<button
					type="button"
					onClick={() => setIsMobileOpen(false)}
					className="md:hidden"
				>
					<X className="h-5 w-5" />
				</button>
			</div>

			<div className="px-4 py-4">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search..."
						className="pl-9"
						disabled
					/>
				</div>
			</div>

			<nav className="flex-1 space-y-4 px-4 pb-4 overflow-y-auto">
				<NavSection title="Foundation" items={foundationItems} />
				<NavSection title="Components" items={componentItems} />
			</nav>
		</div>
	);

	return (
		<>
			<button
				type="button"
				onClick={() => setIsMobileOpen(true)}
				className="fixed top-4 left-4 z-40 md:hidden rounded-md bg-background border p-2 shadow-md"
			>
				<Menu className="h-5 w-5" />
			</button>

			{isMobileOpen && (
				<div
					className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
					onClick={() => setIsMobileOpen(false)}
				/>
			)}

			<aside
				className={cn(
					'fixed left-0 top-0 z-50 h-full w-64 border-r bg-background transition-transform duration-300 md:translate-x-0',
					isMobileOpen ? 'translate-x-0' : '-translate-x-full',
				)}
			>
				{sidebarContent}
			</aside>

			<aside className="hidden md:block w-64 border-r bg-background h-screen sticky top-0">
				{sidebarContent}
			</aside>
		</>
	);
}
