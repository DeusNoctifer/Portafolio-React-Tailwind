import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || (!savedTheme && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            return false;
        }
        return true;
    });

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }

    return (
        <button
            onClick={toggleTheme}
            // Quitamos el fixed y max-sm:hidden
            className={cn(
                "p-2 rounded-full transition-colors duration-300 focus:outline-none flex items-center justify-center",
                "bg-primary/10 hover:bg-primary/20"
            )}
            >
            {isDarkMode ? (
                <Moon className="h-5 w-5 text-blue-600" />
            ) : (
                <Sun className="h-5 w-5 text-yellow-500" />
            )}
        </button>
    )
}