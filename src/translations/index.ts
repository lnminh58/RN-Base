import AsyncStorage from '@react-native-async-storage/async-storage'
import i18n, {LanguageDetectorAsyncModule} from 'i18next'
import {initReactI18next} from 'react-i18next'
import * as RNLocalize from 'react-native-localize'

import {en, fr} from './resources'

export const locales = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
}

export const DEFAULT_LOCALE = 'en'

export const defaultLanguage =
  RNLocalize.findBestLanguageTag(Object.keys(locales))?.languageTag ||
  DEFAULT_LOCALE

export const currentLanguage = i18n.language || defaultLanguage

const useLanguageStorage: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    const lang = await AsyncStorage.getItem('language')
    if (lang) {
      callback(lang)
      return lang
    }
  },
  init: () => null,
  cacheUserLanguage: async (language: string) => {
    AsyncStorage.setItem('language', language)
  }
}

i18n
  .use(useLanguageStorage)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    resources: locales,
    react: {
      useSuspense: false
    }
  })

export default i18n
