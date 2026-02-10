'use client';

import * as React from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CodeBlockProps {
	code: string;
	language?: string;
	title?: string;
}

export function CodeBlock({ code, language = 'tsx', title }: CodeBlockProps) {
	const [isCopied, setIsCopied] = React.useState(false);

	const handleCopy = React.useCallback(async () => {
		await navigator.clipboard.writeText(code);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	}, [code]);

	return (
		<div className="relative rounded-lg overflow-hidden border bg-[#0d1117]">
			{title && (
				<div className="border-b border-gray-800 px-4 py-2 text-sm text-gray-400">
					{title}
				</div>
			)}
			<div className="relative">
				<button
					type="button"
					onClick={handleCopy}
					className="absolute right-4 top-4 rounded-md p-2 transition-colors hover:bg-gray-800 text-gray-400 hover:text-gray-200"
					aria-label={isCopied ? 'Copied' : 'Copy code'}
				>
					{isCopied ? (
						<Check className="h-4 w-4" />
					) : (
						<Copy className="h-4 w-4" />
					)}
				</button>
				<pre
					className={cn(
						'overflow-x-auto p-4 text-sm text-gray-200',
						'scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent',
					)}
				>
					<code className="font-mono text-sm">{code}</code>
				</pre>
			</div>
		</div>
	);
}
