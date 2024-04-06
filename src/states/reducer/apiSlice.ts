import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseDataType, TableDataType } from '@/utils/models/interface/table';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Travelers', 'Customers'],
  endpoints: (builder) => ({
    fetchTravelers: builder.query<ResponseDataType, { page: number; pageSize: number }>({
      query: ({ page, pageSize }) => ({
        url: `travelers`,
        params: { page, 'page-size': pageSize },
      }),
      providesTags: ['Travelers'],
    }),
    fetchCustomers: builder.query<ResponseDataType, { page: number; pageSize: number }>({
      query: ({ page, pageSize }) => ({
        url: `customers`,
        params: { page, 'page-size': pageSize },
      }),
      providesTags: ['Customers'],
    }),
    createTraveler: builder.mutation<ResponseDataType, TableDataType>({
      query: (body) => ({
        url: 'travelers',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Travelers'],
    }),
  }),
});

export const { useFetchTravelersQuery, useFetchCustomersQuery, useCreateTravelerMutation } = api;