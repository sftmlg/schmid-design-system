import {
	ArrowLeft,
	Clock,
	Edit,
	Euro,
	Mail,
	MapPin,
	Phone,
	Printer,
	User,
	XCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DetailPage() {
	return (
		<div className="container mx-auto max-w-4xl py-8">
			<div className="mb-8">
				<Button variant="ghost" size="sm" className="mb-4">
					<ArrowLeft className="mr-2 h-4 w-4" />
					Zurück
				</Button>
				<div className="flex items-start justify-between">
					<div>
						<h1 className="text-3xl tracking-tight">Buchungsdetails</h1>
						<p className="mt-2 text-lg text-muted-foreground">
							Vollständige Übersicht über die Buchung
						</p>
					</div>
					<Badge variant="outline">Pages</Badge>
				</div>
			</div>

			<div className="space-y-6">
				{/* Buchungsübersicht */}
				<Card>
					<CardHeader>
						<div className="flex items-start justify-between">
							<div>
								<CardTitle>Buchung #BUS-2026-0847</CardTitle>
								<p className="mt-1 text-sm text-muted-foreground">Erstellt am 12.02.2026</p>
							</div>
							<Badge variant="success">Bestätigt</Badge>
						</div>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center gap-2 text-sm">
								<Clock className="h-4 w-4 text-muted-foreground" />
								<span>18.03.2026, 14:30 Uhr</span>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Streckendetails */}
				<Card>
					<CardHeader>
						<CardTitle>Streckendetails</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-6">
							<div className="flex gap-4">
								<div className="flex flex-col items-center">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
										<MapPin className="h-5 w-5" />
									</div>
									<div className="h-16 w-0.5 bg-border" />
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
										<MapPin className="h-5 w-5" />
									</div>
								</div>
								<div className="flex-1 space-y-6">
									<div>
										<p className="text-sm text-muted-foreground">Abholung</p>
										<p className="mt-1 text-base">Nauders, Dorfplatz</p>
										<p className="mt-1 text-sm text-muted-foreground">14:30 Uhr</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">Ziel</p>
										<p className="mt-1 text-base">Innsbruck Flughafen</p>
										<p className="mt-1 text-sm text-muted-foreground">16:45 Uhr (geschätzt)</p>
									</div>
								</div>
							</div>
							<div className="rounded-lg bg-muted p-4">
								<p className="text-sm text-muted-foreground">Kartendarstellung</p>
								<div className="mt-2 flex h-32 items-center justify-center rounded-md bg-background">
									<MapPin className="h-8 w-8 text-muted-foreground" />
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Kundeninformationen */}
				<Card>
					<CardHeader>
						<CardTitle>Kundeninformationen</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<User className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm">Familie Müller</span>
							</div>
							<div className="flex items-center gap-3">
								<Phone className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm">+43 664 123 4567</span>
							</div>
							<div className="flex items-center gap-3">
								<Mail className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm">mueller@example.com</span>
							</div>
							<div className="mt-4 rounded-lg bg-muted p-4">
								<p className="text-sm text-muted-foreground">Besondere Wünsche</p>
								<p className="mt-2 text-sm">
									Bitte zusätzlichen Gepäckraum für Skiausrüstung berücksichtigen. 4 Personen mit je
									2 Koffern und Skiern.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Preisübersicht */}
				<Card>
					<CardHeader>
						<CardTitle>Preisübersicht</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">Grundpreis</span>
								<span>€ 160,00</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">Zusätzliches Gepäck</span>
								<span>€ 30,00</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">Vorauszahlungs-Rabatt</span>
								<span className="text-success">- € 5,00</span>
							</div>
							<div className="border-t pt-3">
								<div className="flex items-center justify-between">
									<span className="text-base">Gesamtbetrag</span>
									<span className="text-xl">€ 185,00</span>
								</div>
							</div>
							<div className="rounded-lg bg-success/10 p-3">
								<p className="text-sm text-success-foreground">
									<Euro className="mr-1 inline h-4 w-4" />
									Zahlung erfolgreich abgeschlossen
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Aktionen */}
				<div className="flex flex-wrap gap-3">
					<Button variant="outline">
						<Edit className="mr-2 h-4 w-4" />
						Bearbeiten
					</Button>
					<Button variant="outline">
						<Printer className="mr-2 h-4 w-4" />
						Drucken
					</Button>
					<Button variant="destructive">
						<XCircle className="mr-2 h-4 w-4" />
						Stornieren
					</Button>
				</div>
			</div>
		</div>
	);
}
