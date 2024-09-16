import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const httpClient = createApi({
  reducerPath: 'httpClient',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),

  tagTypes: [],
  endpoints: () => ({}),
});
