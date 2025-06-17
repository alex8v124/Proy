
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
    name: "Roy Meza",
    role: "Ingeniero Backend",
    imageUrl: "https://media.licdn.com/dms/image/D4E35AQG5kC2HeZlP9g/profile-framedphoto-shrink_800_800/0/1748852519439?e=1750802400&v=beta&t=sXpIHFgfIdCL_Eo550M-0Oim_9pEBcF74fqI1uoG6TU",
    imageHint: "foto perfil",
    expertise: ["Desarrollo Backend", "Node.js", "Bases de Datos", "APIs"],
    bio: "Desarrollador Backend con experiencia en la creación de sistemas robustos y escalables.",
    linkedinUrl: "https://www.linkedin.com/in/roymeza/",
  },
  {
    id: "2",
    name: "Omer Runco",
    role: "Desarrollador Frontend",
    imageUrl: "https://media.licdn.com/dms/image/D4E03AQH1NtOr1Jlmcg/profile-displayphoto-shrink_800_800/0/1748906912510?e=1755734400&v=beta&t=2YqnKOpm7tkJQgdCbAeTnFnJJpjMwg1OWKj94xFq-Q4",
    imageHint: "foto perfil",
    expertise: ["Desarrollo Frontend", "React", "Next.js", "UI/UX"],
    bio: "Especialista en Frontend enfocado en crear interfaces de usuario interactivas y eficientes.",
    linkedinUrl: "https://www.linkedin.com/in/omer-runco-b7a261310/",
  },
  {
    id: "3",
    name: "Juan Miranda",
    role: "Desarrollador de Software",
    imageUrl: "https://media.licdn.com/dms/image/D5603AQGn2Oxslr6Deg/profile-displayphoto-shrink_800_800/0/1747434320679?e=1755734400&v=beta&t=gewGmcxuXK_HJKnL2RjNLKIdslqZUeJSOH8sf19EvR0",
    imageHint: "foto perfil",
    expertise: ["Desarrollo Web", "Aplicaciones Móviles", "Gestión de Proyectos"],
    bio: "Desarrollador versátil con pasión por la tecnología y la resolución de problemas complejos.",
    linkedinUrl: "https://www.linkedin.com/in/juan-alexander-miranda-quispe-0673812a3/",
  },
  {
    id: "4",
    name: "Rubén Cuadros",
    role: "Ingeniero Backend",
    imageUrl: "https://media.licdn.com/dms/image/D5603AQEYBIayW8SNPA/profile-displayphoto-shrink_400_400/0/1743989435538?e=1755734400&v=beta&t=5HqGCqZWhlDmsfgmg_Xkb8_mnCYLm41Z9STAYvwuDpU",
    imageHint: "foto perfil",
    expertise: ["Arquitectura de Software", "Microservicios", "Cloud Computing", "Seguridad"],
    bio: "Arquitecto de software y desarrollador backend, enfocado en soluciones innovadoras y seguras.",
    linkedinUrl: "https://www.linkedin.com/in/ruben-cuadros/",
  },
  {
    id: "5",
    name: "Jessica Parra",
    role: "Desarrolladora Frontend",
    imageUrl: "https://media.licdn.com/dms/image/D4D03AQH0stfVqoqxDg/profile-displayphoto-shrink_800_800/0/1727061262584?e=1755734400&v=beta&t=6IpdqT4M0vZiSUjZlNAGHMwcARoGEPanLRcRdRXbaeQ",
    imageHint: "foto perfil",
    expertise: ["Diseño Web Responsivo", "JavaScript", "Tailwind CSS", "Accesibilidad"],
    bio: "Desarrolladora Frontend comprometida con la creación de experiencias web visualmente atractivas y accesibles.",
    linkedinUrl: "https://www.linkedin.com/in/jessica-parra24/",
  },
];

export default function TeamSection() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="team" className="py-16 md:py-24 bg-card">
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
            loop: teamMembers.length > 2, // Loop si hay suficientes items para que tenga sentido
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
