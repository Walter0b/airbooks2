import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TravelersDataType } from '@/utils/models/interface/table';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ['Travelers'],
  endpoints: (builder) => ({
    fetchTravelers: builder.query<TravelersDataType, { page: number; perPage: number }>({
      query: ({ page, perPage }) => `travelers?page=${page}&perPage=${perPage}`,
      providesTags: ['Travelers'],
    }),
  }),
});


export const { useFetchTravelersQuery } = api;