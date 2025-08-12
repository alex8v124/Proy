
"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, CodeXml } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:text-primary">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-card/95 backdrop-blur-sm border-border/30">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border/20">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
              <CodeXml className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline text-foreground">
                All-in Dev Solutions
              </span>
            </Link>
          </div>
          <nav className="flex-grow p-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/portafolio" 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/nosotros" 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  href="/equipo" 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Equipo
                </Link>
              </li>
            </ul>
          </nav>
           <Separator className="my-2" />
          <div className="p-4">
             <p className="text-xs text-center text-muted-foreground/70">
              © {new Date().getFullYear()} All-in Dev Solutions S.R.L.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
