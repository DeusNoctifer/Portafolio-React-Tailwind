import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={cn(
                "fixed max-sm:hidden top-5 right-20 z-50 p-2 rounded-full transition-all duration-300",
                "bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20",
                "focus:outline-none flex items-center gap-2 px-3 py-1.5"
            )}
        >
            <Languages className="h-5 w-5" />
            <span className="text-xs font-bold uppercase">
                {language} {/* Esto mostrará ES, EN o ZH */}
            </span>
        </button>
    );
};