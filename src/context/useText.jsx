import { useState, useEffect } from "react";
import { useLang } from "./useLang";
import { lang } from "../constants/constants";

export const useText = (sectionText) => {
  const { isLang } = useLang();
  const [text, setText] = useState(
    isLang === lang.ru ? sectionText.ru : sectionText.eng
  );
  useEffect(() => {
    setText(isLang === lang.ru ? sectionText.ru : sectionText.eng);
  }, [isLang]);

  return text;
};
