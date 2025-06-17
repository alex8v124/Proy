import type { TeamMember } from "@/types";
import TeamMemberCard from "@/components/TeamMemberCard";

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
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Conoce a Nuestro Equipo</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            La fuerza impulsora detrás de nuestro éxito. Un grupo de individuos apasionados y talentosos dedicados a la excelencia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
