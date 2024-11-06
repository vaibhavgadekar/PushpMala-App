import {supportedLocales} from './config';

const translationLoader: any = {
  type: 'backend',

  init: () => {},

  read: function (language: string, namespace: string, callback: Function) {
    let resource,
      error = null;

    try {
      resource = supportedLocales[language].translationFileLoader()[namespace];
    } catch (_error) {
      error = _error;
    }

    callback(error, resource);
  },
};

export default translationLoader;
