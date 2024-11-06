// import AsyncStorage from '@react-native-async-storage/async-storage';
import type {LanguageDetectorAsyncModule} from 'i18next';

import {AppConstants, AppLocalstorageKey} from '../../constants/AppConstant';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

export const defaultLanguage = AppConstants.defaultLanguage;

export const supportedLocales: any = {
  en: {
    name: 'en',
    translationFileLoader: () => require('./configs/en.json'),
    momentLocaleLoader: () => Promise.resolve(),
  },
  hi: {
    name: 'hi',
    translationFileLoader: () => require('./configs/hi.json'),
    momentLocaleLoader: () => Promise.resolve(),
  },
};

export const defaultNamespace = 'common';

export const namespaces = ['auth', 'userOnboard'];

export const useLanguageStorage: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    // AsyncStorage.getItem(AppLocalstorageKey.USER_LANGUAGE).then(lang => {
    //   if (lang) {
    //     return callback(lang);
    //   }
    // });
  },
  init: () => null,
  //   cacheUserLanguage: (language: string) =>
  //     AsyncStorage.setItem(AppLocalstorageKey.USER_LANGUAGE, language),
};
