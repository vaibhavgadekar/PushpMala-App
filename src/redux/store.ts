import {configureStore} from '@reduxjs/toolkit';

import {setupListeners} from '@reduxjs/toolkit/query';
import {Dashbord} from './Dashbord/api';

export const store = configureStore({
  reducer: {
    [Dashbord.reducerPath]: Dashbord.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([Dashbord.middleware]),
});

setupListeners(store.dispatch);
