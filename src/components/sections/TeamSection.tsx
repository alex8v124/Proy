import type { TeamMember } from "@/types";
import TeamMemberCard from "@/components/TeamMemberCard";

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Elara Vance",
    role: "Chief Executive Officer",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "ceo woman",
    expertise: ["Strategic Vision", "Leadership", "Innovation Management", "Market Analysis"],
    bio: "Driving the company's vision forward with over 15 years of experience in tech leadership.",
  },
  {
    id: "2",
    name: "Marcus Cole",
    role: "Chief Technology Officer",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "cto man",
    expertise: ["Full-Stack Development", "System Architecture", "AI Integration", "Cloud Solutions"],
    bio: "A tech visionary dedicated to building scalable and cutting-edge solutions.",
  },
  {
    id: "3",
    name: "Sofia Chen",
    role: "Lead UX/UI Designer",
    imageUrl: "https://placehold.co/200x200.png",
    imageHint: "designer woman",
    expertise: ["User-Centered Design", "Prototyping", "Interaction Design", "Accessibility"],
    bio: "Passionate about creating intuitive and engaging user experiences that delight.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The driving force behind our success. A group of passionate, talented individuals dedicated to excellence.
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
