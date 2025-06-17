import type { PortfolioProject } from "@/types";
import PortfolioCard from "@/components/PortfolioCard";

const projects: PortfolioProject[] = [
  {
    id: "1",
    name: "E-commerce Platform Pro",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "ecommerce website",
    client: "Global Retail Inc.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    problemSolved: "Needed a scalable and modern e-commerce solution to increase online sales and improve user experience.",
    projectUrl: "#",
    initialDescription: "A high-performance e-commerce platform designed for growth and seamless customer journeys.",
  },
  {
    id: "2",
    name: "SaaS Dashboard X",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard analytics",
    client: "Innovatech Ltd.",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Chart.js"],
    problemSolved: "Required a comprehensive dashboard to visualize complex data and provide actionable insights for their SaaS product.",
    initialDescription: "An intuitive and powerful SaaS dashboard for data visualization and management.",
    projectUrl: "#",
  },
  {
    id: "3",
    name: "Mobile Banking App",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile app finance",
    client: "SecureBank Corp.",
    technologies: ["React Native", "Firebase", "Redux", "Biometric Auth"],
    problemSolved: "Aimed to provide customers with a secure and user-friendly mobile banking experience on iOS and Android.",
    initialDescription: "A secure and feature-rich mobile banking application for modern financial needs.",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Our Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover some of the innovative projects we've delivered, showcasing our expertise and commitment to quality.
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
