
import { Linkedin, MessageCircle } from 'lucide-react'; // Importar iconos

export default function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 mt-16 border-t border-border/20 bg-card/30">
      <div className="container mx-auto text-center text-muted-foreground">
        <p className="font-headline text-xl md:text-2xl text-primary mb-6">
          &ldquo;Soluciones que se adaptan a ti, tecnología que transforma.&rdquo;
        </p>
        
        <div className="my-8">
          <h3 className="text-md font-semibold text-foreground mb-4">Conéctate con Nosotros</h3>
          <div className="flex justify-center items-center gap-6">
            <a 
              href="https://wa.me/NUMERO_DE_WHATSAPP" // Reemplazar con el número real
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Contactar por WhatsApp"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <MessageCircle size={28} strokeWidth={1.5} />
            </a>
            <a 
              href="https://linkedin.com/company/TU_EMPRESA" // Reemplazar con el enlace real
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visitar perfil de LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={28} strokeWidth={1.5} />
            </a>
            {/* Puedes añadir más enlaces a redes sociales o medios aquí */}
          </div>
        </div>

        <p className="text-sm">&copy; {currentYear} All-in Dev Solutions S.R.L. Todos los derechos reservados.</p>
        <p className="text-xs mt-2 text-muted-foreground/70">
          Recuerda reemplazar "NUMERO_DE_WHATSAPP" y "TU_EMPRESA" con tus datos reales en los enlaces.
        </p>
      </div>
    </footer>
  );
}
