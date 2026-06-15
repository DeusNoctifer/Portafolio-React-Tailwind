import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 relative">
            <StarBackground />
            <div className="animate-fade-in relative z-10">
                <h1 className="text-[10rem] sm:text-[14rem] font-bold text-primary/20 select-none leading-none">
                    404
                </h1>
            </div>

            <div className="animate-fade-in-delay-1 -mt-8 sm:-mt-12 text-center relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    {t?.notFound?.title}
                </h2>
                <p className="text-foreground/60 max-w-md mb-8">
                    {t?.notFound?.description}
                </p>

                <Link
                    to="/"
                    className="cosmic-button inline-block"
                >
                    {t?.notFound?.button}
                </Link>
            </div>
        </div>
    );
}