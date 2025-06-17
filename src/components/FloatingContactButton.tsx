
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
import ContactFormContent from "@/components/sections/ContactFormContent";
import { Separator } from "@/components/ui/separator";
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
      <DialogContent className="sm:max-w-[550px] bg-card border-border/30 p-0">
        <DialogHeader className="p-6 pb-4 text-center">
          <DialogTitle className="text-2xl sm:text-3xl font-bold font-headline text-primary">Contáctanos</DialogTitle>
          <DialogDescription className="mt-2 text-md text-muted-foreground">
            ¿Tienes un proyecto o consulta? Rellena el formulario o contáctanos directamente por nuestros otros canales.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6">
          <ContactFormContent />
          <Separator className="my-6 border-border/50" />
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-medium text-foreground">Otros Canales</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button variant="outline" asChild className="w-full sm:w-auto hover:bg-green-500/10 hover:text-green-600 hover:border-green-500/50">
                <a 
                  href="https://wa.me/NUMERO_DE_WHATSAPP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto hover:bg-sky-600/10 hover:text-sky-700 hover:border-sky-600/50">
                <a 
                  href="https://linkedin.com/company/TU_EMPRESA"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visitar perfil de LinkedIn"
                >
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
