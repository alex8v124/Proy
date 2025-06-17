import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import FloatingContactButton from '@/components/FloatingContactButton'; // Nueva importación

export const metadata: Metadata = {
  title: 'All-in Dev Solutions S.R.L. - Desarrollo de Software Innovador',
  description: 'Soluciones tecnológicas y desarrollo de software a medida para impulsar empresas medianas. Aplicaciones web, de escritorio y consultoría experta.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark"> 
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <FloatingContactButton /> {/* Botón flotante añadido aquí */}
      </body>
    </html>
  );
}
