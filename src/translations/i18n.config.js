import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import translationEN from "./en/global.json";
import translationES from "./es/global.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES },
  },
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
