import { Code, Braces, Terminal } from "lucide-react";
import cvPdf from "@/assets/cv.pdf";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary"> mí</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Programador especializado en desarrollo web
                        </h3>

                        <p className="text-muted-foreground">
                            Con más de 3 años de
                            experiencia práctica construyendo aplicaciones web
                            como proyectos personales y open source.
                            Especializado en Python (Django) y JavaScript
                            (React, Node.js).
                        </p>

                        <p className="text-muted-foreground">
                            Con conocimientos sólidos en
                            Docker y Linux. Apasionado por el código limpio, la
                            automatización y las buenas prácticas de desarrollo.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contacto" className="cosmic-button">
                                {" "}
                                Ponte en contacto
                            </a>

                            <a
                                href={cvPdf}
                                download="CV_JUAN_MANUEL_VALENCIA_1033179717.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Diseño Web </h4>
                                    <p className="text-muted-foreground">
                                        Diseño de aplicaciones web responsive con frameworks y librerías modernas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Braces className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Desarrollo Backend</h4>
                                    <p className="text-muted-foreground">
                                        Creación de APIs, microservicios con Django y Node.js, y conexiones a bases de datos.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Terminal className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Complementos</h4>
                                    <p className="text-muted-foreground">
                                        Habilidades sólidas en Docker, Linux y herramientas de automatización.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};