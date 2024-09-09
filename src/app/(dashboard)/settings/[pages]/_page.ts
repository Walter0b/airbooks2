import {
    useFetchAgencyProfileQuery,
    useFetchProductsQuery,
    useFetchUsersQuery,
} from '@/states/reducer/apiSlice'
import { PageConfigType } from '@/utils/types/page-type/table.type'

import {
    productionColumns,
    UserColumns,
    UserSettingsSidebar,
    UserTableOptions,
} from '../user/user'
import { travelersColumns } from '@/static/page/core/travelers/table'
import { travelerTableOptions } from '@/static/travelers/table/dropdown'
import { customerTableOptions } from '@/static/page/core/customers/dropdown'

export const pagesConfig: PageConfigType = {
    agency_profile: {
        fetchQuery: useFetchAgencyProfileQuery,
        columns: travelersColumns,
        tableOptions: travelerTableOptions,
    },

    users: {
        fetchQuery: useFetchUsersQuery,
        columns: UserColumns,
        SideBar: UserSettingsSidebar,
        tableOptions: UserTableOptions,
    },
    products: {
        fetchQuery: useFetchProductsQuery,
        columns: productionColumns,
        tableOptions: customerTableOptions,
    },
}
