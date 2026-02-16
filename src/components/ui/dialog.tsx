'use client';

import { X } from 'lucide-react';
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DialogProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

function Dialog({ open, onOpenChange, children, className }: DialogProps) {
	const dialogRef = React.useRef<HTMLDialogElement>(null);

	React.useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (open) {
			if (!dialog.open) dialog.showModal();
		} else {
			if (dialog.open) dialog.close();
		}
	}, [open]);

	return (
		<dialog
			ref={dialogRef}
			onClose={() => onOpenChange?.(false)}
			className={cn(
				'rounded-lg border bg-background p-0 shadow-lg backdrop:bg-foreground/50',
				'max-w-lg w-full',
				className,
			)}
		>
			{children}
		</dialog>
	);
}

function DialogHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn('flex flex-col gap-1.5 p-6 pb-0', className)} {...props}>
			{children}
		</div>
	);
}

function DialogTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h2 className={cn('text-lg leading-none tracking-tight', className)} {...props}>
			{children}
		</h2>
	);
}

function DialogDescription({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p className={cn('text-sm text-muted-foreground', className)} {...props}>
			{children}
		</p>
	);
}

function DialogContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn('p-6', className)} {...props}>
			{children}
		</div>
	);
}

function DialogFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn('flex justify-end gap-2 p-6 pt-0', className)} {...props}>
			{children}
		</div>
	);
}

function DialogClose({
	className,
	onClose,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { onClose?: () => void }) {
	return (
		<button
			type="button"
			onClick={onClose}
			className={cn(
				'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
				className,
			)}
			{...props}
		>
			<X className="h-4 w-4" />
			<span className="sr-only">Close</span>
		</button>
	);
}

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
};
