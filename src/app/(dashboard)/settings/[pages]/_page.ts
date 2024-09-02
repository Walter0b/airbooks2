import {
    useFetchAgencyProfileQuery,
    useFetchProductsQuery,
    useFetchUsersQuery,
} from '@/states/reducer/apiSlice'
import { PageConfigType } from '@/utils/types/page-type/table.type'
import { customerTableOptions } from '../../../../static/page/core/customers/dropdown'
import { travelerTableOptions } from '../../../../static/page/core/travelerItems/dropdown'
import { travelersColumns } from '../../../../static/page/core/travelers/table'
import {
    productionColumns,
    UserColumns,
    UserSettingsSidebar,
    UserTableOptions,
} from '../user/user'

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
