"use client";
import Link from 'next/link';
import { BookOpenText, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#why-invest', label: 'Courses' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300 ease-in-out",
      "bg-black/20 backdrop-blur-sm"
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className={cn(
          "flex items-center gap-2 hover:opacity-80 transition-opacity text-white"
        )}>
          <BookOpenText size={32} />
          <span className="text-2xl font-bold font-headline">TechFarm</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Button
                key={link.href}
                variant="ghost"
                asChild
                className={cn(
                  "transition-colors text-white hover:bg-white/10 hover:text-white",
                  isActive && "bg-white/20",
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            );
          })}
           <Button 
            variant="ghost" 
            size="icon" 
            asChild
            className={cn(
              'transition-colors text-white hover:bg-white/10'
            )}
           >
              <Link href="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                {isSheetOpen ? <X size={28} /> : <Menu size={28} />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-0">
               <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
               <SheetDescription className="sr-only">A list of navigation links for the site.</SheetDescription>
              <div className="p-6">
                 <Link href="/" className="flex items-center gap-2 text-primary mb-6">
                    <BookOpenText size={28} />
                    <span className="text-xl font-bold font-headline">TechFarm</span>
                </Link>
                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Button key={link.href} variant={pathname === link.href ? "secondary" : "ghost"} asChild className="justify-start text-lg">
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                  <Button variant={pathname === '/search' ? "secondary" : "ghost"} asChild className="justify-start text-lg">
                    <Link href="/search">Search</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
