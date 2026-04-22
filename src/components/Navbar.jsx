import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
// Importamos los botones aquí
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#inicio">
            <span className="relative z-10 flex items-center flex-wrap">
                <span className="text-glow text-foreground"> {t?.logo?.part1} </span>
                <span className="ml-1">{t?.logo?.part2}</span>
            </span>
        </a>

        {/* --- DESKTOP NAV --- */}
        <div className="hidden md:flex items-center space-x-8">
          {t?.navbar?.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          
          {/* Contenedor para los Toggles en PC */}
          <div className="flex items-center space-x-3 border-l border-border pl-6">
             <LanguageToggle />
             <ThemeToggle />
          </div>
        </div>

        {/* --- MOBILE NAV TOGGLE BUTTON --- */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 focus:outline-none"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-xl text-center items-center">
            {t?.navbar?.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Contenedor para los Toggles en Celular (separados por una línea) */}
            <div className="w-12 h-px bg-border my-4"></div>
            <div className="flex items-center space-x-4">
                <LanguageToggle />
                <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};