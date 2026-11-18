import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import bg from "@/i18n/locales/bg.json"
import en from "@/i18n/locales/en.json"

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng
  document.title = i18n.t("common.pageTitle")
})

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      bg: { translation: bg },
      en: { translation: en },
    },
    fallbackLng: "bg",
    supportedLngs: ["bg", "en"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
