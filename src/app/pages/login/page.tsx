import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1 text-center">
					<CardTitle className="text-2xl">Schmid Reisen</CardTitle>
					<CardDescription>Mitarbeiter-Login</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">E-Mail-Adresse</Label>
							<Input id="email" type="email" placeholder="name@bus-tirol.at" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Passwort</Label>
							<Input id="password" type="password" />
						</div>
					</div>
					<div className="space-y-4">
						<Button className="w-full">Anmelden</Button>
						<div className="text-center">
							<span className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
								Passwort vergessen?
							</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
