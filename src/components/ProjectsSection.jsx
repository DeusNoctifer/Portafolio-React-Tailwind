import { ArrowRight, Github, Code2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t?.projects?.title.split(' ')[0]} <span className="text-primary">{t?.projects?.title.split(' ')[1]}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t?.projects?.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {t?.projects?.items.map((project, key) => (
            <div
              key={key}

              className="flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px] p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity flex justify-center">
                <Code2 size={32} />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors min-h-[3.5rem] flex items-center justify-center text-center">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6 flex-grow text-center">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6 min-h-[4rem] content-start">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.github || project.code || project.demo) && (
                <div className="pt-4 border-t border-border mt-auto flex items-center justify-center gap-6">
                  {(project.github || project.code) && (
                    <a
                      href={project.github || project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors w-fit"
                    >
                      <Github size={18} />
                      {t?.projects?.codeLink}
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
                      <span>{t?.projects?.demoLink}</span>
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