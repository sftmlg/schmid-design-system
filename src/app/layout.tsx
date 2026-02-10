import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/layout/sidebar';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Design System',
	description: 'Component design system and brand reference',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
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
