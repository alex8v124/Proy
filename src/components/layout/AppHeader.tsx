import { CodeXml } from 'lucide-react';
import Link from 'next/link';

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 shadow-md bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <CodeXml className="h-9 w-9 text-primary group-hover:text-accent transition-colors duration-300" />
          <h1 className="text-2xl font-bold font-headline text-foreground group-hover:text-accent transition-colors duration-300">
            All-in Dev Solutions
          </h1>
        </Link>
        <nav className="hidden md:flex gap-6"> {/* Increased gap */}
          <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors font-medium">Portafolio</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">Nosotros</a>
          <a href="#team" className="text-muted-foreground hover:text-primary transition-colors font-medium">Equipo</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
