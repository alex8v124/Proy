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
  const [description, setDescription] = useState(project.initialDescription || "Click 'Generate Description' to see AI-powered insights!");
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
        toast({
          title: "Description Generated!",
          description: `New description for ${project.name} is ready.`,
        });
      } catch (error) {
        console.error("Failed to generate description:", error);
        toast({
          variant: "destructive",
          title: "Error Generating Description",
          description: "Could not generate a new description. Please try again.",
        });
      }
    });
  };

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg border border-border">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.imageHint || "website application"}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl mb-2 font-headline">{project.name}</CardTitle>
        {project.client && <p className="text-sm text-muted-foreground mb-2">Client: {project.client}</p>}
        <div className="mb-3">
          <h4 className="text-sm font-semibold mb-1 text-primary">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-1 text-primary">Problem Solved:</h4>
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
            <Zap className="mr-2 h-4 w-4" />
          )}
          Generate Description
        </Button>
        {project.projectUrl && (
          <Button asChild variant="default" size="sm" className="w-full sm:w-auto bg-accent hover:bg-accent/90">
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
