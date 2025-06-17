
import { Button } from "@/components/ui/button";
import { ArrowDown, CodeXml } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-foreground overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Fondo Hero All-in Dev Solutions"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="ciudad noche tecnologia"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="inline-block p-3 mb-6 bg-accent/20 rounded-full shadow-lg border border-accent/50">
          <CodeXml className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-headline tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-text-gradient">
          Soluciones que se adaptan a ti, tecnología que transforma.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-body text-muted-foreground/90">
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
