'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
	ChevronDown,
	ChevronRight,
	Palette,
	Type,
	Component,
	LayoutDashboard,
	LogIn,
	Settings,
	FileText,
	Columns3,
} from 'lucide-react';

const componentItems = [
	{ name: 'Button', href: '/components/button', icon: Component },
	{ name: 'Card', href: '/components/card', icon: Component },
	{ name: 'Input', href: '/components/input', icon: Component },
	{ name: 'Select', href: '/components/select', icon: Component },
	{ name: 'Checkbox', href: '/components/checkbox', icon: Component },
	{ name: 'Radio', href: '/components/radio', icon: Component },
	{ name: 'Switch', href: '/components/switch', icon: Component },
	{ name: 'Badge', href: '/components/badge', icon: Component },
	{ name: 'Alert', href: '/components/alert', icon: Component },
	{ name: 'Dialog', href: '/components/dialog', icon: Component },
	{ name: 'Tabs', href: '/components/tabs', icon: Columns3 },
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
	items: { name: string; href: string; icon: any }[];
}) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className='mb-6'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center w-full px-3 py-2 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors'
			>
				{isOpen ? (
					<ChevronDown className='h-4 w-4 mr-2' />
				) : (
					<ChevronRight className='h-4 w-4 mr-2' />
				)}
				{title}
			</button>
			{isOpen && (
				<div className='mt-1 space-y-1'>
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
										: 'text-foreground/60 hover:text-foreground hover:bg-muted/50'
								)}
							>
								<Icon className='h-4 w-4 mr-3' />
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
		<aside className='w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='p-6'>
				<h2 className='text-lg font-semibold mb-6'>Design System</h2>
				<nav className='space-y-1'>
					<Link
						href='/'
						className={cn(
							'flex items-center px-3 py-2 text-sm rounded-md transition-colors',
							pathname === '/'
								? 'bg-primary/10 text-primary font-medium'
								: 'text-foreground/60 hover:text-foreground hover:bg-muted/50'
						)}
					>
						<Palette className='h-4 w-4 mr-3' />
						Colors
					</Link>
					<Link
						href='/typography'
						className={cn(
							'flex items-center px-3 py-2 text-sm rounded-md transition-colors',
							pathname === '/typography'
								? 'bg-primary/10 text-primary font-medium'
								: 'text-foreground/60 hover:text-foreground hover:bg-muted/50'
						)}
					>
						<Type className='h-4 w-4 mr-3' />
						Typography
					</Link>
				</nav>

				<div className='mt-8'>
					<NavSection title='Components' items={componentItems} />
					<NavSection title='Pages' items={pageItems} />
				</div>
			</div>
		</aside>
	);
}
