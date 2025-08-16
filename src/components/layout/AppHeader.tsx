
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu'; 

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/30 shadow-xl relative overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://img.freepik.com/vector-gratis/ciudad-moderna-noche-horizonte-neon-dibujos-animados_1441-3160.jpg?semt=ais_hybrid&w=740"
          alt="Fondo de encabezado ciudad neón"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" /> {/* Darker overlay, slight blur */}
      </div>

      {/* Header Content */}
      <div className="container mx-auto flex items-center justify-between relative z-10 py-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/all_in_dev_sol2.png"
            alt="All-in Dev Solutions Logo"
            width={48}
            height={48}
            className="rounded-md object-contain group-hover:ring-2 group-hover:ring-accent transition-all duration-300"
          />
          <h1 className="text-2xl font-bold font-headline text-white group-hover:text-accent transition-colors duration-300">
            All-in Dev Solutions
          </h1>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/portafolio" className="font-medium text-gray-100 hover:text-primary transition-colors">Portafolio</Link>
          <Link href="/nosotros" className="font-medium text-gray-100 hover:text-primary transition-colors">Nosotros</Link>
          <Link href="/equipo" className="font-medium text-gray-100 hover:text-primary transition-colors">Equipo</Link>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
