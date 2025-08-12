
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Phone, MessageCircle, Linkedin } from "lucide-react"; // Changed Mail to Phone

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="lg"
          className="fixed bottom-6 right-6 rounded-full shadow-lg z-50 flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-110 transition-all duration-300 ease-in-out px-6 py-3"
          aria-label="Contáctanos"
        >
          <Phone className="mr-2 h-5 w-5" /> Contáctanos
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px] bg-card border-border/30 p-0">
        <DialogHeader className="p-6 pb-4 text-center">
          <DialogTitle className="text-2xl sm:text-3xl font-bold font-headline text-primary">Elige tu Canal de Contacto</DialogTitle>
          <DialogDescription className="mt-2 text-md text-muted-foreground">
            Estamos listos para escucharte. Contáctanos directamente a través de WhatsApp o LinkedIn.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-2">
          <div className="flex flex-col space-y-4">
              <Button variant="outline" size="lg" asChild className="h-14 text-lg hover:bg-green-500/10 hover:text-green-600 hover:border-green-500/50">
                <a 
                  href="https://wa.me/51939962161" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="mr-3 h-6 w-6" /> WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-14 text-lg hover:bg-sky-600/10 hover:text-sky-700 hover:border-sky-600/50">
                <a 
                  href="https://www.linkedin.com/in/omer-runco-b7a261310/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visitar perfil de LinkedIn"
                  onClick={() => setOpen(false)}
                >
                  <Linkedin className="mr-3 h-6 w-6" /> LinkedIn
                </a>
              </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
