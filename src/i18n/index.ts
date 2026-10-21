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
      // Order of sources to detect language from; /pt/ wins over saved preferences
      order: ["path", "localStorage", "navigator", "htmlTag"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

// Keep the URL, <html lang>, the tab title and the meta description in the active
// language. The static values live in index.html (/) and the build-generated
// pt/index.html (/pt/) for crawlers that don't run JS.
const syncDocument = (lng: string) => {
  const pathname = lng.startsWith("pt") ? "/pt/" : "/";
  if (window.location.pathname !== pathname) {
    const { search, hash } = window.location;
    window.history.replaceState(window.history.state, "", pathname + search + hash);
  }
  document.documentElement.lang = lng;
  document.title = i18n.t("meta.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", i18n.t("meta.description"));
};

i18n.on("languageChanged", syncDocument);
if (i18n.isInitialized && i18n.language) syncDocument(i18n.language);

export default i18n;
