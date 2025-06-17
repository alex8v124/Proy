import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-24 md:py-40 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-headline">
          Soluciones que se adaptan a ti, tecnología que transforma.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-body">
          En All-in Dev Solutions S.R.L. creamos software innovador, aplicaciones web y de escritorio de alta calidad, 
          impulsando tu transformación digital.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow text-secondary-foreground hover:bg-secondary/80">
            <Link href="#portfolio">
              Ver Nuestro Trabajo <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-shadow border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="#contact">
              Contáctanos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
