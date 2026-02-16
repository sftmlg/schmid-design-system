import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { CodeBlock } from '@/components/docs/code-block';
import { ComponentPreview } from '@/components/docs/component-preview';
import { Section } from '@/components/docs/section';
import { PageHeader } from '@/components/layout/page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function TablesPage() {
	return (
		<div className="container mx-auto max-w-5xl py-8">
			<PageHeader
				title="Tables"
				description="Data tables for displaying structured information and records."
				badge="Components"
			/>

			<Section id="basic-table" title="Basic Table">
				<ComponentPreview>
					<div className="w-full overflow-x-auto">
						<table className="w-full border-collapse text-sm">
							<thead>
								<tr className="border-b border-border bg-muted/50">
									<th className="px-4 py-3 text-left font-medium">Name</th>
									<th className="px-4 py-3 text-left font-medium">Status</th>
									<th className="px-4 py-3 text-left font-medium">Role</th>
									<th className="px-4 py-3 text-left font-medium">Email</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-border transition-colors hover:bg-muted/20">
									<td className="px-4 py-3">John Doe</td>
									<td className="px-4 py-3">
										<Badge variant="success">Active</Badge>
									</td>
									<td className="px-4 py-3">Admin</td>
									<td className="px-4 py-3">john@example.com</td>
								</tr>
								<tr className="border-b border-border transition-colors hover:bg-muted/20">
									<td className="px-4 py-3">Jane Smith</td>
									<td className="px-4 py-3">
										<Badge variant="success">Active</Badge>
									</td>
									<td className="px-4 py-3">Editor</td>
									<td className="px-4 py-3">jane@example.com</td>
								</tr>
								<tr className="border-b border-border transition-colors hover:bg-muted/20">
									<td className="px-4 py-3">Bob Johnson</td>
									<td className="px-4 py-3">
										<Badge variant="warning">Pending</Badge>
									</td>
									<td className="px-4 py-3">Viewer</td>
									<td className="px-4 py-3">bob@example.com</td>
								</tr>
								<tr className="border-b border-border transition-colors hover:bg-muted/20">
									<td className="px-4 py-3">Alice Williams</td>
									<td className="px-4 py-3">
										<Badge variant="success">Active</Badge>
									</td>
									<td className="px-4 py-3">Admin</td>
									<td className="px-4 py-3">alice@example.com</td>
								</tr>
								<tr className="border-b border-border transition-colors hover:bg-muted/20">
									<td className="px-4 py-3">Charlie Brown</td>
									<td className="px-4 py-3">
										<Badge variant="destructive">Inactive</Badge>
									</td>
									<td className="px-4 py-3">Viewer</td>
									<td className="px-4 py-3">charlie@example.com</td>
								</tr>
							</tbody>
						</table>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Basic Table"
					code={`<table className="w-full border-collapse text-sm">
  <thead>
    <tr className="border-b border-border bg-muted/50">
      <th className="px-4 py-3 text-left font-medium">Name</th>
      <th className="px-4 py-3 text-left font-medium">Status</th>
      <th className="px-4 py-3 text-left font-medium">Role</th>
      <th className="px-4 py-3 text-left font-medium">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-border transition-colors hover:bg-muted/20">
      <td className="px-4 py-3">John Doe</td>
      <td className="px-4 py-3">
        <Badge variant="success">Active</Badge>
      </td>
      <td className="px-4 py-3">Admin</td>
      <td className="px-4 py-3">john@example.com</td>
    </tr>
    {/* More rows */}
  </tbody>
</table>`}
				/>
			</Section>

			<Section id="striped-table" title="Striped Table">
				<ComponentPreview>
					<div className="w-full overflow-x-auto">
						<table className="w-full border-collapse text-sm">
							<thead>
								<tr className="border-b border-border bg-muted/50">
									<th className="px-4 py-3 text-left font-medium">Product</th>
									<th className="px-4 py-3 text-left font-medium">Category</th>
									<th className="px-4 py-3 text-left font-medium">Price</th>
									<th className="px-4 py-3 text-left font-medium">Stock</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-border bg-muted/20 transition-colors hover:bg-muted/30">
									<td className="px-4 py-3 font-medium">Laptop Pro</td>
									<td className="px-4 py-3">Electronics</td>
									<td className="px-4 py-3">$1,299</td>
									<td className="px-4 py-3">45</td>
								</tr>
								<tr className="border-b border-border transition-colors hover:bg-muted/20">
									<td className="px-4 py-3 font-medium">Wireless Mouse</td>
									<td className="px-4 py-3">Accessories</td>
									<td className="px-4 py-3">$29</td>
									<td className="px-4 py-3">120</td>
								</tr>
								<tr className="border-b border-border bg-muted/20 transition-colors hover:bg-muted/30">
									<td className="px-4 py-3 font-medium">Keyboard</td>
									<td className="px-4 py-3">Accessories</td>
									<td className="px-4 py-3">$79</td>
									<td className="px-4 py-3">67</td>
								</tr>
								<tr className="border-b border-border transition-colors hover:bg-muted/20">
									<td className="px-4 py-3 font-medium">Monitor 27&quot;</td>
									<td className="px-4 py-3">Electronics</td>
									<td className="px-4 py-3">$349</td>
									<td className="px-4 py-3">23</td>
								</tr>
							</tbody>
						</table>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Striped Table"
					code={`<tbody>
  <tr className="border-b border-border bg-muted/20 transition-colors hover:bg-muted/30">
    <td className="px-4 py-3">Row 1</td>
  </tr>
  <tr className="border-b border-border transition-colors hover:bg-muted/20">
    <td className="px-4 py-3">Row 2</td>
  </tr>
  <tr className="border-b border-border bg-muted/20 transition-colors hover:bg-muted/30">
    <td className="px-4 py-3">Row 3</td>
  </tr>
</tbody>`}
				/>
			</Section>

			<Section id="table-with-actions" title="Table with Actions">
				<ComponentPreview>
					<div className="w-full overflow-x-auto">
						<table className="w-full border-collapse text-sm">
							<thead>
								<tr className="border-b border-border bg-muted/50">
									<th className="px-4 py-3 text-left font-medium">Task</th>
									<th className="px-4 py-3 text-left font-medium">Assignee</th>
									<th className="px-4 py-3 text-left font-medium">Status</th>
									<th className="px-4 py-3 text-right font-medium">Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-border transition-colors hover:bg-muted/20">
									<td className="px-4 py-3 font-medium">Update documentation</td>
									<td className="px-4 py-3">John Doe</td>
									<td className="px-4 py-3">
										<Badge variant="warning">In Progress</Badge>
									</td>
									<td className="px-4 py-3 text-right">
										<div className="flex justify-end gap-2">
											<Button variant="ghost" size="icon">
												<Edit className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon">
												<Trash className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon">
												<MoreHorizontal className="h-4 w-4" />
											</Button>
										</div>
									</td>
								</tr>
								<tr className="border-b border-border transition-colors hover:bg-muted/20">
									<td className="px-4 py-3 font-medium">Fix login bug</td>
									<td className="px-4 py-3">Jane Smith</td>
									<td className="px-4 py-3">
										<Badge variant="success">Completed</Badge>
									</td>
									<td className="px-4 py-3 text-right">
										<div className="flex justify-end gap-2">
											<Button variant="ghost" size="icon">
												<Edit className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon">
												<Trash className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon">
												<MoreHorizontal className="h-4 w-4" />
											</Button>
										</div>
									</td>
								</tr>
								<tr className="border-b border-border transition-colors hover:bg-muted/20">
									<td className="px-4 py-3 font-medium">Design new feature</td>
									<td className="px-4 py-3">Bob Johnson</td>
									<td className="px-4 py-3">
										<Badge>Not Started</Badge>
									</td>
									<td className="px-4 py-3 text-right">
										<div className="flex justify-end gap-2">
											<Button variant="ghost" size="icon">
												<Edit className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon">
												<Trash className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon">
												<MoreHorizontal className="h-4 w-4" />
											</Button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</ComponentPreview>

				<CodeBlock
					title="Table with Actions"
					code={`<tbody>
  <tr className="border-b border-border transition-colors hover:bg-muted/20">
    <td className="px-4 py-3">Task name</td>
    <td className="px-4 py-3">Assignee</td>
    <td className="px-4 py-3">
      <Badge>Status</Badge>
    </td>
    <td className="px-4 py-3 text-right">
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </td>
  </tr>
</tbody>`}
				/>
			</Section>
		</div>
	);
}
