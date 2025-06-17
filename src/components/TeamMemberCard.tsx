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
    <Card className="text-center hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <CardHeader className="p-0 pt-6">
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent">
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={member.imageHint || "professional portrait"}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-headline mb-1">{member.name}</CardTitle>
        <CardDescription className="text-primary mb-3 flex items-center justify-center gap-1">
          <Briefcase size={16} /> {member.role}
        </CardDescription>
        
        {member.bio && <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>}

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-primary">Expertise:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {member.expertise.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
            ))}
          </div>
        </div>
        
        <a 
          href="#" 
          aria-label={`LinkedIn profile of ${member.name}`}
          className="inline-flex items-center justify-center text-accent hover:text-primary transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </CardContent>
    </Card>
  );
}
