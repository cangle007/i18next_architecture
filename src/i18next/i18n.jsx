import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const languageCodes = {
  default: "en-US",
  "en-us": "en-US",
  "vi-vn": "vi-VN",
};

const allLocalesAndLanguages = {
  "en-US": {
    currentLang: "English",
    "en-US": "English (United States)",
  },
  "vi-VN": {
    currentLang: "Vietnamese",
    "vi-VN": "Vietnamese (Vietnam)",
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      //   "en-US": { msg: "Welcome to America" },
      //   "vi-VN": { msg: "Chào mừng bạn đến viet nam" },
      en: {
        translation: {
          // here we will place our translations...
          msg: {
            welcome: "Welcome to America",
          },
        },
      },
      vi: {
        translation: {
          // here we will place our translations...
          msg: {
            welcome: "Chào mừng bạn đến viet nam",
          },
        },
      },
    },
  });

export default i18n;
