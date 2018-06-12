import i18next from 'i18next';
import en from './en'
import es from './es'
import ptBr from './ptBr'

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en', // 'en' | 'es'
    // Using simple hardcoded resources for simple example
    resources: {
      en,
      es,
      ptBr,
    },
  })

export default i18next
