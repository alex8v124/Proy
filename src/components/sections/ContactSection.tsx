"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions/submitContactForm";
import { contactFormSchema } from "@/types";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, User, MessageSquare } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/40 transition-all duration-300 transform hover:-translate-y-0.5">
      {pending ? (
        <>
          <Send className="mr-2 h-4 w-4 animate-pulse" /> Enviando...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
        </>
      )}
    </Button>
  );
}

export default function ContactSection() {
  const initialState: ContactFormState = { message: "", success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        // Use a less intrusive success notification or none at all if form clears
      } else {
        toast({
          variant: "destructive",
          title: "Error en el Envío",
          description: state.message + (state.issues ? ` Problemas: ${state.issues.join(", ")}` : ""),
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 md:py-24 bg-card/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto shadow-xl border-border/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl sm:text-4xl font-bold font-headline text-primary">Contáctanos</CardTitle>
            <CardDescription className="mt-2 text-lg text-muted-foreground">
              ¿Tienes un proyecto en mente o quieres saber más? Nos encantaría escucharte.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-muted-foreground"><User size={16} className="text-primary"/> Tu Nombre</Label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  placeholder="Juan Pérez" 
                  required 
                  aria-describedby="name-error"
                  className="bg-input border-border/50 focus:border-primary focus:ring-primary"
                />
                {state.issues && state.fields?.name && !contactFormSchema.shape.name.safeParse(state.fields.name).success && (
                   <p id="name-error" className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('nombre'))}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-muted-foreground"><Mail size={16} className="text-primary"/> Tu Correo Electrónico</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="juan.perez@ejemplo.com" 
                  required 
                  aria-describedby="email-error"
                  className="bg-input border-border/50 focus:border-primary focus:ring-primary"
                />
                 {state.issues && state.fields?.email && !contactFormSchema.shape.email.safeParse(state.fields.email).success && (
                   <p id="email-error" className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('correo'))}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2 text-muted-foreground"><MessageSquare size={16} className="text-primary"/> Tu Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  rows={5}
                  required
                  aria-describedby="message-error"
                  className="bg-input border-border/50 focus:border-primary focus:ring-primary"
                />
                {state.issues && state.fields?.message && !contactFormSchema.shape.message.safeParse(state.fields.message).success && (
                   <p id="message-error" className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('mensaje'))}</p>
                )}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
