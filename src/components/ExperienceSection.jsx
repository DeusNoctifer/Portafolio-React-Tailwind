import { Briefcase, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    company: "Third Way Health",
    role: "Database and Backend Developer",
    period: "2025 - Presente",
    description: [
      "Desarrollo y administración de base de datos con BigQuery.",
      "Desarrollo de scripts personalizados con Apps Script para automatización de tareas.",
      "Optimización de consultas SQL reduciendo tiempos de respuesta en un 60%.",
    ],
    technologies: ["BigQuery", "Apps Script", "Mulesoft"],
    color: "border-blue-500",
  },
  {
    company: "Freelance",
    role: "Desarrollador Web Junior",
    period: "2026", // Según tu imagen original
    description: [
      "Desarrollo de landing page orientadas a conversión.",
      "Implementación de diseños responsive con Tailwind CSS.",
      "Integración de toma de pedidos con conexión directa a WhatsApp.",
      "Despliegue de aplicaciones y gestión de entornos con Docker.",
    ],
    technologies: ["React", "Tailwind CSS", "Docker"],
    color: "border-slate-500",
  },
];

// ... (mismo código de antes)

export const ExperienceSection = () => {
  return (
    // CAMBIO: Quitamos bg-background y nos aseguramos de que sea transparente
    <section id="experience" className="py-24 px-4 relative"> 
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Experiencia <span className="text-primary">Laboral</span>
        </h2>

        <div className="relative">
          {/* Línea central vertical */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/20 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
                  
                  {/* Punto en la timeline */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full bg-background border-2 ${exp.color} ring-4 ring-background/50`} />
                  </div>

                  {/* COLUMNA DE FECHA */}
                  <div className={`hidden md:flex w-full ${isEven ? "md:col-start-1 justify-end pr-8" : "md:col-start-2 justify-start pl-8"}`}>
                    <div className="flex items-center gap-3 text-primary">
                      {isEven ? (
                        <>
                          <span className="text-sm font-semibold whitespace-nowrap">{exp.period}</span>
                          <Calendar className="h-5 w-5 shrink-0" />
                        </>
                      ) : (
                        <>
                          <Calendar className="h-5 w-5 shrink-0" />
                          <span className="text-sm font-semibold whitespace-nowrap">{exp.period}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* COLUMNA DE TARJETA */}
                  <div className={`w-full ${isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}>
                    <div className="flex md:hidden items-center gap-2 mb-3 text-primary">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    {/* TARJETA - Añadimos backdrop-blur para el efecto espacial */}
                    <div className={`bg-card/90 backdrop-blur-sm text-left p-6 md:p-8 rounded-lg shadow-xl card-hover border-l-4 ${exp.color} transition-all duration-300`}>
                      {/* Resto del contenido igual... */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl text-foreground">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Building2 className="h-4 w-4" />
                            <span className="text-sm font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="text-primary shrink-0 mt-0.5">▹</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap justify-start gap-2 pt-4 border-t border-border/30">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/30 text-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};