import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import bg from "@/i18n/locales/bg.json"
import en from "@/i18n/locales/en.json"

const resources = {
  en: {
    translation: en,
  },
  bg: {
    translation: bg,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "bg",
  fallbackLng: "bg",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
