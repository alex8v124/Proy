
import type { PortfolioProject } from "@/types";
import PortfolioCard from "@/components/PortfolioCard";

export const projects: PortfolioProject[] = [
  {
    id: "1",
    name: "Sitio Web Institucional - Winnetka",
    imageUrl: "https://placehold.co/600x400.png", // Reverted to placeholder to fix build error
    imageHint: "school website",
    client: "CEP Winnetka",
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "Tailwind CSS"],
    problemSolved: "El centro educativo necesitaba una presencia digital moderna para comunicar su propuesta de valor, historia y niveles educativos, además de facilitar un portal de preinscripción en línea para nuevos apoderados.",
    initialDescription: "Se desarrolló un sitio web institucional completo y un portal administrativo. El sitio público presenta la misión, visión, historia y oferta educativa del colegio, mientras que el portal facilita la gestión de preinscripciones, apoderados y docentes, unificando la comunicación y los procesos en una plataforma digital.",
    url: "https://sistema-web-winnetka.vercel.app/",
  },
  {
    id: "2",
    name: "Dashboard SaaS Analítico",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard analytics",
    client: "Innovatech Ltd.",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Chart.js"],
    problemSolved: "Requerían un dashboard integral para visualizar datos complejos y proporcionar insights accionables para su producto SaaS.",
    initialDescription: "Un dashboard SaaS intuitivo y potente para la visualización y gestión de datos empresariales.",
  },
  {
    id: "3",
    name: "Aplicación de Banca Móvil Segura",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile app finance",
    client: "SecureBank Corp.",
    technologies: ["React Native", "Firebase", "Redux", "Autenticación Biométrica"],
    problemSolved: "Buscaban ofrecer a sus clientes una experiencia de banca móvil segura y amigable en iOS y Android, adaptada a sus crecientes necesidades.",
    initialDescription: "Una aplicación de banca móvil segura y rica en funcionalidades para las necesidades financieras modernas.",
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
