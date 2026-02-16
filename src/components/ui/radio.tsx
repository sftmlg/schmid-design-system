import * as React from 'react';
import { cn } from '@/lib/utils';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
	({ className, label, id, ...props }, ref) => {
		const generatedId = React.useId();
		const radioId = id || generatedId;
		return (
			<div className="flex items-center gap-2">
				<input
					type="radio"
					id={radioId}
					className={cn(
						'h-4 w-4 border border-input accent-primary transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
						className,
					)}
					ref={ref}
					{...props}
				/>
				{label && (
					<label htmlFor={radioId} className="text-sm font-medium leading-none">
						{label}
					</label>
				)}
			</div>
		);
	},
);
Radio.displayName = 'Radio';

export { Radio };
