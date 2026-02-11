import * as React from 'react';
import { Badge } from '@/components/ui/badge';

export interface PageHeaderProps {
	title: string;
	description: string;
	badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
	return (
		<div className="space-y-4 pb-8 border-b">
			<div className="flex items-center gap-3">
				<h1 className="text-3xl tracking-tight">{title}</h1>
				{badge && <Badge variant="outline">{badge}</Badge>}
			</div>
			<p className="text-lg text-muted-foreground">{description}</p>
		</div>
	);
}
