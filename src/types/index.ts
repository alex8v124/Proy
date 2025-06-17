import { z } from "zod";

export interface PortfolioProject {
  id: string;
  name: string;
  imageUrl: string;
  imageHint?: string;
  client?: string;
  technologies: string[];
  problemSolved: string;
  projectUrl?: string;
  initialDescription?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint?: string;
  expertise: string[];
  bio?: string;
}

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
