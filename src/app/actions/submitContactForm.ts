
"use server";

import type { z } from "zod";
import type { ContactFormSchema } from "@/types"; 
import { contactFormSchema } from "@/types"; 

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fieldErrors = parsed.error.issues.map((issue) => {
      if (issue.path.includes("name")) return `Nombre: ${issue.message.toLowerCase()}`;
      if (issue.path.includes("email")) return `Correo electrónico: ${issue.message.toLowerCase()}`;
      if (issue.path.includes("message")) return `Mensaje: ${issue.message.toLowerCase()}`;
      return issue.message;
    });
    return {
      message: "Datos del formulario no válidos.",
      fields: formData as Record<string, string>,
      issues: fieldErrors,
      success: false,
    };
  }

  console.log("Formulario de contacto enviado:", parsed.data);
  console.log("Destinatario del correo:", "alex.04.antay@gmail.com");

  // Simulación de envío
  await new Promise(resolve => setTimeout(resolve, 1000)); 

  return {
    message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
    success: true,
  };
}
