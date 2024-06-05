import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseDataType, TableDataType } from '@/utils/models/interface/table'
// import { useSession } from 'next-auth/react';
import { getSession } from 'next-auth/react';

import { auth } from '@/auth';
const apiUrl = process.env.NEXT_PUBLIC_BASE_URL
console.log("🚀 ~ process.env.:", process.env)
console.log("🚀 ~ apiUrl:", apiUrl)

const baseQuery = fetchBaseQuery({
    baseUrl: apiUrl + '/items',
    prepareHeaders: async (headers) => {
        console.log("🚀 ~ Travelers ~ sessionss before:")
        const session = await getSession();
        console.log("🚀 ~ Travelers ~ sessionss:", session)
        const token = session?.user.accessToken
        console.log("🚀 ~ prepareHeaders: ~ token:", token)
        const expiresAt = session?.user.expiresAt
        console.log("🚀 ~ prepareHeaders: ~ expiresAt:", expiresAt)
        if (token && expiresAt && new Date().getTime() < parseInt(expiresAt)) {
            headers.set('Authorization', `Bearer ${token}`)
        }

        headers.set('Content-Type', 'application/json')
        return headers
    },

    paramsSerializer: (params) => {
        const queryString = new URLSearchParams(params).toString()
        return `${queryString}&meta=*`
    },
})

export const api = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: ['Travelers', 'Customers'],
    endpoints: (builder) => ({
        fetchTravelers: builder.query<
            ResponseDataType,
            { page: number; pageSize: number }
        >({
            query: ({ page, pageSize }) => ({
                url: `traveler`,
                params: { page, limit: pageSize },
            }),
            providesTags: ['Travelers'],
        }),
        fetchCustomers: builder.query<
            ResponseDataType,
            { page: number; pageSize: number }
        >({
            query: ({ page, pageSize }) => ({
                url: `customer`,
                params: { page, limit: pageSize },
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
})

export const {
    useFetchTravelersQuery,
    useFetchCustomersQuery,
    useCreateTravelerMutation,
} = api
