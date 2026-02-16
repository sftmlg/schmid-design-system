import type { Metadata } from 'next';
import { JetBrains_Mono, Raleway } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/layout/sidebar';

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin', 'latin-ext'],
	weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Schmid Design System',
	description: 'Brand design system for Schmid Reisen · Bus, Taxi & Bikeshuttle',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${raleway.variable} ${jetbrainsMono.variable}`}>
			<body className="antialiased">
				<div className="flex min-h-screen">
					<Sidebar />
					<main className="flex-1 overflow-auto">
						<div className="mx-auto max-w-4xl px-8 py-12">{children}</div>
					</main>
				</div>
			</body>
		</html>
	);
}
