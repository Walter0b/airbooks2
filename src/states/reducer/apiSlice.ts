import {
    createApi,
    fetchBaseQuery,
    FetchBaseQueryError,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryMeta,
    EndpointBuilder,
} from '@reduxjs/toolkit/query/react'
import {
    ResponseDataType,
    TableDataType,
} from '@/utils/types/page-type/table.type'
import { endpointConfig } from './apiSlice.endpoint'
import { getSession, signOut } from 'next-auth/react'

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL

const baseQuery = fetchBaseQuery({
    baseUrl: `${apiUrl}/items`,
    prepareHeaders: async (headers, { getState }) => {
        const session = await getSession()
        let token = session?.user.accessToken
        const expiresAt = session?.user.expiresAt

        // Check if the token has expired
        if (token && expiresAt && new Date().getTime() >= expiresAt) {
            // Attempt to refresh the token
            const refreshResponse = await fetch(`${apiUrl}/auth/refresh`, {
                method: 'POST',
                credentials: 'include',
            })

            if (refreshResponse.ok) {
                const refreshedData = await refreshResponse.json()
                token = refreshedData.accessToken

                // Optionally update the session (depends on your session strategy)
                await fetch('/api/auth/session?update=true', {
                    method: 'POST',
                    body: JSON.stringify({
                        accessToken: refreshedData.accessToken,
                        refreshToken: refreshedData.refreshToken,
                        expiresAt: Date.now() + refreshedData.expiresIn,
                    }),
                })
            } else {
                // If refresh token fails, remove the session and redirect to login with callbackUrl
                const currentUrl = window.location.href
                await signOut({
                    callbackUrl: `/auth/signin?callbackUrl=${encodeURIComponent(currentUrl)}`,
                })
                return headers // Stop the request after the redirection
            }
        }

        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }

        headers.set('Content-Type', 'application/json')
        return headers
    },
    paramsSerializer: (params: Record<string, any>) => {
        const queryParams = new URLSearchParams()

        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                if (key === 'sort' && Array.isArray(value)) {
                    value.forEach((sortItem) => {
                        queryParams.append('sort[]', sortItem)
                    })
                } else {
                    queryParams.append(key, String(value))
                }
            }
        })

        queryParams.append('meta', '*')
        return queryParams.toString()
    },
})

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && 'data' in result.error) {
        const errorData = result.error.data as any
        if (errorData?.errors?.[0]?.extensions?.code === 'TOKEN_EXPIRED') {
            // Token has expired, attempt to refresh
            const refreshResult = await fetch(`${apiUrl}/auth/refresh`, {
                method: 'POST',
                credentials: 'include',
            })

            if (refreshResult.ok) {
                const refreshedData = await refreshResult.json()

                // Update the session with the new token
                await fetch('/api/auth/session?update=true', {
                    method: 'POST',
                    body: JSON.stringify({
                        accessToken: refreshedData.accessToken,
                        refreshToken: refreshedData.refreshToken,
                        expiresAt: Date.now() + refreshedData.expiresIn,
                    }),
                })

                // Retry the original query with new access token
                const retryArgs =
                    typeof args === 'string'
                        ? {
                              url: args,
                              headers: {
                                  Authorization: `Bearer ${refreshedData.accessToken}`,
                              },
                          }
                        : {
                              ...args,
                              headers: {
                                  ...args.headers,
                                  Authorization: `Bearer ${refreshedData.accessToken}`,
                              },
                          }

                result = await baseQuery(retryArgs, api, extraOptions)
            } else {
                // If refresh fails, sign out the user
                const currentUrl = window.location.href
                await signOut({
                    callbackUrl: `/auth/signin?callbackUrl=${encodeURIComponent(currentUrl)}`,
                })
            }
        }
    }

    return result
}

interface QueryParams {
    page: number
    pageSize: number
    fields?: string
    filter?: Record<string, any>
    search?: string
    sort?: string[]
}

type CustomBaseQuery = BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
>

const generateEndpoints = (
    builder: EndpointBuilder<CustomBaseQuery, string, string>
) => {
    const endpoints: Record<string, any> = {}

    endpointConfig.forEach(({ name, endpoint }) => {
        endpoints[`fetch${name}`] = builder.query<
            ResponseDataType,
            QueryParams
        >({
            query: ({ page, pageSize, fields, filter, search, sort }) => ({
                url: endpoint,
                params: {
                    page,
                    limit: pageSize,
                    ...(fields && { fields }),
                    ...(filter && { filter }),
                    ...(search && { search }),
                    ...(sort && { sort }),
                },
            }),
            transformResponse: (response: ResponseDataType, meta, arg) => {
                const updatedMeta = {
                    ...response.meta,
                    sort: arg.sort,
                }
                return { ...response, meta: updatedMeta }
            },
            providesTags: [name],
        })

        endpoints[`create${name}`] = builder.mutation<
            ResponseDataType,
            TableDataType
        >({
            query: (body) => ({
                url: endpoint,
                method: 'POST',
                body,
            }),
            invalidatesTags: [name],
        })
    })

    return endpoints
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: endpointConfig.map(({ name }) => name),
    endpoints: generateEndpoints,
})

export const {
    useFetchTravelersQuery,
    useFetchTravelItemQuery,
    useFetchCustomersQuery,
    useFetchAgencyProfileQuery,
    useFetchUsersQuery,
    useFetchChartsOfAccountsQuery,
    useFetchProductsQuery,
    useFetchCurrenciesQuery,
    useFetchBusinessRulesQuery,
    useFetchPreferencesQuery,
    useFetchIntegrationQuery,
    useFetchEstimatesQuery,
    useFetchInvoiceQuery,
    useFetchCreditNotesQuery,
    useFetchPaymentsQuery,
    useFetchBillQuery,
    useFetchExpensesQuery,
    useFetchManualJournalQuery,
    useCreateTravelerMutation,
    useCreateCustomerMutation,
    useCreateAgencyProfileMutation,
    useCreateUserMutation,
    useCreateChartsOfAccountsMutation,
    useCreateProductMutation,
    useCreateCurrencyMutation,
    useCreateBusinessRuleMutation,
    useCreatePreferenceMutation,
    useCreateIntegrationMutation,
    useCreateTravelItemMutation,
} = api
