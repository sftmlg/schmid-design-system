import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/docs/section';
import { ComponentPreview } from '@/components/docs/component-preview';
import { CodeBlock } from '@/components/docs/code-block';
import {
	Alert,
	AlertTitle,
	AlertDescription,
} from '@/components/ui/alert';
import {
	Info,
	AlertCircle,
	CheckCircle,
	AlertTriangle,
} from 'lucide-react';

export default function AlertsPage() {
	return (
		<div className='container mx-auto max-w-5xl py-8'>
			<PageHeader
				title='Alerts'
				description='Alert components for displaying important messages and notifications.'
				badge='Components'
			/>

			<Section id='variants' title='Variants'>
				<ComponentPreview>
					<div className='w-full max-w-2xl space-y-4'>
						<Alert variant='default'>
							<Info className='h-4 w-4' />
							<AlertTitle>Information</AlertTitle>
							<AlertDescription>
								This is an informational alert. Use it to provide helpful
								context or additional information to users.
							</AlertDescription>
						</Alert>

						<Alert variant='destructive'>
							<AlertCircle className='h-4 w-4' />
							<AlertTitle>Error</AlertTitle>
							<AlertDescription>
								An error occurred while processing your request. Please try
								again or contact support if the problem persists.
							</AlertDescription>
						</Alert>

						<Alert variant='success'>
							<CheckCircle className='h-4 w-4' />
							<AlertTitle>Success</AlertTitle>
							<AlertDescription>
								Your changes have been saved successfully. All updates are now
								live.
							</AlertDescription>
						</Alert>

						<Alert variant='warning'>
							<AlertTriangle className='h-4 w-4' />
							<AlertTitle>Warning</AlertTitle>
							<AlertDescription>
								This action may have unintended consequences. Please review
								carefully before proceeding.
							</AlertDescription>
						</Alert>
					</div>
				</ComponentPreview>

				<CodeBlock
					title='Alert Variants'
					code={`import { Info, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

// Information
<Alert variant="default">
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational alert.
  </AlertDescription>
</Alert>

// Error
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    An error occurred.
  </AlertDescription>
</Alert>

// Success
<Alert variant="success">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Changes saved successfully.
  </AlertDescription>
</Alert>

// Warning
<Alert variant="warning">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    Please review carefully.
  </AlertDescription>
</Alert>`}
				/>
			</Section>

			<Section id='without-icon' title='Without Icon'>
				<ComponentPreview>
					<div className='w-full max-w-2xl space-y-4'>
						<Alert variant='default'>
							<AlertTitle>Heads up!</AlertTitle>
							<AlertDescription>
								You can also use alerts without icons for a simpler appearance.
							</AlertDescription>
						</Alert>

						<Alert variant='success'>
							<AlertDescription>
								Alerts can also be used without a title, showing only the
								description text.
							</AlertDescription>
						</Alert>
					</div>
				</ComponentPreview>

				<CodeBlock
					title='Without Icon'
					code={`// Without icon
<Alert variant="default">
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    Alert without icon.
  </AlertDescription>
</Alert>

// Description only
<Alert variant="success">
  <AlertDescription>
    Alert with just description.
  </AlertDescription>
</Alert>`}
				/>
			</Section>

			<Section id='use-cases' title='Real-World Use Cases'>
				<ComponentPreview>
					<div className='w-full max-w-2xl space-y-4'>
						<Alert variant='warning'>
							<AlertTriangle className='h-4 w-4' />
							<AlertTitle>Maintenance Scheduled</AlertTitle>
							<AlertDescription>
								We&apos;ll be performing scheduled maintenance on Sunday, March
								15th from 2:00 AM to 4:00 AM EST. Some features may be
								unavailable during this time.
							</AlertDescription>
						</Alert>

						<Alert variant='success'>
							<CheckCircle className='h-4 w-4' />
							<AlertTitle>Payment Received</AlertTitle>
							<AlertDescription>
								Your payment of $49.99 has been processed successfully. A
								receipt has been sent to your email address.
							</AlertDescription>
						</Alert>

						<Alert variant='destructive'>
							<AlertCircle className='h-4 w-4' />
							<AlertTitle>Action Required</AlertTitle>
							<AlertDescription>
								Your subscription will expire in 3 days. Please update your
								payment method to continue enjoying our services.
							</AlertDescription>
						</Alert>

						<Alert variant='default'>
							<Info className='h-4 w-4' />
							<AlertTitle>New Feature Available</AlertTitle>
							<AlertDescription>
								We&apos;ve added dark mode support! Toggle it in your account
								settings to try it out.
							</AlertDescription>
						</Alert>
					</div>
				</ComponentPreview>

				<CodeBlock
					title='Use Cases'
					code={`// System notification
<Alert variant="warning">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Maintenance Scheduled</AlertTitle>
  <AlertDescription>
    Scheduled maintenance on Sunday...
  </AlertDescription>
</Alert>

// Success confirmation
<Alert variant="success">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Payment Received</AlertTitle>
  <AlertDescription>
    Your payment has been processed...
  </AlertDescription>
</Alert>

// Action required
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Action Required</AlertTitle>
  <AlertDescription>
    Your subscription expires soon...
  </AlertDescription>
</Alert>`}
				/>
			</Section>
		</div>
	);
}
