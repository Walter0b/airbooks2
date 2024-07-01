import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
    ResponseDataType,
    TableDataType,
} from '@/utils/types/page-type/table.type'
import { getSession } from 'next-auth/react'

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL

const baseQuery = fetchBaseQuery({
    baseUrl: apiUrl + '/items',
    prepareHeaders: async (headers) => {
        const session = await getSession()
        const token = session?.user.accessToken
        const expiresAt = session?.user.expiresAt

        if (token && expiresAt && new Date().getTime() < expiresAt) {
            headers.set('Authorization', `Bearer ${token}`)
        }

        headers.set('Content-Type', 'application/json')
        return headers
    },

    paramsSerializer: (params) => {
        const queryString = new URLSearchParams(
            Object.entries(params).filter(([_, value]) => value !== undefined)
        ).toString()
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
            {
                page: number
                pageSize: number
                fields?: string
                filter?: any
                search?: string
                sort?: string
            }
        >({
            query: ({ page, pageSize, fields, filter, search, sort }) => ({
                url: 'traveler',
                params: {
                    page,
                    limit: pageSize,
                    ...(fields && { fields }),
                    ...(filter && { filter }),
                    ...(search && { search }),
                    ...(sort && { sort }),
                },
            }),
            providesTags: ['Travelers'],
        }),
        fetchCustomers: builder.query<
            ResponseDataType,
            {
                page: number
                pageSize: number
                fields?: string
                filter?: any
                search?: string
                sort?: string
            }
        >({
            query: ({ page, pageSize, fields, filter, search, sort }) => ({
                url: 'customer',
                params: {
                    page,
                    limit: pageSize,
                    ...(fields && { fields }),
                    ...(filter && { filter }),
                    ...(search && { search }),
                    ...(sort && { sort }),
                },
            }),
            providesTags: ['Customers'],
        }),
        createTraveler: builder.mutation<ResponseDataType, TableDataType>({
            query: (body) => ({
                url: 'traveler',
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
