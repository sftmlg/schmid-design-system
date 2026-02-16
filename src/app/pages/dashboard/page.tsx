import { MapPin, Search, Star, TrendingUp, Users } from 'lucide-react';
import { PageHeader } from '@/components/layout/page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const mockBookings = [
	{
		id: 'BK-2026-0247',
		customer: 'Familie Huber',
		route: 'Nauders → Innsbruck Flughafen',
		date: '16.02.2026',
		status: 'confirmed' as const,
		price: '€185,00',
	},
	{
		id: 'BK-2026-0248',
		customer: 'Skiclub Landeck',
		route: 'Serfaus → Fiss → Ladis',
		date: '17.02.2026',
		status: 'confirmed' as const,
		price: '€420,00',
	},
	{
		id: 'BK-2026-0249',
		customer: 'Thomas Winkler',
		route: 'E5 Shuttle Meran',
		date: '18.02.2026',
		status: 'pending' as const,
		price: '€95,00',
	},
	{
		id: 'BK-2026-0250',
		customer: 'Hotel Alpenrose',
		route: 'Nauders → Samnaun',
		date: '19.02.2026',
		status: 'confirmed' as const,
		price: '€145,00',
	},
	{
		id: 'BK-2026-0251',
		customer: 'Müller GmbH',
		route: 'Pfunds → Landeck Bahnhof',
		date: '20.02.2026',
		status: 'cancelled' as const,
		price: '€78,00',
	},
	{
		id: 'BK-2026-0252',
		customer: 'Andrea Schmidt',
		route: 'Ischgl → St. Anton',
		date: '21.02.2026',
		status: 'pending' as const,
		price: '€125,00',
	},
];

const metrics = [
	{
		title: 'Umsatz Februar',
		value: '€12.450',
		change: '+8,2%',
		icon: TrendingUp,
		description: 'Gegenüber Vormonat',
	},
	{
		title: 'Buchungen',
		value: '47',
		change: '+12',
		icon: Users,
		description: 'Aktuelle Woche',
	},
	{
		title: 'Aktive Routen',
		value: '23',
		change: '+3',
		icon: MapPin,
		description: 'Linien im Betrieb',
	},
	{
		title: 'Kundenzufriedenheit',
		value: '4,8',
		change: '⭐️',
		icon: Star,
		description: 'Durchschnittliche Bewertung',
	},
];

export default function DashboardPage() {
	return (
		<div className="container mx-auto max-w-7xl py-8 space-y-8">
			<PageHeader
				title="Dashboard"
				description="Übersicht über Ihre Buchungen, Umsätze und wichtigsten Kennzahlen"
				badge="Pages"
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{metrics.map((metric) => (
					<Card key={metric.title}>
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-sm">{metric.title}</CardTitle>
							<metric.icon className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl">{metric.value}</div>
							<p className="text-xs text-muted-foreground mt-1">
								{metric.change} {metric.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>

			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<div>
							<CardTitle>Aktuelle Buchungen</CardTitle>
							<CardDescription>Die letzten Buchungen und deren Status</CardDescription>
						</div>
						<div className="flex items-center gap-2">
							<div className="relative w-64">
								<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input placeholder="Suche nach Kunde oder Route..." className="pl-9" />
							</div>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="border-b">
									<th className="text-left py-3 px-4 text-sm text-muted-foreground">
										Buchungsnummer
									</th>
									<th className="text-left py-3 px-4 text-sm text-muted-foreground">Kunde</th>
									<th className="text-left py-3 px-4 text-sm text-muted-foreground">Route</th>
									<th className="text-left py-3 px-4 text-sm text-muted-foreground">Datum</th>
									<th className="text-left py-3 px-4 text-sm text-muted-foreground">Status</th>
									<th className="text-right py-3 px-4 text-sm text-muted-foreground">Preis</th>
								</tr>
							</thead>
							<tbody>
								{mockBookings.map((booking) => (
									<tr key={booking.id} className="border-b last:border-0">
										<td className="py-3 px-4 text-sm font-mono">{booking.id}</td>
										<td className="py-3 px-4 text-sm">{booking.customer}</td>
										<td className="py-3 px-4 text-sm">{booking.route}</td>
										<td className="py-3 px-4 text-sm">{booking.date}</td>
										<td className="py-3 px-4">
											<Badge
												variant={
													booking.status === 'confirmed'
														? 'default'
														: booking.status === 'pending'
															? 'secondary'
															: 'destructive'
												}
											>
												{booking.status === 'confirmed'
													? 'Bestätigt'
													: booking.status === 'pending'
														? 'Ausstehend'
														: 'Storniert'}
											</Badge>
										</td>
										<td className="py-3 px-4 text-sm text-right">{booking.price}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="mt-6 flex justify-center">
						<Button variant="outline">Alle Buchungen anzeigen</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
