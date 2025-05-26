import { useState } from "react";
import { cn } from "../lib/utils";
const skills = [
  // Frontend
  { skillName: "HTML/CSS", level: 95, category: "frontend" },
  { skillName: "JavaScript", level: 90, category: "frontend" },
  { skillName: "React", level: 90, category: "frontend" },
  { skillName: "TypeScript", level: 85, category: "frontend" },
  { skillName: "Tailwind CSS", level: 90, category: "frontend" },
  { skillName: "FSD architecture", level: 90, category: "frontend" },

  // Backend
  { skillName: "Node.js", level: 80, category: "backend" },
  { skillName: "Express.js", level: 75, category: "backend" },
  { skillName: "MongoDB", level: 70, category: "backend" },

  // Tools
  { skillName: "Vite.js", level: 80, category: "frontend" },
  { skillName: "Git/GitHub/GitLab", level: 90, category: "tools" },
  { skillName: "Docker", level: 70, category: "tools" },
  { skillName: "Figma", level: 85, category: "tools" },
  { skillName: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtredSkills = skills.filter(
    (item) => item.category === activeCategory || activeCategory === "all"
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((item, index) => (
            <button
              key={index}
              className={cn(
                "px-5 py-2 rounded-full transition-color duration-300 capitalize",
                activeCategory === item && "bg-primary text-primary-foreground"
              )}
              onClick={() => {
                setActiveCategory(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtredSkills.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-card p-6 rounded-lg shadow-xs card-hover cursor-default"
            >
              <div className="text-left flex items-center justify-center">
                <h3 className="font-semibold text-lg flex items-center justify-center">{item.skillName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
