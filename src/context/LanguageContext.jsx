import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations"; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState("es");

    useEffect(() => {
        if (language === "zh") {
            document.documentElement.classList.add("lang-zh");
        } else {
            document.documentElement.classList.remove("lang-zh");
        }
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            if (prev === "es") return "en";
            if (prev === "en") return "zh";
            return "es"; 
        });
    };

    const t = translations[language] || translations["es"];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
    }
    return context;
};