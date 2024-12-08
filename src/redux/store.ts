import {configureStore} from '@reduxjs/toolkit';

import {setupListeners} from '@reduxjs/toolkit/query';
import {Dashbord} from './Dashbord/api';
import {God} from './god/api';

export const store = configureStore({
  reducer: {
    [Dashbord.reducerPath]: Dashbord.reducer,
    [God.reducerPath]: God.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([Dashbord.middleware, God.middleware]),
});

setupListeners(store.dispatch);
