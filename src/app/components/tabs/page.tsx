import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TabsPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Tabs"
				description="Tabbed interfaces for organizing content into multiple sections."
				badge="Components"
			/>

			<Section id="basic" title="Basic Tabs">
				<ComponentPreview>
					<Tabs defaultValue="tab1" className="w-full">
						<TabsList>
							<TabsTrigger value="tab1">Account</TabsTrigger>
							<TabsTrigger value="tab2">Password</TabsTrigger>
							<TabsTrigger value="tab3">Settings</TabsTrigger>
						</TabsList>
						<TabsContent value="tab1">
							<div className="rounded-md border p-4">
								<p className="text-sm text-muted-foreground">
									Account settings and preferences. Manage your profile information and account
									details.
								</p>
							</div>
						</TabsContent>
						<TabsContent value="tab2">
							<div className="rounded-md border p-4">
								<p className="text-sm text-muted-foreground">
									Change your password and security settings. Keep your account secure.
								</p>
							</div>
						</TabsContent>
						<TabsContent value="tab3">
							<div className="rounded-md border p-4">
								<p className="text-sm text-muted-foreground">
									Configure application settings and preferences. Customize your experience.
								</p>
							</div>
						</TabsContent>
					</Tabs>
				</ComponentPreview>

				<CodeBlock
					title="Basic Usage"
					code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Account</TabsTrigger>
    <TabsTrigger value="tab2">Password</TabsTrigger>
    <TabsTrigger value="tab3">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <div className="rounded-md border p-4">
      Account content...
    </div>
  </TabsContent>
  <TabsContent value="tab2">
    <div className="rounded-md border p-4">
      Password content...
    </div>
  </TabsContent>
  <TabsContent value="tab3">
    <div className="rounded-md border p-4">
      Settings content...
    </div>
  </TabsContent>
</Tabs>`}
				/>
			</Section>

			<Section id="with-cards" title="With Cards">
				<ComponentPreview>
					<Tabs defaultValue="overview" className="w-full">
						<TabsList>
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="analytics">Analytics</TabsTrigger>
							<TabsTrigger value="reports">Reports</TabsTrigger>
						</TabsList>
						<TabsContent value="overview">
							<Card className="p-6">
								<h3 className="mb-2">Dashboard Overview</h3>
								<p className="text-sm text-muted-foreground mb-4">
									View your key metrics and recent activity at a glance.
								</p>
								<div className="grid grid-cols-3 gap-4">
									<div className="rounded-md bg-muted p-4">
										<p className="text-sm font-medium">Total Users</p>
										<p className="text-2xl font-bold">1,234</p>
									</div>
									<div className="rounded-md bg-muted p-4">
										<p className="text-sm font-medium">Active Sessions</p>
										<p className="text-2xl font-bold">89</p>
									</div>
									<div className="rounded-md bg-muted p-4">
										<p className="text-sm font-medium">Revenue</p>
										<p className="text-2xl font-bold">$45.2K</p>
									</div>
								</div>
							</Card>
						</TabsContent>
						<TabsContent value="analytics">
							<Card className="p-6">
								<h3 className="mb-2">Analytics</h3>
								<p className="text-sm text-muted-foreground">
									Detailed analytics and performance metrics for your application.
								</p>
							</Card>
						</TabsContent>
						<TabsContent value="reports">
							<Card className="p-6">
								<h3 className="mb-2">Reports</h3>
								<p className="text-sm text-muted-foreground">
									Generate and download custom reports for your data.
								</p>
							</Card>
						</TabsContent>
					</Tabs>
				</ComponentPreview>

				<CodeBlock
					title="With Cards"
					code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <Card className="p-6">
      <h3 className="mb-2">Dashboard Overview</h3>
      <p className="text-sm text-muted-foreground">
        View your key metrics...
      </p>
    </Card>
  </TabsContent>
</Tabs>`}
				/>
			</Section>

			<Section id="full-width" title="Full Width Tabs">
				<ComponentPreview>
					<Tabs defaultValue="home" className="w-full">
						<TabsList className="w-full grid grid-cols-4">
							<TabsTrigger value="home">Home</TabsTrigger>
							<TabsTrigger value="products">Products</TabsTrigger>
							<TabsTrigger value="services">Services</TabsTrigger>
							<TabsTrigger value="contact">Contact</TabsTrigger>
						</TabsList>
						<TabsContent value="home">
							<div className="rounded-md border p-6">
								<h3 className="mb-2">Welcome Home</h3>
								<p className="text-sm text-muted-foreground">
									This is your home dashboard with an overview of everything.
								</p>
							</div>
						</TabsContent>
						<TabsContent value="products">
							<div className="rounded-md border p-6">
								<h3 className="mb-2">Products</h3>
								<p className="text-sm text-muted-foreground">
									Browse our catalog of products and services.
								</p>
							</div>
						</TabsContent>
						<TabsContent value="services">
							<div className="rounded-md border p-6">
								<h3 className="mb-2">Services</h3>
								<p className="text-sm text-muted-foreground">
									Explore the services we offer to our customers.
								</p>
							</div>
						</TabsContent>
						<TabsContent value="contact">
							<div className="rounded-md border p-6">
								<h3 className="mb-2">Contact Us</h3>
								<p className="text-sm text-muted-foreground">Get in touch with our support team.</p>
							</div>
						</TabsContent>
					</Tabs>
				</ComponentPreview>

				<CodeBlock
					title="Full Width"
					code={`<Tabs defaultValue="home" className="w-full">
  <TabsList className="w-full grid grid-cols-4">
    <TabsTrigger value="home">Home</TabsTrigger>
    <TabsTrigger value="products">Products</TabsTrigger>
    <TabsTrigger value="services">Services</TabsTrigger>
    <TabsTrigger value="contact">Contact</TabsTrigger>
  </TabsList>
  <TabsContent value="home">
    Content for home tab...
  </TabsContent>
</Tabs>`}
				/>
			</Section>

			<Section id="content-sections" title="Content Sections">
				<ComponentPreview>
					<Tabs defaultValue="description" className="w-full">
						<TabsList>
							<TabsTrigger value="description">Description</TabsTrigger>
							<TabsTrigger value="specifications">Specifications</TabsTrigger>
							<TabsTrigger value="reviews">Reviews</TabsTrigger>
						</TabsList>
						<TabsContent value="description" className="space-y-4">
							<div>
								<h3 className="mb-2">Product Description</h3>
								<p className="text-sm text-muted-foreground">
									This is a high-quality product designed to meet your needs. It features modern
									design, exceptional performance, and long-lasting durability.
								</p>
							</div>
							<div>
								<h4 className="font-medium mb-2 text-sm">Key Features</h4>
								<ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
									<li>Premium materials and construction</li>
									<li>Innovative design approach</li>
									<li>User-friendly interface</li>
									<li>Energy efficient operation</li>
								</ul>
							</div>
						</TabsContent>
						<TabsContent value="specifications" className="space-y-2">
							<div className="grid grid-cols-2 gap-4 text-sm">
								<div>
									<span className="font-medium">Dimensions:</span>
									<span className="text-muted-foreground ml-2">120 x 80 x 40 mm</span>
								</div>
								<div>
									<span className="font-medium">Weight:</span>
									<span className="text-muted-foreground ml-2">250g</span>
								</div>
								<div>
									<span className="font-medium">Material:</span>
									<span className="text-muted-foreground ml-2">Aluminum alloy</span>
								</div>
								<div>
									<span className="font-medium">Color:</span>
									<span className="text-muted-foreground ml-2">Space Gray</span>
								</div>
							</div>
						</TabsContent>
						<TabsContent value="reviews" className="space-y-4">
							<div className="rounded-md border p-4">
								<div className="flex items-center gap-2 mb-2">
									<span className="font-medium text-sm">John Doe</span>
									<span className="text-xs text-muted-foreground">2 days ago</span>
								</div>
								<p className="text-sm text-muted-foreground">
									Great product! Exactly what I was looking for. Highly recommend.
								</p>
							</div>
							<div className="rounded-md border p-4">
								<div className="flex items-center gap-2 mb-2">
									<span className="font-medium text-sm">Jane Smith</span>
									<span className="text-xs text-muted-foreground">1 week ago</span>
								</div>
								<p className="text-sm text-muted-foreground">
									Excellent quality and fast shipping. Very satisfied with my purchase.
								</p>
							</div>
						</TabsContent>
					</Tabs>
				</ComponentPreview>
			</Section>

			<Section id="accessibility" title="Accessibility">
				<ComponentPreview>
					<div className="space-y-4">
						<p className="text-sm text-muted-foreground">
							The Tabs component is fully accessible and follows WAI-ARIA patterns:
						</p>
						<ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
							<li>
								<code className="text-xs bg-muted px-1 py-0.5 rounded">role="tablist"</code> on the
								tabs list
							</li>
							<li>
								<code className="text-xs bg-muted px-1 py-0.5 rounded">role="tab"</code> on each tab
								trigger
							</li>
							<li>
								<code className="text-xs bg-muted px-1 py-0.5 rounded">role="tabpanel"</code> on
								each content panel
							</li>
							<li>
								<code className="text-xs bg-muted px-1 py-0.5 rounded">aria-selected</code>{' '}
								indicates the active tab
							</li>
							<li>Keyboard navigation with arrow keys (browser native)</li>
							<li>Focus management and visible focus indicators</li>
						</ul>
					</div>
				</ComponentPreview>
			</Section>
		</div>
	);
}
