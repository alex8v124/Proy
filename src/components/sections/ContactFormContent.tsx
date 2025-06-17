
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

// Anteriormente ContactSection, ahora es solo el contenido del formulario.
export default function ContactFormContent() {
  const initialState: ContactFormState = { message: "", success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        // Para el modal, es mejor no mostrar un toast de éxito si el formulario simplemente se limpia o el modal se cierra.
        // Podrías considerar cerrar el modal automáticamente en éxito si 'open' es una prop controlada.
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
    // No más <section> o <Card> envolvente aquí. Esos están en el Dialog.
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name-modal" className="flex items-center gap-2 text-muted-foreground"><User size={16} className="text-primary"/> Tu Nombre</Label>
        <Input 
          id="name-modal" // ID único para el modal
          name="name" 
          type="text" 
          placeholder="Juan Pérez" 
          required 
          aria-describedby="name-modal-error"
          className="bg-input border-border/50 focus:border-primary focus:ring-primary"
          defaultValue={state.fields?.name}
        />
        {state.issues && state.fields?.name && !contactFormSchema.shape.name.safeParse(state.fields.name).success && (
            <p id="name-modal-error" className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('nombre'))?.replace("Nombre: ", "")}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-modal" className="flex items-center gap-2 text-muted-foreground"><Mail size={16} className="text-primary"/> Tu Correo Electrónico</Label>
        <Input 
          id="email-modal" // ID único para el modal
          name="email" 
          type="email" 
          placeholder="juan.perez@ejemplo.com" 
          required 
          aria-describedby="email-modal-error"
          className="bg-input border-border/50 focus:border-primary focus:ring-primary"
          defaultValue={state.fields?.email}
        />
          {state.issues && state.fields?.email && !contactFormSchema.shape.email.safeParse(state.fields.email).success && (
            <p id="email-modal-error" className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('correo'))?.replace("Correo electrónico: ", "")}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message-modal" className="flex items-center gap-2 text-muted-foreground"><MessageSquare size={16} className="text-primary"/> Tu Mensaje</Label>
        <Textarea
          id="message-modal" // ID único para el modal
          name="message"
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
          rows={5}
          required
          aria-describedby="message-modal-error"
          className="bg-input border-border/50 focus:border-primary focus:ring-primary"
          defaultValue={state.fields?.message}
        />
        {state.issues && state.fields?.message && !contactFormSchema.shape.message.safeParse(state.fields.message).success && (
            <p id="message-modal-error" className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('mensaje'))?.replace("Mensaje: ", "")}</p>
        )}
      </div>
      <SubmitButton />
       {state.success && state.message && (
        <p className="text-sm text-green-500 mt-4">{state.message}</p>
      )}
    </form>
  );
}
