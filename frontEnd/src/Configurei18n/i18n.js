import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Get the stored language from local storage
const storedLanguage = localStorage.getItem('language');

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('../assets/translations/en.json'),
    },
    ar: {
      translation: require('../assets/translations/ar.json'),
    },
  },
  lng: storedLanguage || 'en', // Use the stored language, or default to 'en' if it doesn't exist
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

// Set the language in local storage when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
