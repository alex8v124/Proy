
import type { PortfolioProject } from "@/types";
import PortfolioCard from "@/components/PortfolioCard";

export const projects: PortfolioProject[] = [
  {
    id: "1",
    name: "Sitio Web Institucional - Winnetka",
    imageUrl: "/images/pag_winnetka.png",
    imageHint: "school website",
    client: "CEP Winnetka",
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "Tailwind CSS"],
    problemSolved: "El centro educativo necesitaba una presencia digital moderna para comunicar su propuesta de valor, historia y niveles educativos, además de facilitar un portal de preinscripción en línea para nuevos apoderados.",
    initialDescription: `Se desarrolló un sitio web institucional completo y un portal administrativo. El sitio público presenta la misión, visión, historia y oferta educativa del colegio, mientras que el portal facilita la gestión de preinscripciones, apoderados y docentes, unificando la comunicación y los procesos en una plataforma digital.
    Credenciales de prueba:
    Admin: admin@winnetka.edu.pe | admin123
    Profesor: profesor.davis@winnetka.edu.pe | teacher123
    Apoderado (antiguo): juan.perez@example.com | user123
    Apoderado (nuevo): maria.gomez@example.com | parent123`,
    url: "https://sistema-web-winnetka.vercel.app/",
  },
  {
    id: "2",
    name: "The Roost - E-commerce de Café",
    imageUrl: "/images/pag_the_roost.png",
    imageHint: "coffee ecommerce",
    client: "The Roost",
    technologies: ["Next.js", "React", "AI", "Vercel", "E-commerce"],
    problemSolved: "Crear una plataforma de e-commerce para una marca de café artesanal, conectando a los amantes del café con productores locales y ofreciendo una experiencia de compra única con un recomendador de productos basado en IA.",
    initialDescription: "Se desarrolló una tienda en línea completa para 'The Roost', con un catálogo de productos, carrito de compras, y una sección 'Sobre nosotros'. El diferenciador clave es un recomendador de mezclas de café impulsado por IA, que sugiere productos personalizados según las preferencias del usuario.",
    url: "https://theroost.vercel.app/",
  },
  {
    id: "3",
    name: "Clínica Dental ArtDent - Sistema de Citas",
    imageUrl: "/images/pag_artdent.png",
    imageHint: "dental clinic website",
    client: "Clínica ArtDent",
    technologies: ["Next.js", "React", "AI Chatbot", "Calendly Integration"],
    problemSolved: "La clínica dental requería un sistema digital para gestionar citas, presentar sus servicios y responder preguntas frecuentes a través de un asistente virtual, mejorando la experiencia del paciente y optimizando la administración.",
    initialDescription: `Se desarrolló una plataforma web completa para la Clínica ArtDent. Incluye un sistema para reservar y consultar citas, una sección detallada de servicios y un chatbot con IA llamado 'Denty' para asistir a los usuarios.
    Credenciales de prueba:
    Admin: admin | password-admin
    Secretaria: secretaria | password-secretaria
    Paciente: paciente | password-paciente`,
    url: "https://art-dent-allin.vercel.app/",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-card/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Nuestro Portafolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre algunos de los proyectos innovadores que hemos entregado, demostrando nuestra experticia y compromiso con la calidad y las soluciones a medida para empresas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
