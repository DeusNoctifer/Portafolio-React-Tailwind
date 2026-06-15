import { useLanguage } from "@/context/LanguageContext";

export const NotFound = () => {
    const { t } = useLanguage();
    return <div>{t?.notFound?.title}</div>
}