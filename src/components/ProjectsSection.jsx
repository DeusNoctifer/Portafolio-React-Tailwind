import { ArrowRight, Github, Code2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t?.projects?.title.split(' ')[0]} <span className="text-primary">{t?.projects?.title.split(' ')[1]}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t?.projects?.subtitle}
          </p>
        </div>

        {/* Contenedor con Flex y justify-center para centrar los 2 proyectos */}
        <div className="flex flex-wrap justify-center gap-8">
          {t?.projects?.items.map((project, key) => (
            <div
              key={key}
              /* - w-full y max-w-[400px] para control total 
                - flex-col para usar flex-grow en el contenido
              */
              className="flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px] p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                <Code2 size={32} />
              </div>

              {/* Altura mínima para el título para que no se desalineen las descripciones */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors min-h-[3.5rem] flex items-center">
                {project.title}
              </h3>
              
              {/* flex-grow para empujar los tags y botones al final, manteniendo altura constante */}
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {project.description}
              </p>

              {/* Altura mínima para los tags para que la línea de abajo siempre esté al mismo nivel */}
              <div className="flex flex-wrap gap-2 mb-6 min-h-[4rem] content-start">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className="pt-4 border-t border-border mt-auto flex items-center gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors w-fit"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors transition-all"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/DeusNoctifer"
          >
            {t?.projects?.button} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};