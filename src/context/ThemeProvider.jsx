import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "light" ? false : true
  );
  useEffect(() => {
    if (isDarkTheme) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark", true);
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);
  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
