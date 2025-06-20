
"use client";
import Link from 'next/link';
import { BookOpenText, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  // { href: '/profile', label: 'Profile' }, // Removed Profile link
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <BookOpenText size={32} />
          <span className="text-2xl font-bold font-headline">TechFarm UI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild className={pathname === link.href ? 'text-primary font-semibold' : 'text-foreground'}>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <Input
              type="search"
              placeholder="Search courses..."
              className="h-9 w-48 bg-background border-primary/50 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search courses"
            />
            <Button type="submit" variant="outline" size="icon" className="h-9 w-9 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
              <Search size={18} />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          {/* Removed UserCircle icon and profile link
          <Link href="/profile" aria-label="User Profile">
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
              <UserCircle size={28} />
            </Button>
          </Link>
          */}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                {isSheetOpen ? <X size={28} /> : <Menu size={28} />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-0">
              <div className="p-6">
                 <Link href="/" className="flex items-center gap-2 text-primary mb-6">
                    <BookOpenText size={28} />
                    <span className="text-xl font-bold font-headline">TechFarm UI</span>
                </Link>
                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Button key={link.href} variant={pathname === link.href ? "secondary" : "ghost"} asChild className="justify-start text-lg">
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                   <form onSubmit={handleSearch} className="flex flex-col gap-2 mt-4">
                    <Input
                      type="search"
                      placeholder="Search courses..."
                      className="h-10 bg-background border-primary/50 focus:border-primary"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label="Search courses"
                    />
                    <Button type="submit" variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                      <Search size={18} className="mr-2"/> Search
                    </Button>
                  </form>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
