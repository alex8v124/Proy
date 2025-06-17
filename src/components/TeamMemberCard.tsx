
import type { TeamMember } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Briefcase } from "lucide-react";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="group text-center bg-card border-border/30 hover:shadow-[0_10px_30px_-5px_var(--shadow-accent-glow-40)] dark:hover:shadow-[0_10px_30px_-5px_var(--shadow-accent-glow-40)] hover:border-accent/70 transform hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden">
      <CardHeader className="p-0 pt-6">
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent group-hover:border-primary transition-colors duration-300">
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={member.imageHint || "retrato profesional"}
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-headline mb-1 group-hover:text-primary transition-colors">{member.name}</CardTitle>
        <CardDescription className="text-primary/90 dark:text-primary mb-3 flex items-center justify-center gap-1">
          <Briefcase size={16} /> {member.role}
        </CardDescription>
        
        {member.bio && <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>}

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-primary/80 dark:text-primary">Especialización:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {member.expertise.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90">{skill}</Badge>
            ))}
          </div>
        </div>
        
        <a 
          href="#" 
          aria-label={`Perfil de LinkedIn de ${member.name}`}
          className="inline-flex items-center justify-center text-accent hover:text-primary transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </CardContent>
    </Card>
  );
}
