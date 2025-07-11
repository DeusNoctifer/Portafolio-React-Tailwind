import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "../components/Navbar";

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
            {/* Footer */}
        </div>
    );
}