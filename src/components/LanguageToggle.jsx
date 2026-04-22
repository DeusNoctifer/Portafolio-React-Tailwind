import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            // Quitamos el fixed y max-sm:hidden
            className={cn(
                "p-2 rounded-full transition-all duration-300",
                "bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20",
                "focus:outline-none flex items-center gap-2 px-3"
            )}
        >
            <Languages className="h-4 w-4" />
            <span className="text-xs font-bold uppercase">
                {language}
            </span>
        </button>
    );
};