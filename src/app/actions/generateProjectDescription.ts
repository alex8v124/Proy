"use server";

// import { generateDescriptionFlow } from '@/ai/flows/projectDescription'; // Assuming this exists

interface GenerateDescriptionParams {
  projectName: string;
  technologies: string[];
  problemSolved: string;
  client?: string;
}

export async function generateProjectDescriptionAction(
  params: GenerateDescriptionParams
): Promise<string> {
  // This is a mock implementation.
  // In a real scenario, you would call your Genkit flow here.
  // e.g., const description = await generateDescriptionFlow.run(params);

  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

  let description = `Project "${params.projectName}" showcases our ability to leverage ${params.technologies.join(", ")}. `;
  description += `We addressed the core challenge of "${params.problemSolved}"`;
  if (params.client) {
    description += ` for our valued client, ${params.client}`;
  }
  description += ", delivering a robust and effective solution. This project highlights our commitment to technical excellence and client success.";
  
  return description;
}
