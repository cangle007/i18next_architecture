import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enUSresources from './locales/en-US/homepage.json';
import viVNresources from './locales/vi-VN/homepage.json';

//TODO context can be dynamic based on user click
//const context = require.context("./locales/en-US", true, /\.json$/);

// let resources = {};

// context.keys().forEach((fileName) => {
//   const formattedName = fileName.replace("./", "").replace(".json", "");
//   resources[formattedName] = context(fileName);
// });

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
    fallbackLng: 'en-US',
    //lng: document.querySelector("html").lang, // if you're using a language detector, do not define the lng option
    supportedLngs: ['en-US', 'vi-VN'],
    detection: {
      order: ['cookie', 'htmlTag', 'path'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
    resources: {
      'en-US': {
        translation: enUSresources,
      },
      'vi-VN': {
        translation: viVNresources,
      },
    },
  });

export default i18n;
