
import { Button } from "@/components/ui/button";
import { ArrowDown, CodeXml } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-28 md:py-48 text-foreground overflow-hidden bg-gradient-to-br from-background via-[hsl(var(--accent)/0.05)] to-[hsl(var(--primary)/0.1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block p-3 mb-6 bg-accent/10 rounded-full shadow-lg">
          <CodeXml className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-headline tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-text-gradient">
          Soluciones que se adaptan a ti, tecnología que transforma.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-body text-muted-foreground">
          En All-in Dev Solutions S.R.L. creamos software innovador y escalable, aplicaciones web y de escritorio de alta calidad, 
          impulsando la transformación digital de empresas medianas en crecimiento.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:gap-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base md:text-lg">
            <Link href="#portfolio">
              Ver Nuestro Trabajo <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
