import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ComponentPreviewProps {
	children: React.ReactNode;
	className?: string;
}

export function ComponentPreview({
	children,
	className,
}: ComponentPreviewProps) {
	return (
		<div
			className={cn(
				'flex items-center justify-center rounded-lg border bg-muted/40 p-10 min-h-[200px]',
				className,
			)}
		>
			{children}
		</div>
	);
}
