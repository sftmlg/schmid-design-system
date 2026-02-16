'use client';

import {
	ChevronDown,
	ChevronRight,
	Columns3,
	Component,
	FileText,
	LayoutDashboard,
	LogIn,
	Palette,
	Settings,
	Type,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentType } from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const foundationItems = [
	{ name: 'Colors', href: '/foundation/colors', icon: Palette },
	{ name: 'Typography', href: '/foundation/typography', icon: Type },
	{ name: 'Spacing', href: '/foundation/spacing', icon: Component },
	{ name: 'Icons', href: '/foundation/icons', icon: Component },
];

const componentItems = [
	{ name: 'Button', href: '/components/buttons', icon: Component },
	{ name: 'Card', href: '/components/cards', icon: Component },
	{ name: 'Input', href: '/components/inputs', icon: Component },
	{ name: 'Badge', href: '/components/badges', icon: Component },
	{ name: 'Alert', href: '/components/alerts', icon: Component },
	{ name: 'Tabs', href: '/components/tabs', icon: Columns3 },
	{ name: 'Tables', href: '/components/tables', icon: Columns3 },
	{ name: 'Select', href: '/components/select', icon: Component },
	{ name: 'Checkbox', href: '/components/checkbox', icon: Component },
	{ name: 'Radio', href: '/components/radio', icon: Component },
	{ name: 'Switch', href: '/components/switch', icon: Component },
	{ name: 'Dialog', href: '/components/dialog', icon: Component },
];

const pageItems = [
	{ name: 'Dashboard', href: '/pages/dashboard', icon: LayoutDashboard },
	{ name: 'Login', href: '/pages/login', icon: LogIn },
	{ name: 'Settings', href: '/pages/settings', icon: Settings },
	{ name: 'Detail View', href: '/pages/detail', icon: FileText },
];

function NavSection({
	title,
	items,
}: {
	title: string;
	items: { name: string; href: string; icon: ComponentType<{ className?: string }> }[];
}) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="mb-6">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center w-full px-3 py-2 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
			>
				{isOpen ? (
					<ChevronDown className="h-4 w-4 mr-2" />
				) : (
					<ChevronRight className="h-4 w-4 mr-2" />
				)}
				{title}
			</button>
			{isOpen && (
				<div className="mt-1 space-y-1">
					{items.map((item) => {
						const Icon = item.icon;
						const isActive = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'flex items-center px-3 py-2 text-sm rounded-md transition-colors',
									isActive
										? 'bg-primary/10 text-primary font-medium'
										: 'text-foreground/60 hover:text-foreground hover:bg-muted/50',
								)}
							>
								<Icon className="h-4 w-4 mr-3" />
								{item.name}
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
}

export function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="p-6">
				<div className="mb-6 px-3">
					<h2 className="text-lg text-primary">Schmid Reisen</h2>
					<p className="text-xs text-muted-foreground mt-0.5">Design System</p>
				</div>
				<Link
					href="/"
					className={cn(
						'flex items-center px-3 py-2 text-sm rounded-md transition-colors mb-6',
						pathname === '/'
							? 'bg-primary/10 text-primary font-medium'
							: 'text-foreground/60 hover:text-foreground hover:bg-muted/50',
					)}
				>
					<LayoutDashboard className="h-4 w-4 mr-3" />
					Overview
				</Link>

				<div className="space-y-1">
					<NavSection title="Foundation" items={foundationItems} />
					<NavSection title="Components" items={componentItems} />
					<NavSection title="Pages" items={pageItems} />
				</div>
			</div>
		</aside>
	);
}
