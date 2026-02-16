'use client';

import { Check, Copy } from 'lucide-react';
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CodeBlockProps {
	code: string;
	title?: string;
}

export function CodeBlock({ code, title }: CodeBlockProps) {
	const [isCopied, setIsCopied] = React.useState(false);

	const handleCopy = React.useCallback(async () => {
		await navigator.clipboard.writeText(code);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	}, [code]);

	return (
		<div className="relative mt-6 rounded-lg border bg-card overflow-hidden">
			{title && (
				<div className="flex items-center justify-between border-b px-4 py-3 bg-muted/40">
					<h4 className="text-sm font-medium">{title}</h4>
					<button
						type="button"
						onClick={handleCopy}
						className={cn(
							'flex items-center gap-2 rounded px-3 py-1.5 text-xs font-medium transition-colors',
							'hover:bg-muted',
							isCopied && 'text-success',
						)}
					>
						{isCopied ? (
							<>
								<Check className="h-3 w-3" />
								Copied
							</>
						) : (
							<>
								<Copy className="h-3 w-3" />
								Copy
							</>
						)}
					</button>
				</div>
			)}
			<div className="overflow-x-auto">
				<pre className="p-4 text-sm">
					<code>{code}</code>
				</pre>
			</div>
		</div>
	);
}
