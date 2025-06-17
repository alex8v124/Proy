
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

// Import local images - PLEASE VERIFY THE FILENAMES AND EXTENSIONS
import royMezaImg from '@/components/img/roy-meza.jpg';
import omerRuncoImg from '@/components/img/omer-runco.jpg';
import juanMirandaImg from '@/components/img/juan-miranda.jpg';
import rubenCuadrosImg from '@/components/img/ruben-cuadros.jpg';
// !! CHECK THIS LINE CAREFULLY AND MATCH IT TO YOUR ACTUAL FILE !!
import jessicaParraImg from '@/components/img/jessica-parra.png'; // Module not found error points here. Verify this filename and extension.
// Assuming you will add images for Jahmil, Roberto, Antoni
// For now, using placeholders for them or they won't appear if not in the array
import placeholderUser1 from '@/components/img/placeholder-user1.png';
import placeholderUser2 from '@/components/img/placeholder-user2.png';
import placeholderUser3 from '@/components/img/placeholder-user3.png';


const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Roy Meza",
    role: "Ingeniero Backend",
    imageUrl: royMezaImg,
    imageHint: "foto perfil",
    expertise: ["Desarrollo Backend", "Node.js", "Bases de Datos", "APIs"],
    bio: "Desarrollador Backend con experiencia en la creación de sistemas robustos y escalables.",
    linkedinUrl: "https://www.linkedin.com/in/roymeza/",
  },
  {
    id: "2",
    name: "Omer Runco",
    role: "Desarrollador Frontend",
    specialTitle: "El jefazo ricazo",
    imageUrl: omerRuncoImg,
    imageHint: "foto perfil",
    expertise: ["Desarrollo Frontend", "React", "Next.js", "UI/UX"],
    bio: "Especialista en Frontend enfocado en crear interfaces de usuario interactivas y eficientes.",
    linkedinUrl: "https://www.linkedin.com/in/omer-runco-b7a261310/",
  },
  {
    id: "3",
    name: "Juan Miranda",
    role: "Desarrollador de Software",
    imageUrl: juanMirandaImg,
    imageHint: "foto perfil",
    expertise: ["Desarrollo Web", "Aplicaciones Móviles", "Gestión de Proyectos"],
    bio: "Desarrollador versátil con pasión por la tecnología y la resolución de problemas complejos.",
    linkedinUrl: "https://www.linkedin.com/in/juan-alexander-miranda-quispe-0673812a3/",
  },
  {
    id: "4",
    name: "Rubén Cuadros",
    role: "Ingeniero Backend",
    imageUrl: rubenCuadrosImg,
    imageHint: "foto perfil",
    expertise: ["Arquitectura de Software", "Microservicios", "Cloud Computing", "Seguridad"],
    bio: "Arquitecto de software y desarrollador backend, enfocado en soluciones innovadoras y seguras.",
    linkedinUrl: "https://www.linkedin.com/in/ruben-cuadros/",
  },
  {
    id: "5",
    name: "Jessica Parra",
    role: "Desarrolladora Frontend",
    imageUrl: jessicaParraImg,
    imageHint: "foto perfil",
    expertise: ["Diseño Web Responsivo", "JavaScript", "Tailwind CSS", "Accesibilidad"],
    bio: "Desarrolladora Frontend comprometida con la creación de experiencias web visualmente atractivas y accesibles.",
    linkedinUrl: "https://www.linkedin.com/in/jessica-parra24/",
  },
  {
    id: "6",
    name: "Jahmil", // Placeholder, update with actual data
    role: "Desarrollador Frontend",
    imageUrl: placeholderUser1, // Use placeholder image
    imageHint: "foto perfil",
    expertise: ["Frontend", "React", "Vue"], // Example expertise
    bio: "Desarrollador Frontend apasionado por las nuevas tecnologías.",
    // linkedinUrl: "https://linkedin.com/in/jahmil", // Add actual LinkedIn URL
  },
  {
    id: "7",
    name: "Antoni Cano",
    role: "Cotización y Negociación",
    imageUrl: placeholderUser2, // Use placeholder image
    imageHint: "foto perfil",
    expertise: ["Cotizaciones", "Negociación de Proyectos", "Relación con Clientes"],
    bio: "Encargado de la cotización de proyectos y la negociación con clientes para asegurar el éxito mutuo.",
    // linkedinUrl: "https://linkedin.com/in/antoni-cano", // Add actual LinkedIn URL
  },
  {
    id: "8",
    name: "Roberto", // Placeholder, update with actual data
    role: "Arquitecto de Software",
    imageUrl: placeholderUser3, // Use placeholder image
    imageHint: "foto perfil",
    expertise: ["Arquitectura de Software", "Liderazgo Técnico", "Diagramas de Sistema"], // Example expertise
    bio: "Arquitecto de Software encargado de la estructura y visión técnica de los proyectos.",
    // linkedinUrl: "https://linkedin.com/in/roberto-arquitecto", // Add actual LinkedIn URL
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
            loop: teamMembers.length > 2, // Enable loop only if there are enough items for it to make sense
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
