import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import pt from "./locales/pt.json";

export const defaultNS = "translation";

export const resources = {
  en: { translation: en },
  pt: { translation: pt },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS,
    supportedLngs: ["en", "pt"],
    interpolation: {
      escapeValue: false, // React already handles XSS
    },
    detection: {
      // Order of sources to detect language from
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18n;
