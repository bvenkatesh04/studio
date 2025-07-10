import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import TechFarmLogo from './TechFarmLogo';
import NewsletterSignup from './NewsletterSignup';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12">
          <NewsletterSignup variant="compact" className="max-w-md mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-muted-foreground">
          {/* About Section */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity">
              <TechFarmLogo size={32} animated={false} />
              <span className="text-xl font-bold font-headline">TechFarm</span>
            </Link>
            <p className="text-sm pr-8">
              Empowering the next generation of tech professionals with high-quality, hands-on courses designed to build real-world skills.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#why-invest" className="hover:text-primary transition-colors">Courses</Link></li>
              <li><Link href="/community" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/search" className="hover:text-primary transition-colors">Search</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={24} />
                 <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
                 <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/50 text-center text-sm">
          <p>&copy; {currentYear} TechFarm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}