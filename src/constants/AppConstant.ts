import {Languages} from './Language';

export enum AppLocalstorageKey {
  USER_LANGUAGE = 'userLanguage',
}

export const AppConstants = {
  isProdEnv: process.env.NODE_ENV === 'production',
  defaultLanguage: Languages.HI,
};
