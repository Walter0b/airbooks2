import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseDataType, TableDataType } from '@/utils/models/interface/table';

const apiUrl = process.env.BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl + '/items',
  prepareHeaders: (headers,
    // { getState }
  ) => {
    const token = sessionStorage.getItem('accessToken');
    const expiresAt = sessionStorage.getItem('accessTokenExpiresAt');

    if (token && expiresAt && new Date().getTime() < parseInt(expiresAt)) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    headers.set('Content-Type', 'application/json');
    return headers;
  },
  paramsSerializer: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return `${queryString}&meta=*`;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Travelers', 'Customers'],
  endpoints: (builder) => ({
    fetchTravelers: builder.query<ResponseDataType, { page: number; pageSize: number }>({
      query: ({ page, pageSize }) => ({
        url: `traveler`,
        params: { page, 'limit': pageSize },
      }),
      providesTags: ['Travelers'],
    }),
    fetchCustomers: builder.query<ResponseDataType, { page: number; pageSize: number }>({
      query: ({ page, pageSize }) => ({
        url: `customer`,
        params: { page, 'limit': pageSize },
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
