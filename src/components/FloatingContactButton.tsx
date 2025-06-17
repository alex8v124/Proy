
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
import { Mail } from "lucide-react";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="lg"
          className="fixed bottom-6 right-6 rounded-full shadow-lg p-0 z-50 h-16 w-16 flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-110 transition-all duration-300 ease-in-out"
          aria-label="Contáctanos"
        >
          <Mail className="h-7 w-7" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-card border-border/30 p-0">
        <DialogHeader className="p-6 pb-4 text-center">
          <DialogTitle className="text-2xl sm:text-3xl font-bold font-headline text-primary">Contáctanos</DialogTitle>
          <DialogDescription className="mt-2 text-md text-muted-foreground">
            ¿Tienes un proyecto en mente o quieres saber más? Nos encantaría escucharte.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6">
          <ContactFormContent />
        </div>
      </DialogContent>
    </Dialog>
  );
}
