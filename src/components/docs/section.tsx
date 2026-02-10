import * as React from 'react';

export interface SectionProps {
	id: string;
	title: string;
	children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
	return (
		<section id={id} className="scroll-mt-20 mt-12 space-y-4">
			<h2 className="text-2xl font-bold tracking-tight border-b pb-2">
				{title}
			</h2>
			<div className="space-y-4">{children}</div>
		</section>
	);
}
