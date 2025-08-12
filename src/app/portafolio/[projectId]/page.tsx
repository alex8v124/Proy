
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import { projects } from "@/components/sections/PortfolioSection";
import type { PortfolioProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ExternalLink } from "lucide-react";

async function getProject(id: string): Promise<PortfolioProject | undefined> {
  // In a real app, this would fetch from a database or API
  return projects.find((p) => p.id === id);
}

export async function generateMetadata({ params }: { params: { projectId: string } }): Promise<Metadata> {
  const project = await getProject(params.projectId);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      description: "El proyecto que buscas no existe o no está disponible.",
    };
  }

  return {
    title: `${project.name} - Portafolio All-in Dev Solutions`,
    description: `Detalles del proyecto ${project.name}: ${project.problemSolved}. Desarrollado por All-in Dev Solutions.`,
    openGraph: {
        title: `${project.name} - All-in Dev Solutions`,
        description: project.problemSolved,
        images: [
            {
                url: project.imageUrl, // Make sure imageUrl is an absolute URL
                width: 600, // Provide appropriate dimensions
                height: 400,
                alt: project.name,
            },
        ],
    },
  };
}


export default async function ProjectDetailPage({ params }: { params: { projectId: string } }) {
  const project = await getProject(params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="bg-card p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border border-border/30">
          <header className="mb-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-primary mb-3">{project.name}</h1>
            {project.client && <p className="text-lg text-muted-foreground">Cliente: <span className="font-semibold text-foreground">{project.client}</span></p>}
          </header>

          <div className="grid md:grid-cols-5 gap-8 lg:gap-12 mb-8 md:mb-12">
            <div className="md:col-span-3 aspect-[16/10] relative w-full overflow-hidden rounded-lg shadow-lg border border-border/20">
              <Image
                src={project.imageUrl}
                alt={`Imagen del proyecto ${project.name}`}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.imageHint || "aplicacion web"}
                priority
              />
            </div>
            <aside className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-semibold font-headline text-accent mb-2">Tecnologías Utilizadas</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90 px-3 py-1">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold font-headline text-accent mb-2">Problema Resuelto</h2>
                <p className="text-base text-muted-foreground leading-relaxed">{project.problemSolved}</p>
              </div>
               {project.url && (
                <div>
                  <h2 className="text-xl font-semibold font-headline text-accent mb-2">Sitio en Vivo</h2>
                  <Button asChild variant="outline" className="w-full hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      Visitar Sitio Web <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </aside>
          </div>
          
          <Separator className="my-8 md:my-12 border-border/50" />

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold font-headline text-primary mb-4">Descripción Detallada del Proyecto</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p className="whitespace-pre-line">{project.detailedDescription || "No hay una descripción detallada disponible para este proyecto en este momento."}</p>
            </div>
          </section>
        </article>
      </main>
      <AppFooter />
    </div>
  );
}
