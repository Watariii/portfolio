import { useState } from "react";
import { cn } from "../lib/utils";
import { useText } from "../context/useText";
import { useTheme } from "../context/useTheme";
import { skillsSectionText, skills, categories } from "../constants/constants";

export const SkillsSection = () => {
  const text = useText(skillsSectionText);
  const { isDarkTheme } = useTheme();

  const [activeCategory, setActiveCategory] = useState("all" || "все");
  const filtredSkills = skills.filter(
    (item) => item.category === activeCategory || activeCategory === "all"
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="flex gap-2 items-center justify-center text-3xl md:text-4xl font-bold mb-12 text-center">
          {text[0]}
          <span className="text-primary">{text[1]}</span>
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
              className={cn(
                "flex items-center justify-center bg-card p-6 rounded-lg shadow-sm card-hover cursor-default",
                isDarkTheme && "shadow-white/20"
              )}
            >
              <div className="text-left flex items-center justify-center">
                <h3 className="font-semibold text-lg flex items-center justify-center">
                  {item.skillName}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
