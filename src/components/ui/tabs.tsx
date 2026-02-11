'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Tabs Context
interface TabsContextValue {
	value: string;
	onValueChange: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(
	undefined,
);

const useTabsContext = () => {
	const context = React.useContext(TabsContext);
	if (!context) {
		throw new Error('Tabs compound components must be used within Tabs');
	}
	return context;
};

// Tabs Root
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
	defaultValue: string;
	value?: string;
	onValueChange?: (value: string) => void;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
	({ defaultValue, value: controlledValue, onValueChange, children, className, ...props }, ref) => {
		const [internalValue, setInternalValue] = React.useState(defaultValue);

		const value = controlledValue ?? internalValue;
		const handleValueChange = onValueChange ?? setInternalValue;

		return (
			<TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
				<div ref={ref} className={cn('w-full', className)} {...props}>
					{children}
				</div>
			</TabsContext.Provider>
		);
	},
);
Tabs.displayName = 'Tabs';

// TabsList
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				role='tablist'
				className={cn(
					'inline-flex h-9 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
					className,
				)}
				{...props}
			/>
		);
	},
);
TabsList.displayName = 'TabsList';

// TabsTrigger
const tabsTriggerVariants = cva(
	'inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			active: {
				true: 'bg-background text-foreground shadow-sm',
				false: 'hover:bg-background/50 hover:text-foreground',
			},
		},
		defaultVariants: {
			active: false,
		},
	},
);

export interface TabsTriggerProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof tabsTriggerVariants> {
	value: string;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
	({ className, value, ...props }, ref) => {
		const { value: selectedValue, onValueChange } = useTabsContext();
		const isActive = selectedValue === value;

		return (
			<button
				ref={ref}
				type='button'
				role='tab'
				aria-selected={isActive}
				aria-controls={`tabpanel-${value}`}
				data-state={isActive ? 'active' : 'inactive'}
				className={cn(tabsTriggerVariants({ active: isActive }), className)}
				onClick={() => onValueChange(value)}
				{...props}
			/>
		);
	},
);
TabsTrigger.displayName = 'TabsTrigger';

// TabsContent
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
	value: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
	({ className, value, ...props }, ref) => {
		const { value: selectedValue } = useTabsContext();
		const isActive = selectedValue === value;

		if (!isActive) return null;

		return (
			<div
				ref={ref}
				role='tabpanel'
				id={`tabpanel-${value}`}
				aria-labelledby={`tab-${value}`}
				data-state={isActive ? 'active' : 'inactive'}
				className={cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className)}
				{...props}
			/>
		);
	},
);
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent };
