// import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

import * as config from './config';
import translationLoader from './translation-loader';
// import {AppLocalstorageKey} from '../../constants/AppConstant';

import 'intl-pluralrules';

i18n
  //   .use(config.useLanguageStorage)
  .use(Backend)
  .use(initReactI18next)
  .use(translationLoader)
  .init(
    {
      compatibilityJSON: 'v4',
      preload: ['en', 'hi'],
      fallbackLng: 'hi',
      ns: config.namespaces,
      defaultNS: config.defaultNamespace,
      debug: false,
      initImmediate: false,
      react: {
        useSuspense: false,
      },
      interpolation: {
        escapeValue: false,
      },
    },
    err => {
      if (err) {
        console.log(err, 'i18n init error');
      }
    },
  );

i18n.on('languageChanged', language => {
  //   AsyncStorage.setItem(AppLocalstorageKey.USER_LANGUAGE, language);
});

i18n.on('missingKey', (languages, ns, key) => {
  console.log(
    `Missing translation for ${key} in ${ns} for ${JSON.stringify(
      languages,
    )})}`,
  );
});

export default i18n;
