import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../utils/constant';

export const Dashbord = createApi({
  reducerPath: 'Dashbord',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pushp-mala-fe-admin.vercel.app'}),
  endpoints: builder => ({
    fetchDashbord: builder.query({
      query: () => {
        return {
          url: '/dashboard.json',
          method: 'get',
        };
      },
    }),
  }),
});

export const {useFetchDashbordQuery} = Dashbord;
