export default function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 mt-12 border-t border-border">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {currentYear} All-in Dev Solutions S.R.L. All rights reserved.</p>
      </div>
    </footer>
  );
}
