import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/docs/section';

export default function DetailPage() {
	return (
		<div className='container mx-auto max-w-5xl py-8'>
			<PageHeader
				title='Detail View'
				description='Record detail and edit screen. Template page for viewing individual items.'
				badge='Pages'
			/>

			<Section id='variants' title='Variants'>
				<div className='rounded-lg border border-dashed bg-muted/20 p-12 text-center space-y-2'>
					<p className='text-lg font-medium text-muted-foreground'>No variants generated yet</p>
					<p className='text-sm text-muted-foreground'>
						Use v0, Gemini, or Claude Code to generate detail view variants.
					</p>
				</div>
			</Section>
		</div>
	);
}
