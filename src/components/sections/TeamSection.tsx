
"use client";
import type { TeamMember } from "@/types";
import TeamMemberCard from "@/components/TeamMemberCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dra. Elara Vance",
    role: "Directora Ejecutiva (CEO)",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "ceo mujer",
    expertise: ["Visión Estratégica", "Liderazgo", "Gestión de Innovación", "Análisis de Mercado"],
    bio: "Impulsando la visión de la empresa con más de 15 años de experiencia en liderazgo tecnológico.",
  },
  {
    id: "2",
    name: "Marcus Cole",
    role: "Director de Tecnología (CTO)",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "cto hombre",
    expertise: ["Desarrollo Full-Stack", "Arquitectura de Sistemas", "Integración IA", "Soluciones Cloud"],
    bio: "Un visionario tecnológico dedicado a construir soluciones escalables y de vanguardia.",
  },
  {
    id: "3",
    name: "Sofía Chen",
    role: "Diseñadora UX/UI Principal",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "diseñadora mujer",
    expertise: ["Diseño Centrado en el Usuario", "Prototipado", "Diseño de Interacción", "Accesibilidad"],
    bio: "Apasionada por crear experiencias de usuario intuitivas y atractivas que deleitan.",
  },
  {
    id: "4",
    name: "Javier Rodríguez",
    role: "Ingeniero de Software Senior",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "ingeniero hombre",
    expertise: ["Backend Development", "API Design", "Microservicios", "DevOps"],
    bio: "Experto en construir la espina dorsal de aplicaciones complejas y robustas.",
  },
  {
    id: "5",
    name: "Laura Gómez",
    role: "Desarrolladora Frontend",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "desarrolladora mujer",
    expertise: ["React", "Vue.js", "CSS Avanzado", "Performance Web"],
    bio: "Transformando diseños en interfaces interactivas y visualmente atractivas.",
  },
  {
    id: "6",
    name: "Carlos Silva",
    role: "Especialista en Bases de Datos",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "especialista base datos",
    expertise: ["SQL", "NoSQL", "Optimización de Consultas", "Seguridad de Datos"],
    bio: "Garantizando la integridad y eficiencia de los datos que impulsan las aplicaciones.",
  },
  {
    id: "7",
    name: "Ana Torres",
    role: "Gerente de Proyectos",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "gerente proyectos mujer",
    expertise: ["Metodologías Ágiles", "Scrum", "Gestión de Equipos", "Planificación Estratégica"],
    bio: "Liderando proyectos desde la concepción hasta la entrega exitosa, asegurando la calidad.",
  },
  {
    id: "8",
    name: "David Luna",
    role: "Ingeniero QA",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "ingeniero qa",
    expertise: ["Pruebas Automatizadas", "Pruebas de Rendimiento", "Integración Continua", "Testing Manual"],
    bio: "Comprometido con la calidad y la fiabilidad del software a través de pruebas exhaustivas.",
  },
];

export default function TeamSection() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Conoce a Nuestro Equipo</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            La fuerza impulsora detrás de nuestro éxito. Un grupo de individuos apasionados y talentosos dedicados a la excelencia.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.play}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {teamMembers.map((member) => (
              <CarouselItem key={member.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <TeamMemberCard member={member} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-20px] sm:left-[-40px] top-1/2 -translate-y-1/2 hidden sm:flex z-10" />
          <CarouselNext className="absolute right-[-20px] sm:right-[-40px] top-1/2 -translate-y-1/2 hidden sm:flex z-10" />
        </Carousel>
      </div>
    </section>
  );
}
