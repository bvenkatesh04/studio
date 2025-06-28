"use client";
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import TechFarmLogo from './TechFarmLogo';
import AnimatedButton from './AnimatedButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#why-invest', label: 'Courses' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const navItemVariants = {
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: { duration: 0.3 }
    }
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={cn(
        "sticky top-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50" 
          : "bg-black/20 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <motion.div
          variants={logoVariants}
          whileHover="hover"
        >
          <Link href="/" className={cn(
            "flex items-center gap-3 text-primary hover:opacity-80 transition-opacity duration-300"
          )}>
            <TechFarmLogo size={36} animated={false} />
            <span className="text-xl sm:text-2xl font-bold font-headline">TechFarm</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.href}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 + 0.3 }
                }}
              >
                <Button
                  variant="ghost"
                  asChild
                  className={cn(
                    "transition-all duration-300 text-primary hover:bg-primary/10 hover:text-primary relative overflow-hidden",
                    isActive && "bg-primary/20 text-primary font-semibold",
                  )}
                >
                  <Link href={link.href}>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </Button>
              </motion.div>
            );
          })}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.6 }
            }}
          >
            <AnimatedButton 
              variant="ghost" 
              size="icon" 
              asChild
              shimmer
              className={cn(
                'transition-colors text-primary hover:bg-primary/10'
              )}
            >
              <Link href="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </AnimatedButton>
          </motion.div>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                  <AnimatePresence mode="wait">
                    {isSheetOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={28} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu size={28} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[280px] sm:w-[350px] bg-card/95 backdrop-blur-md p-0 border-l border-border/50"
            >
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <SheetDescription className="sr-only">A list of navigation links for the site.</SheetDescription>
              
              <motion.div 
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-6 h-full flex flex-col"
              >
                <motion.div variants={mobileNavItemVariants}>
                  <Link href="/" className="flex items-center gap-3 text-primary mb-8">
                    <TechFarmLogo size={32} animated={false} />
                    <span className="text-xl font-bold font-headline">TechFarm</span>
                  </Link>
                </motion.div>
                
                <nav className="flex flex-col gap-3 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={mobileNavItemVariants}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant={pathname === link.href ? "secondary" : "ghost"} 
                        asChild 
                        className="justify-start text-lg w-full h-12 transition-all duration-300"
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    </motion.div>
                  ))}
                  
                  <motion.div variants={mobileNavItemVariants}>
                    <Button 
                      variant={pathname === '/search' ? "secondary" : "ghost"} 
                      asChild 
                      className="justify-start text-lg w-full h-12 transition-all duration-300"
                    >
                      <Link href="/search">
                        <Search className="mr-3 h-5 w-5" />
                        Search
                      </Link>
                    </Button>
                  </motion.div>
                </nav>

                <motion.div 
                  variants={mobileNavItemVariants}
                  className="mt-auto pt-6 border-t border-border/50"
                >
                  <p className="text-sm text-muted-foreground text-center">
                    © 2024 TechFarm. All rights reserved.
                  </p>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}