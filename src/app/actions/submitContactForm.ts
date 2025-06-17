"use server";

import type { z } from "zod";
import type { ContactFormSchema } from "@/types"; // Import the type
import { contactFormSchema } from "@/types"; // Import the schema

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
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Contact form submitted:", parsed.data);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  return {
    message: "Thank you for your message! We'll get back to you soon.",
    success: true,
  };
}
