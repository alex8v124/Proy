"use server";

interface GenerateDescriptionParams {
  projectName: string;
  technologies: string[];
  problemSolved: string;
  client?: string;
}

export async function generateProjectDescriptionAction(
  params: GenerateDescriptionParams
): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1500)); 

  let description = `El proyecto "${params.projectName}" demuestra nuestra capacidad para aprovechar ${params.technologies.join(", ")}. `;
  description += `Abordamos el desafío central de "${params.problemSolved}"`;
  if (params.client) {
    description += ` para nuestro valioso cliente, ${params.client}`;
  }
  description += ", entregando una solución robusta y eficaz. Este proyecto destaca nuestro compromiso con la excelencia técnica y el éxito del cliente.";
  
  return description;
}
