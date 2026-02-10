import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/docs/section';
import { ComponentPreview } from '@/components/docs/component-preview';
import { CodeBlock } from '@/components/docs/code-block';
import {
	Home,
	Search,
	Menu,
	MoreHorizontal,
	MoreVertical,
	ChevronDown,
	ChevronUp,
	ChevronLeft,
	ChevronRight,
	Plus,
	Minus,
	X,
	Check,
	Star,
	Heart,
	Bookmark,
	Filter,
	SortAsc,
	SortDesc,
	Grid3x3,
	List,
	Columns3,
	Rows4,
	Square,
	Settings,
	User,
	Bell,
	Mail,
	Calendar,
	Clock,
	Download,
	Upload,
	Share,
	ExternalLink,
	Copy,
	Trash,
	Edit,
	Eye,
	EyeOff,
	type LucideIcon,
} from 'lucide-react';

export default function IconsPage() {
	const icons: Array<{ Icon: LucideIcon; name: string }> = [
		{ Icon: Home, name: 'Home' },
		{ Icon: Search, name: 'Search' },
		{ Icon: Menu, name: 'Menu' },
		{ Icon: MoreHorizontal, name: 'MoreHorizontal' },
		{ Icon: MoreVertical, name: 'MoreVertical' },
		{ Icon: ChevronDown, name: 'ChevronDown' },
		{ Icon: ChevronUp, name: 'ChevronUp' },
		{ Icon: ChevronLeft, name: 'ChevronLeft' },
		{ Icon: ChevronRight, name: 'ChevronRight' },
		{ Icon: Plus, name: 'Plus' },
		{ Icon: Minus, name: 'Minus' },
		{ Icon: X, name: 'X' },
		{ Icon: Check, name: 'Check' },
		{ Icon: Star, name: 'Star' },
		{ Icon: Heart, name: 'Heart' },
		{ Icon: Bookmark, name: 'Bookmark' },
		{ Icon: Filter, name: 'Filter' },
		{ Icon: SortAsc, name: 'SortAsc' },
		{ Icon: SortDesc, name: 'SortDesc' },
		{ Icon: Grid3x3, name: 'Grid3x3' },
		{ Icon: List, name: 'List' },
		{ Icon: Columns3, name: 'Columns3' },
		{ Icon: Rows4, name: 'Rows4' },
		{ Icon: Square, name: 'Square' },
		{ Icon: Settings, name: 'Settings' },
		{ Icon: User, name: 'User' },
		{ Icon: Bell, name: 'Bell' },
		{ Icon: Mail, name: 'Mail' },
		{ Icon: Calendar, name: 'Calendar' },
		{ Icon: Clock, name: 'Clock' },
		{ Icon: Download, name: 'Download' },
		{ Icon: Upload, name: 'Upload' },
		{ Icon: Share, name: 'Share' },
		{ Icon: ExternalLink, name: 'ExternalLink' },
		{ Icon: Copy, name: 'Copy' },
		{ Icon: Trash, name: 'Trash' },
		{ Icon: Edit, name: 'Edit' },
		{ Icon: Eye, name: 'Eye' },
		{ Icon: EyeOff, name: 'EyeOff' },
	];

	return (
		<div className='container mx-auto max-w-5xl py-8'>
			<PageHeader
				title='Icons'
				description='Essential interface icons powered by Lucide for buttons, menus, controls, and UI interactions.'
				badge='Foundation'
			/>

			<Section id='interface-icons' title='Interface Icons'>
				<ComponentPreview>
					<div className='grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
						{icons.map(({ Icon, name }) => (
							<div
								key={name}
								className='flex flex-col items-center justify-center gap-2 rounded-lg border border-border p-4 hover:bg-accent'
							>
								<Icon className='h-6 w-6' />
								<span className='text-center text-xs text-muted-foreground'>
									{name}
								</span>
							</div>
						))}
					</div>
				</ComponentPreview>

				<CodeBlock
					title='Usage'
					code={`import { Home, Search, Settings } from 'lucide-react';

// Default size (24x24)
<Home />

// Custom size
<Search className="h-4 w-4" />
<Settings className="h-6 w-6" />

// With color
<Home className="text-primary" />
<Search className="text-muted-foreground" />

// In buttons
<Button>
  <Plus className="h-4 w-4" />
  Add Item
</Button>`}
				/>
			</Section>
		</div>
	);
}
