import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "API - CRUD App",
    description: "Consumo de una API con funcionalidades CRUD",
    image: "/projects/api.png",
    tags: [ "Express", "React", "Tailwind", "MariaDB"],
    githubUrl: "https://github.com/DeusNoctifer/API-Node-Express-React-Tailwind",
  },
  {
    id: 2,
    title: "CRUD Django",
    description:
      "Interfaz de usuario para un CRUD de Django con Bootstrap",
    image: "/projects/crud.png",
    tags: ["Django", "Bootstrap", "Postgres"],
    githubUrl: "https://github.com/DeusNoctifer/Django-Bootstrap-Postgres",
  },
{
    id: 3,
    title: "Aplicativo Web de Gestión de Pedidos",
    description:
      "Aplicación web para gestionar pedidos de una tienda, con funcionalidades de CRUD y autenticación de usuarios.",
    image: "/projects/decora.png",
    tags: ["Django", "Bootstrap", "Postgres"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Mis <span className="text-primary"> Proyectos </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aquí algunos de mis proyectos. Cada uno cuidadosamente creado prestando atención en cada detalle y con las mejores prácticas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                        <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                        <ExternalLink size={20} />
                        
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                        <Github size={20} />
                        
                        </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/DeusNoctifer"
          >
            Mira mi Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};