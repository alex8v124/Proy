
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Sparkles, Lightbulb, Handshake, Award, Users, Shuffle, ShieldCheck } from "lucide-react";
import AnimatedTitle from "@/components/animations/AnimatedTitle";

const valores = [
  { 
    titulo: "Innovación continua", 
    descripcion: "Apostamos por ideas frescas, tecnologías emergentes y mejoras constantes en cada proyecto.", 
    icon: <Lightbulb className="h-8 w-8 text-accent" /> 
  },
  { 
    titulo: "Compromiso", 
    descripcion: "Asumimos con responsabilidad cada reto, cumpliendo plazos y superando expectativas.", 
    icon: <Handshake className="h-8 w-8 text-accent" /> 
  },
  { 
    titulo: "Calidad", 
    descripcion: "Entregamos soluciones robustas, seguras y eficientes, priorizando la experiencia del usuario.", 
    icon: <Award className="h-8 w-8 text-accent" /> 
  },
  { 
    titulo: "Trabajo en equipo", 
    descripcion: "Creemos en la colaboración y el respeto como pilares para lograr grandes resultados.", 
    icon: <Users className="h-8 w-8 text-accent" /> 
  },
  { 
    titulo: "Adaptabilidad", 
    descripcion: "Nos ajustamos con agilidad a los cambios del mercado y las necesidades de nuestros clientes.", 
    icon: <Shuffle className="h-8 w-8 text-accent" /> 
  },
  { 
    titulo: "Ética profesional", 
    descripcion: "Actuamos con integridad, transparencia y responsabilidad en cada interacción.", 
    icon: <ShieldCheck className="h-8 w-8 text-accent" /> 
  },
];

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <AnimatedTitle className="text-3xl sm:text-4xl font-bold font-headline text-primary">Sobre Nosotros</AnimatedTitle>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce nuestra dedicación al desarrollo de software y aplicaciones web y de escritorio de vanguardia, enfocadas en potenciar a empresas como la tuya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          <Card className="bg-card border-border/30 shadow-xl hover:shadow-[0_10px_30px_-5px_var(--shadow-primary-glow)] dark:hover:shadow-[0_10px_30px_-5px_var(--shadow-primary-glow)] hover:border-primary/50 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary font-headline">
                <Target className="mr-3 h-7 w-7 text-accent" />
                Nuestra Misión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Brindar soluciones tecnológicas innovadoras y de alta calidad en desarrollo de software, aplicaciones web y de escritorio, adaptadas a las necesidades de nuestros clientes, impulsando su transformación digital y aportando valor sostenible a través de un equipo comprometido, creativo y profesional.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/30 shadow-xl hover:shadow-[0_10px_30px_-5px_var(--shadow-primary-glow)] dark:hover:shadow-[0_10px_30px_-5px_var(--shadow-primary-glow)] hover:border-primary/50 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary font-headline">
                <Eye className="mr-3 h-7 w-7 text-accent" />
                Nuestra Visión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos a nivel distrital, nacional e internacional como una empresa líder en el desarrollo de soluciones tecnológicas integrales, destacando por nuestra excelencia, innovación constante y compromiso con el éxito de nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold font-headline text-primary flex items-center justify-center">
            <Sparkles className="mr-3 h-8 w-8 text-accent" />
            Nuestros Valores
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valores.map((valor) => (
            <Card key={valor.titulo} className="bg-card border-border/30 shadow-xl hover:shadow-[0_10px_30px_-5px_var(--shadow-accent-glow-30)] dark:hover:shadow-[0_10px_30px_-5px_var(--shadow-accent-glow-30)] hover:border-accent/50 transform hover:-translate-y-2 transition-all duration-300 ease-in-out p-6 text-center flex flex-col items-center">
              <div className="mb-4 p-3 bg-accent/10 rounded-full">
                {valor.icon}
              </div>
              <h4 className="text-xl font-semibold font-headline text-primary mb-2">{valor.titulo}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{valor.descripcion}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
