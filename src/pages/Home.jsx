import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Navbar } from "@/components/Navbar";
import { MainSection } from "@/components/MainSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutMe";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
        <LanguageProvider> 
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                
                {/* BORRAMOS LOS TOGGLES DE AQUÍ. YA NO VAN. */}
                
                {/* Efectos del background */}
                <StarBackground />

                {/* NavBar (¡Aquí adentro ya viven los botones ahora!) */}
                <Navbar />

                {/* Main Content */}
                <main>
                    <MainSection />
                    <AboutSection />
                    <ExperienceSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </LanguageProvider>
    );
}