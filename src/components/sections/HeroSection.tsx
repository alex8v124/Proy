import { Button } from "@/components/ui/button";
import { ArrowDown, Send, CodeXml } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-28 md:py-48 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.03]">
        {/* Subtle background pattern */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPattern" patternUnits="userSpaceOnUse" width="70" height="70" patternTransform="scale(1) rotate(0)"><rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,0)"/><path d="M10-20v40M0-10h20M10 0v20M0 10h20M10 20v20M0 30h20M10 40v20M0 50h20" stroke-width="1" stroke="hsl(var(--primary) / 0.2)" fill="none"></path></pattern></defs><rect width="100%" height="100%" fill="url(#heroPattern)"/></svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block p-3 mb-6 bg-primary/10 rounded-full">
          <CodeXml className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
          Soluciones que se adaptan a ti, tecnología que transforma.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-body text-muted-foreground">
          En All-in Dev Solutions S.R.L. creamos software innovador y escalable, aplicaciones web y de escritorio de alta calidad, 
          impulsando la transformación digital de empresas medianas en crecimiento.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:gap-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#portfolio">
              Ver Nuestro Trabajo <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-0.5 border-accent text-accent hover:bg-accent/10 hover:border-accent">
            <Link href="#contact">
              Contáctanos <Send className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
