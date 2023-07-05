import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

//TODO context viMessages be dynamic based on user click
const enContext = require.context('./locales/en-US', true, /\.json$/);
const viContext = require.context('./locales/vi-VN', true, /\.json$/);
let enResources = {};
let viResources = {};

enContext.keys().forEach((fileName) => {
  const formattedName = fileName.replace('./', '').replace('.json', '');
  enResources[formattedName] = enContext(fileName);
});

viContext.keys().forEach((fileName) => {
  const formattedName = fileName.replace('./', '').replace('.json', '');
  viResources[formattedName] = viContext(fileName);
});

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
    ns: ['app', 'common'],
    defaultNS: 'app',
    fallbackNS: 'common',
    fallbackLng: 'en-US',
    //lng: 'en-US', // if you're using a language detector, do not define the lng option
    supportedLngs: ['en', 'en-US', 'vi-VN'],
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
      'en-US': enResources,
      'vi-VN': viResources,
    },
  });

//i18n.cloneInstance();

export default i18n;
