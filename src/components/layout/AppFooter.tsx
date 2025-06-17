export default function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 mt-16 border-t border-border bg-card">
      <div className="container mx-auto text-center text-muted-foreground">
        <p className="font-headline text-lg text-primary mb-2">&ldquo;Soluciones que se adaptan a ti, tecnología que transforma.&rdquo;</p>
        <p>&copy; {currentYear} All-in Dev Solutions S.R.L. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
