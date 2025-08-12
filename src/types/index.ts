
import type { StaticImageData } from "next/image";
import { z } from "zod";

export interface PortfolioProject {
  id: string;
  name: string;
  imageUrl: string;
  imageHint?: string;
  client?: string;
  technologies: string[];
  problemSolved: string;
  shortDescription?: string; // Descripción corta para la tarjeta
  detailedDescription?: string; // Descripción larga para la página de detalles
  url?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialTitle?: string;
  imageUrl: string | StaticImageData;
  imageHint?: string;
  expertise: string[];
  bio?: string;
  linkedinUrl?: string;
}

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce una dirección de correo electrónico válida." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
