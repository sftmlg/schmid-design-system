'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
	checked?: boolean;
	onCheckedChange?: (checked: boolean) => void;
	label?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
	({ className, checked = false, onCheckedChange, label, ...props }, ref) => {
		return (
			<div className="flex items-center gap-2">
				<button
					type="button"
					role="switch"
					aria-checked={checked}
					onClick={() => onCheckedChange?.(!checked)}
					className={cn(
						'inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
						checked ? 'bg-primary' : 'bg-input',
						className,
					)}
					ref={ref}
					{...props}
				>
					<span
						className={cn(
							'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform',
							checked ? 'translate-x-4' : 'translate-x-0',
						)}
					/>
				</button>
				{label && <span className="text-sm font-medium leading-none">{label}</span>}
			</div>
		);
	},
);
Switch.displayName = 'Switch';

export { Switch };
