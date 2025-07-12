import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { MainSection } from "@/components/MainSection";
import { AboutSection } from "@/components/AboutMe";
import { SkillsSection } from "@/components/SkillsSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Efectos del background */}
            <StarBackground />

            {/* NavBar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <MainSection />
                <AboutSection />
                <SkillsSection />
            </main>

            {/* Footer */}
        </div>
    );
}