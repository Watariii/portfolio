import { createContext, useState, useEffect } from "react";
import { lang } from "../constants/constants";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [isLang, setIsLang] = useState(lang.ru);

  const handleText = (sectionText) => {
    const [text, setText] = useState(
      isLang === lang.ru ? sectionText.ru : sectionText.eng
    );
    useEffect(() => {
      setText(isLang === lang.ru ? sectionText.ru : sectionText.eng);
    }, [isLang]);

    return [text, setText];
  };
  return (
    <LangContext.Provider value={{ isLang, setIsLang, handleText }}>
      {children}
    </LangContext.Provider>
  );
};
