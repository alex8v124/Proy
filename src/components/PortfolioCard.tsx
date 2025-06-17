"use client";

import type { PortfolioProject } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, RefreshCw, Zap } from "lucide-react";
import { useState, useTransition } from "react";
import { generateProjectDescriptionAction } from "@/app/actions/generateProjectDescription";
import { useToast } from "@/hooks/use-toast";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const [description, setDescription] = useState(project.initialDescription || "¡Haz clic en 'Generar Descripción' para ver ideas potenciadas por IA!");
  const [isGenerating, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGenerateDescription = () => {
    startTransition(async () => {
      try {
        const newDescription = await generateProjectDescriptionAction({
          projectName: project.name,
          technologies: project.technologies,
          problemSolved: project.problemSolved,
          client: project.client,
        });
        setDescription(newDescription);
        // Removed toast for successful generation to reduce clutter, errors are still shown.
      } catch (error) {
        console.error("Error al generar descripción:", error);
        toast({
          variant: "destructive",
          title: "Error al Generar Descripción",
          description: "No se pudo generar una nueva descripción. Por favor, inténtalo de nuevo.",
        });
      }
    });
  };

  return (
    <Card className="group flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0_0_0_/_12%)] dark:hover:shadow-[0_8px_30px_rgba(var(--primary-rgb),0.25)] hover:border-accent/50 transform hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.imageHint || "aplicacion web"}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl mb-2 font-headline group-hover:text-primary transition-colors">{project.name}</CardTitle>
        {project.client && <p className="text-sm text-muted-foreground mb-2">Cliente: {project.client}</p>}
        <div className="mb-3">
          <h4 className="text-sm font-semibold mb-1 text-primary/80 dark:text-primary">Tecnologías Utilizadas:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90">{tech}</Badge>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-1 text-primary/80 dark:text-primary">Problema Resuelto:</h4>
          <p className="text-sm text-muted-foreground">{project.problemSolved}</p>
        </div>
        <CardDescription className="text-sm leading-relaxed min-h-[60px]">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row justify-between items-center gap-2">
        <Button onClick={handleGenerateDescription} disabled={isGenerating} variant="outline" size="sm" className="w-full sm:w-auto">
          {isGenerating ? (
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Zap className="mr-2 h-4 w-4 text-accent" />
          )}
          Generar Descripción
        </Button>
        {project.projectUrl && (
          <Button asChild variant="default" size="sm" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
