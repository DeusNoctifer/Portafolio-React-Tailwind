import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            console.log("Enviando formulario...");
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            console.log("Email enviado:", result);
            
            toast({
                title: "Mensaje enviado!",
                description: "Gracias por tu mensaje, te responderé pronto.",
            });
            e.target.reset();
        } catch (error) {
            console.error("Error detallado:", error);
            toast({
                title: "Error",
                description: "Hubo un problema al enviar tu mensaje. Por favor inténtalo de nuevo.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id="contacto" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Ponte en <span className="text-primary"> Contacto</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    ¿Te llamaron la atención mis habilidades y proyectos? Siéntete libre de contactarme.
                    Siempre estoy dispuesto a desarrollar e idear nuevos proyectos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Información de Contacto
                        </h3>

                        <div className="space-y-6">

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a
                                        href="mailto:noctiferium@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors block text-left"
                                    >
                                        noctiferium@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Celular */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-left">Celular</h4>
                                    <a
                                        href="tel:+573195543774"
                                        className="text-muted-foreground hover:text-primary transition-colors block text-left"
                                    >
                                        +57 319 5543774
                                    </a>
                                </div>
                            </div>

                            {/* Localidad */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-left">Localidad</h4>
                                    <p className="text-muted-foreground hover:text-primary transition-colors text-left">
                                        Medellín, Colombia
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Mis Redes</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/juan-manuel-valencia-velez-4b4493320/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/juanma16__/" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> ¡Envíame un mensaje!</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Tu Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Ingresa tu nombre"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Tu Correo
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Ingresa tu correo"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Tu Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hola, me interesa tu trabajo..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};