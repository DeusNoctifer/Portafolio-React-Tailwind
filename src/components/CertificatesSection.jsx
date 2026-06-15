import { useLanguage } from "@/context/LanguageContext";
import { Award, ExternalLink, ArrowRight } from "lucide-react";
import technicalDegree from "@/assets/certificates/technical-degree.pdf";
import englishB1 from "@/assets/certificates/english-b1.pdf";

const certificates = [
  {
    title: "Técnica en Programación de Software",
    issuer: "SENA",
    date: "2023",
    tags: ["PHP", "Tailwind CSS", "MariaDB", "Git", "DevOps", "Scrum"],
    file: technicalDegree,
  },
  {
    title: "Inglés B1",
    issuer: "SENA",
    date: "2022",
    tags: ["Inglés", "Comunicación"],
    file: englishB1,
  }
];

export const CertificatesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t?.certificates?.title}
        </h2>
        <p className="text-foreground/60 max-w-2xl mx-auto mb-12 text-center">
          {t?.certificates?.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] max-w-md bg-card rounded-lg shadow-xs card-hover border border-border overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-semibold text-lg mb-1">
                  {cert.title}
                </h3>

                <p className="text-sm text-foreground/60 mb-1">
                  {cert.issuer}
                </p>

                <p className="text-xs text-foreground/40 mb-4">
                  {cert.date}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {cert.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto cosmic-button inline-flex items-center justify-center gap-2 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t?.certificates?.viewCert}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#skills"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300"
          >
            {t?.certificates?.viewSkills}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
