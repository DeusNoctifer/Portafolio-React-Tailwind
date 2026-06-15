import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Navbar } from "@/components/Navbar";
import { MainSection } from "@/components/MainSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutMe";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                
                {/* Background Effects */}
                <StarBackground />

                <Navbar />

                {/* Main Content */}
                <main>
                    <MainSection />
                    <AboutSection />
                    <ExperienceSection />
                    <CertificatesSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>

                {/* Footer */}
                <Footer />
            </div>
    );
}