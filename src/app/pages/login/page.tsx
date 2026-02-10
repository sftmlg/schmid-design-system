import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/docs/section';

export default function LoginPage() {
	return (
		<div className='container mx-auto max-w-5xl py-8'>
			<PageHeader
				title='Login'
				description='Authentication screen. Template page for user sign-in.'
				badge='Pages'
			/>

			<Section id='variants' title='Variants'>
				<div className='rounded-lg border border-dashed bg-muted/20 p-12 text-center space-y-2'>
					<p className='text-lg font-medium text-muted-foreground'>No variants generated yet</p>
					<p className='text-sm text-muted-foreground'>
						Use v0, Gemini, or Claude Code to generate login page variants.
					</p>
				</div>
			</Section>
		</div>
	);
}
