import { createContext, useContext, useState } from "react";
import { translations } from "./translations"; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Estado para saber qué idioma está activo
    const [language, setLanguage] = useState("es");

    const toggleLanguage = () => {
        setLanguage((prev) => {
            if (prev === "es") return "en";
            if (prev === "en") return "zh";
            return "es"; // De chino vuelve a español
        });
    };

    // Obtenemos el objeto de traducción actual basado en el estado
    const t = translations[language] || translations["es"];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Este es el Hook que usarás en tus componentes
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
    }
    return context;
};