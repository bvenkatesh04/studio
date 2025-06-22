import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';
import { AnimatedPage } from '@/components/custom/AnimatedPage';

export const metadata: Metadata = {
  title: 'TechFarm UI',
  description: 'Software training courses by TechFarm UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <AnimatedPage>{children}</AnimatedPage>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
