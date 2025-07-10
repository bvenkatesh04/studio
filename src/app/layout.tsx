
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';
import { AnimatedPage } from '@/components/custom/AnimatedPage';
import { ThemeProvider } from '@/hooks/use-theme';
import { FavoritesProvider } from '@/hooks/use-favorites';
import { ProgressProvider } from '@/hooks/use-progress';
import LiveChatWidget from '@/components/custom/LiveChatWidget';

export const metadata: Metadata = {
  title: 'TechFarm',
  description: 'Software training courses by TechFarm',
  keywords: 'online courses, programming, devops, cloud computing, aws, data engineering, software testing, selenium, cypress, java, python, kubernetes, docker, terraform, ansible, jenkins',
  authors: [{ name: 'TechFarm' }],
  creator: 'TechFarm',
  publisher: 'TechFarm',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techfarm.dev',
    siteName: 'TechFarm',
    title: 'TechFarm - Master Tomorrow\'s Tech Today',
    description: 'Transform your career with industry-leading courses in DevOps, Cloud Computing, Data Engineering, Testing, and Programming.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechFarm - Master Tomorrow\'s Tech Today',
    description: 'Transform your career with industry-leading courses in DevOps, Cloud Computing, Data Engineering, Testing, and Programming.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#22C55E" />
        <meta name="msapplication-TileColor" content="#22C55E" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <ThemeProvider defaultTheme="light" storageKey="techfarm-theme">
          <FavoritesProvider>
            <ProgressProvider>
              <Header />
              <main className="flex-grow">
                <AnimatedPage>{children}</AnimatedPage>
              </main>
              <Footer />
              <LiveChatWidget />
              <Toaster />
            </ProgressProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
