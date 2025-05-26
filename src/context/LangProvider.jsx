import { createContext, useState } from "react";
import { lang } from "../constants/constants";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [isLang, setIsLang] = useState(lang.ru);
  return (
    <LangContext.Provider value={{ isLang, setIsLang }}>
      {children}
    </LangContext.Provider>
  );
};
