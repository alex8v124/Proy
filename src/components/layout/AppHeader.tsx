import { CodeXml } from 'lucide-react';
import Link from 'next/link';

export default function AppHeader() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 shadow-md bg-card">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <CodeXml className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
          <h1 className="text-2xl font-bold font-headline text-primary group-hover:text-accent transition-colors">
            All-in Dev Solutions
          </h1>
        </Link>
        <nav className="hidden md:flex gap-4">
          <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="#team" className="text-foreground hover:text-primary transition-colors">Team</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
