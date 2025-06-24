import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useText } from "../context/useText";
import { useLang } from "../context/useLang";
import { useTheme } from "../context/useTheme";
import {
  skillsSectionText,
  skills,
  categoriesText,
} from "../constants/constants";

export const SkillsSection = () => {
  const { isLang } = useLang();
  const text = useText(skillsSectionText);
  const { isDarkTheme } = useTheme();
  const categories = isLang === "Eng" ? categoriesText.ru : categoriesText.eng;

  const [activeCategory, setActiveCategory] = useState();
  const filtredSkills = skills.filter((item) => {
    if (activeCategory === "All" || activeCategory === "Все") return true;
    return item.category.includes(activeCategory);
  });

  useEffect(() => {
    console.log(activeCategory);
    setActiveCategory((prev) => {
      switch (prev) {
        case "All":
          return "Все";
        case "Все":
          return "All";
        case "Primary":
          return "Основные";
        case "Основные":
          return "Primary";
        case "Secondary":
          return "Вторичные";
        case "Вторичные":
          return "Secondary";
        case undefined:
          return isLang === "Eng" ? "Основные" : "Primary";
      }
    });
  }, [isLang]);
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

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {filtredSkills.map(({skillName, icon: Icon, color}, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-center sm:bg-card sm:p-4 sm:rounded-lg sm:shadow-sm sm:hover:scale-105 sm:transition-transform sm:card-hover cursor-default",
                isDarkTheme && "shadow-white/20"
              )}
            >
              <div className="flex flex-col items-center gap-1 text-center ">
                <Icon size={32} className={cn(color)} />
                <span className="text-sm">{skillName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
