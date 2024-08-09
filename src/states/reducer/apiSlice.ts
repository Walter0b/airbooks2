import {
    createApi,
    fetchBaseQuery,
    FetchBaseQueryError,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryMeta,
    EndpointBuilder
} from '@reduxjs/toolkit/query/react';
import { ResponseDataType, TableDataType } from '@/utils/types/page-type/table.type';
import { getSession } from 'next-auth/react';
import { endpointConfig } from './apiSlice.endpoint';

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: `${apiUrl}/items`,
    prepareHeaders: async (headers) => {
        const session = await getSession();
        const token = session?.user.accessToken;
        const expiresAt = session?.user.expiresAt;

        if (token && expiresAt && new Date().getTime() < expiresAt) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        headers.set('Content-Type', 'application/json');
        return headers;
    },
    paramsSerializer: (params: Record<string, any>) => {
        const queryString = new URLSearchParams(
            Object.entries(params).filter(([_, value]) => value !== undefined)
        ).toString();
        return `${queryString}&meta=*`;
    },
});

interface EndpointConfig {
    name: string;
    endpoint: string;
}


interface QueryParams {
    page: number;
    pageSize: number;
    fields?: string;
    filter?: Record<string, any>;
    search?: string;
    sort?: string;
}

type CustomBaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>;

const generateEndpoints = (
    builder: EndpointBuilder<CustomBaseQuery, string, string>
) => {
    const endpoints: Record<string, any> = {};

    endpointConfig.forEach(({ name, endpoint }) => {
        endpoints[`fetch${name}`] = builder.query<ResponseDataType, QueryParams>({
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
            providesTags: [name],
        });

        endpoints[`create${name}`] = builder.mutation<ResponseDataType, TableDataType>({
            query: (body) => ({
                url: endpoint,
                method: 'POST',
                body,
            }),
            invalidatesTags: [name],
        });
    });

    return endpoints;
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: endpointConfig.map(({ name }) => name),
    endpoints: generateEndpoints,
});


export const {
    useFetchTravelersQuery,
    useFetchCustomersQuery,
    useFetchAgencyProfileQuery,
    useFetchUsersQuery,
    useFetchChartsOfAccountsQuery,
    useFetchProductsQuery,
    useFetchCurrenciesQuery,
    useFetchBusinessRulesQuery,
    useFetchPreferencesQuery,
    useFetchIntegrationQuery,
    useFetchTravelItemQuery,
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
    useCreateEstimateMutation,
    useCreateInvoiceMutation,
    useCreateCreditNoteMutation,
    useCreatePaymentMutation,
    useCreateBillMutation,
    useCreateExpenseMutation,
    useCreateManualJournalMutation,
} = api;
