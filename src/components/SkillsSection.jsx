import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    
  // Frontend
  { name: "HTML/CSS", level: 86, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 60, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 86, category: "frontend" },

  // Backend
  { name: "Django", level: 90, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Node.js", level: 60, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "Mysql/MariaDB", level: 90, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "BigQuery", level: 80, category: "backend" },
  { name: "Apps Script", level: 80, category: "backend" },

  // otras
  { name: "Git", level: 90, category: "otras" },
  { name: "Docker", level: 80, category: "otras" },
  { name: "Linux", level: 90, category: "otras" },
  { name: "MuleSoft AnyPoint", level: 80, category: "otras" },
];

const categories = ["todas", "frontend", "backend", "otras"];

const getSkillTier = (level) => {
  if (level <= 70) {
    return {
      label: "Intermedio",
      colorText: "text-slate-500 dark:text-slate-400",
      colorBg: "bg-slate-500/10",
      colorBorder: "border-slate-500/20", 
    };
  }
  if (level <= 85) {
    return {
      label: "Sólido",
      colorText: "text-teal-600 dark:text-teal-500",
      colorBg: "bg-teal-500/10",
      colorBorder: "border-teal-500/50",
    };
  }
  return {
    label: "Avanzado",
    colorText: "text-blue-600 dark:text-blue-500", 
    colorBg: "bg-blue-500/10",
    colorBorder: "border-blue-500",
  };
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("todas");

  const filteredSkills = skills
    .filter((skill) => activeCategory === "todas" || skill.category === activeCategory)
    .sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary"> Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const tier = getSkillTier(skill.level);

            return (
              <div
                key={key}
                className={cn(
                  "bg-card p-6 rounded-lg shadow-xs card-hover border-b-4 transition-all duration-300",
                  tier.colorBorder
                )}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  
                  <span
                    className={cn(
                      "text-xs font-semibold px-3 py-1 rounded-full",
                      tier.colorBg,
                      tier.colorText
                    )}
                  >
                    {tier.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};