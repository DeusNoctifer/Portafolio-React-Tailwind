import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <div className="text-sm text-muted-foreground">
                <p>
                    © {new Date().getFullYear()} Juan Manuel Valencia Velez.
                    <span className="block sm:inline">
                        {" "}
                        Bajo licencia{" "}
                        <a
                            href="https://www.gnu.org/licenses/gpl-3.0.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            GPL-3.0
                        </a>.
                    </span>
                </p>
                <p className="mt-1">
                    🚀 Proyecto 100% Open Source.{" "}
                    <a
                        href="https://github.com/DeusNoctifer/Portafolio-React-Tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        ¡Contribuciones bienvenidas!
                    </a>
                </p>
            </div>

            <a
                href="#inicio"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="Volver al inicio"
            >
                <ArrowUp size={20} />
            </a>
        </footer>
    );
};