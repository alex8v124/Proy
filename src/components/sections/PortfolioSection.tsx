
import type { PortfolioProject } from "@/types";
import PortfolioCard from "@/components/PortfolioCard";
import AnimatedTitle from "@/components/animations/AnimatedTitle";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const projects: PortfolioProject[] = [
  {
    id: "1",
    name: "Sitio Web Institucional - Winnetka",
    imageUrl: "/images/pag_winnetka.png",
    imageHint: "school website",
    client: "CEP Winnetka",
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "Tailwind CSS"],
    problemSolved: "El centro educativo necesitaba una presencia digital moderna para comunicar su propuesta de valor, historia y niveles educativos, además de facilitar un portal de preinscripción en línea para nuevos apoderados.",
    initialDescription: `Para el CEP Winnetka, se desarrolló una solución digital integral que abarca un sitio web institucional y un portal administrativo multifuncional. El sitio público fue diseñado para ser la cara digital del colegio, presentando de manera clara y atractiva su misión, visión, historia y la oferta educativa en todos sus niveles.

El núcleo de la solución es el portal administrativo, una herramienta potente que centraliza la gestión de preinscripciones, simplificando el proceso para los nuevos apoderados, y permite una administración eficiente de los datos de docentes y alumnos. Esta plataforma unifica la comunicación y los procesos internos, optimizando la operativa diaria del centro educativo y mejorando la interacción entre la comunidad escolar.

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
    initialDescription: `Creamos una tienda en línea completa para 'The Roost', una marca de café artesanal con una fuerte identidad. La plataforma cuenta con un catálogo de productos detallado, un carrito de compras funcional y una sección 'Sobre nosotros' para conectar con la historia de la marca.

El elemento más innovador es su recomendador de mezclas de café, que utiliza inteligencia artificial para analizar las preferencias del usuario (notas de sabor, origen, tipo de tueste) y sugerir productos personalizados. Esta funcionalidad no solo mejora la experiencia de compra, sino que también educa al cliente y fomenta la exploración de nuevos sabores, aumentando la interacción y la lealtad a la marca.`,
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
    initialDescription: `Se desarrolló una plataforma web integral para la Clínica ArtDent, enfocada en mejorar la experiencia del paciente y la eficiencia administrativa. La solución incluye un sistema intuitivo para reservar y consultar citas, integrado con herramientas de calendario para una gestión sin fisuras.

Un componente clave es 'Denty', un chatbot con inteligencia artificial diseñado para asistir a los usuarios 24/7. Denty puede responder preguntas frecuentes sobre servicios, horarios y preparaciones para tratamientos, además de guiar a los usuarios en el proceso de reserva de citas. Esto no solo libera tiempo del personal administrativo, sino que también proporciona un servicio al cliente inmediato y accesible.

Credenciales de prueba:
Admin: admin | password-admin
Secretaria: secretaria | password-secretaria
Paciente: paciente | password-paciente`,
    url: "https://art-dent-allin.vercel.app/",
  },
  {
    id: "4",
    name: "Frontastic Commerce",
    imageUrl: "/images/pag_ecommerce.png",
    imageHint: "general ecommerce",
    client: "Frontastic Commerce",
    technologies: ["Next.js", "React", "E-commerce", "Vercel", "Tailwind CSS"],
    problemSolved: "Crear una plataforma de e-commerce moderna para exhibir y vender una amplia variedad de productos en múltiples categorías, con funcionalidades de búsqueda y filtrado.",
    initialDescription: "Desarrollamos un sitio de comercio electrónico completamente funcional y escalable, diseñado para proporcionar una experiencia de usuario fluida y atractiva. La plataforma cuenta con un listado dinámico de productos, un sistema de búsqueda avanzada y opciones de filtrado por categoría y otros atributos, permitiendo a los clientes encontrar exactamente lo que buscan con facilidad. La arquitectura está optimizada para ser escalable, soportando un catálogo creciente de productos y un alto volumen de tráfico.",
    url: "https://ecommerce-six-tan-86.vercel.app/",
  },
];

interface PortfolioSectionProps {
  limit?: number;
  showViewAllButton?: boolean;
}

export default function PortfolioSection({ limit, showViewAllButton = false }: PortfolioSectionProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-card/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <AnimatedTitle className="text-3xl sm:text-4xl font-bold font-headline text-primary">Nuestro Portafolio</AnimatedTitle>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre algunos de los proyectos innovadores que hemos entregado, demostrando nuestra experticia y compromiso con la calidad y las soluciones a medida para empresas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
        {showViewAllButton && limit && projects.length > limit && (
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="hover:bg-primary/10 hover:text-primary hover:border-primary">
              <Link href="/portafolio">
                Ver Todos los Proyectos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
