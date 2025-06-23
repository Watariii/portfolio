import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { useTheme } from "../context/useTheme";

export const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useTheme();

  const handleToggleTheme = () => {
    if (isDarkTheme) {
      setIsDarkTheme((prev) => !prev);
    } else {
      setIsDarkTheme((prev) => !prev);
    }
  };
  // подумать что делать "focus:outline-hidden", по хорошему обводку нужно оставить
  return (
    <button
      onClick={handleToggleTheme}
      className={cn(
        "rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
      aria-label="Toggle theme"
    >
      {isDarkTheme ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

//fixed top-5 right-19 md:top-3.5 md:right-4.5 z-50
