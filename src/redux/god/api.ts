import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const God = createApi({
  reducerPath: 'god',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pushp-mala-be.vercel.app/',
  }),
  endpoints: builder => ({
    fetchGods: builder.query({
      query: () => {
        return {
          url: 'admin/god',
          method: 'get',
        };
      },
    }),
  }),
});

export const {useFetchGodsQuery} = God;
