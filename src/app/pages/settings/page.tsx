import { PageHeader } from '@/components/layout/page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function SettingsPage() {
	return (
		<div className="container mx-auto max-w-4xl py-8">
			<PageHeader
				title="Einstellungen"
				description="Verwalten Sie Ihr Benutzerprofil und Systemeinstellungen."
				badge="Pages"
			/>

			<div className="mt-8 space-y-8">
				{/* Profil Section */}
				<Card>
					<CardHeader>
						<CardTitle>Profil</CardTitle>
						<CardDescription>Ihre persönlichen Informationen und Kontaktdaten.</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="space-y-2">
								<label htmlFor="firstName" className="text-sm text-muted-foreground">
									Vorname
								</label>
								<Input id="firstName" defaultValue="Jürgen" />
							</div>
							<div className="space-y-2">
								<label htmlFor="lastName" className="text-sm text-muted-foreground">
									Nachname
								</label>
								<Input id="lastName" defaultValue="Schmid" />
							</div>
						</div>
						<div className="space-y-2">
							<label htmlFor="email" className="text-sm text-muted-foreground">
								E-Mail
							</label>
							<Input id="email" type="email" defaultValue="info@bus-tirol.at" />
						</div>
						<div className="space-y-2">
							<label htmlFor="phone" className="text-sm text-muted-foreground">
								Telefon
							</label>
							<Input id="phone" type="tel" defaultValue="+43 664 121 7050" />
						</div>
					</CardContent>
				</Card>

				{/* Benachrichtigungen Section */}
				<Card>
					<CardHeader>
						<CardTitle>Benachrichtigungen</CardTitle>
						<CardDescription>
							Legen Sie fest, wie Sie über neue Buchungen und Updates informiert werden möchten.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<label htmlFor="emailNotifications" className="text-sm cursor-pointer">
									E-Mail-Benachrichtigungen
								</label>
								<p className="text-sm text-muted-foreground">Erhalten Sie Updates per E-Mail</p>
							</div>
							<input
								type="checkbox"
								id="emailNotifications"
								defaultChecked
								className="h-4 w-4 cursor-pointer"
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<label htmlFor="smsNotifications" className="text-sm cursor-pointer">
									SMS-Benachrichtigungen
								</label>
								<p className="text-sm text-muted-foreground">
									Erhalten Sie dringende Updates per SMS
								</p>
							</div>
							<input
								type="checkbox"
								id="smsNotifications"
								defaultChecked
								className="h-4 w-4 cursor-pointer"
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<label htmlFor="pushNotifications" className="text-sm cursor-pointer">
									Push-Benachrichtigungen
								</label>
								<p className="text-sm text-muted-foreground">
									Erhalten Sie Benachrichtigungen in der App
								</p>
							</div>
							<input type="checkbox" id="pushNotifications" className="h-4 w-4 cursor-pointer" />
						</div>
					</CardContent>
				</Card>

				{/* Darstellung Section */}
				<Card>
					<CardHeader>
						<CardTitle>Darstellung</CardTitle>
						<CardDescription>Sprach- und Anzeigeeinstellungen für die Anwendung.</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<label htmlFor="language" className="text-sm text-muted-foreground">
								Sprache
							</label>
							<select
								id="language"
								className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
							>
								<option value="de">Deutsch</option>
								<option value="en">English</option>
								<option value="it">Italiano</option>
							</select>
						</div>
						<div className="space-y-2">
							<div className="text-sm text-muted-foreground">Zeitzone</div>
							<div className="flex items-center gap-2">
								<span className="text-sm">Europe/Vienna</span>
								<Badge variant="outline">GMT+1</Badge>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Save Button */}
				<div className="flex justify-end">
					<Button size="lg">Speichern</Button>
				</div>
			</div>
		</div>
	);
}
