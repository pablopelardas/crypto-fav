import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.cryptapi.io',
});
export const cryptApiSlice = createApi({
  baseQuery,
  endpoints: builder => ({})
});