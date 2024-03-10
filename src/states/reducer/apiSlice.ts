import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TravelersDataType } from '@utils/models/interface/table';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    fetchTravelers: builder.query<TravelersDataType, void>({
      query: () => 'travelers',
    }),
    // fetchProducts: builder.query({
    //   query: () => 'products', 
    // }),
  }),
});

export const { useFetchTravelersQuery } = api;
