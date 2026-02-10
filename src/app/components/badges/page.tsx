import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/docs/section';
import { ComponentPreview } from '@/components/docs/component-preview';
import { CodeBlock } from '@/components/docs/code-block';
import { Badge } from '@/components/ui/badge';

export default function BadgesPage() {
	return (
		<div className='container mx-auto max-w-5xl py-8'>
			<PageHeader
				title='Badges'
				description='Badge components for labels, status indicators, and tags.'
				badge='Components'
			/>

			<Section id='variants' title='Variants'>
				<ComponentPreview>
					<div className='flex flex-wrap items-center gap-4'>
						<Badge variant='default'>Default</Badge>
						<Badge variant='secondary'>Secondary</Badge>
						<Badge variant='destructive'>Destructive</Badge>
						<Badge variant='outline'>Outline</Badge>
						<Badge variant='success'>Success</Badge>
						<Badge variant='warning'>Warning</Badge>
					</div>
				</ComponentPreview>

				<CodeBlock
					title='Variants'
					code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>`}
				/>
			</Section>

			<Section id='with-dot' title='With Status Dot'>
				<ComponentPreview>
					<div className='flex flex-wrap items-center gap-4'>
						<Badge variant='success' className='gap-1'>
							<span className='h-2 w-2 rounded-full bg-white' />
							Online
						</Badge>
						<Badge variant='warning' className='gap-1'>
							<span className='h-2 w-2 rounded-full bg-white' />
							Away
						</Badge>
						<Badge variant='destructive' className='gap-1'>
							<span className='h-2 w-2 rounded-full bg-white' />
							Offline
						</Badge>
						<Badge variant='secondary' className='gap-1'>
							<span className='h-2 w-2 rounded-full bg-foreground' />
							Idle
						</Badge>
					</div>
				</ComponentPreview>

				<CodeBlock
					title='With Dot'
					code={`<Badge variant="success" className="gap-1">
  <span className="h-2 w-2 rounded-full bg-white" />
  Online
</Badge>

<Badge variant="warning" className="gap-1">
  <span className="h-2 w-2 rounded-full bg-white" />
  Away
</Badge>`}
				/>
			</Section>

			<Section id='status-badges' title='Status Use Cases'>
				<ComponentPreview>
					<div className='space-y-6'>
						<div className='space-y-2'>
							<p className='text-sm font-medium'>Order Status</p>
							<div className='flex flex-wrap gap-2'>
								<Badge variant='warning'>Pending</Badge>
								<Badge variant='default'>Processing</Badge>
								<Badge variant='success'>Shipped</Badge>
								<Badge variant='success'>Delivered</Badge>
								<Badge variant='destructive'>Cancelled</Badge>
							</div>
						</div>

						<div className='space-y-2'>
							<p className='text-sm font-medium'>Payment Status</p>
							<div className='flex flex-wrap gap-2'>
								<Badge variant='success'>Paid</Badge>
								<Badge variant='warning'>Pending</Badge>
								<Badge variant='destructive'>Failed</Badge>
								<Badge variant='secondary'>Refunded</Badge>
							</div>
						</div>

						<div className='space-y-2'>
							<p className='text-sm font-medium'>User Roles</p>
							<div className='flex flex-wrap gap-2'>
								<Badge variant='default'>Admin</Badge>
								<Badge variant='secondary'>Editor</Badge>
								<Badge variant='outline'>Viewer</Badge>
								<Badge variant='outline'>Guest</Badge>
							</div>
						</div>
					</div>
				</ComponentPreview>
			</Section>

			<Section id='category-tags' title='Category Tags'>
				<ComponentPreview>
					<div className='space-y-4'>
						<div className='flex flex-wrap gap-2'>
							<Badge variant='outline'>React</Badge>
							<Badge variant='outline'>TypeScript</Badge>
							<Badge variant='outline'>Next.js</Badge>
							<Badge variant='outline'>Tailwind CSS</Badge>
							<Badge variant='outline'>Design System</Badge>
						</div>

						<div className='flex flex-wrap gap-2'>
							<Badge variant='secondary'>Documentation</Badge>
							<Badge variant='secondary'>Tutorial</Badge>
							<Badge variant='secondary'>Example</Badge>
							<Badge variant='secondary'>Reference</Badge>
						</div>
					</div>
				</ComponentPreview>

				<CodeBlock
					title='Category Tags'
					code={`// Technology tags
<Badge variant="outline">React</Badge>
<Badge variant="outline">TypeScript</Badge>

// Content type tags
<Badge variant="secondary">Documentation</Badge>
<Badge variant="secondary">Tutorial</Badge>

// Status indicators
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="destructive">Failed</Badge>`}
				/>
			</Section>

			<Section id='examples' title='Real-World Examples'>
				<ComponentPreview>
					<div className='space-y-6'>
						<div className='flex items-center justify-between rounded-lg border p-4'>
							<div>
								<p className='font-medium'>Project Alpha</p>
								<p className='text-sm text-muted-foreground'>
									Last updated 2 hours ago
								</p>
							</div>
							<Badge variant='success'>Active</Badge>
						</div>

						<div className='flex items-center justify-between rounded-lg border p-4'>
							<div>
								<p className='font-medium'>Deployment #142</p>
								<p className='text-sm text-muted-foreground'>
									Started 5 minutes ago
								</p>
							</div>
							<Badge variant='warning' className='gap-1'>
								<span className='h-2 w-2 animate-pulse rounded-full bg-white' />
								In Progress
							</Badge>
						</div>

						<div className='flex items-center justify-between rounded-lg border p-4'>
							<div>
								<p className='font-medium'>API Integration</p>
								<p className='text-sm text-muted-foreground'>
									Failed 10 minutes ago
								</p>
							</div>
							<Badge variant='destructive'>Error</Badge>
						</div>
					</div>
				</ComponentPreview>
			</Section>
		</div>
	);
}
