import {
    useFetchCustomersQuery,
    useFetchTravelersQuery,
} from '@/states/reducer/apiSlice'
import { PageConfigType } from '@/utils/types/page-type/table.type'
import { customerTableOptions } from '../../../../static/page/core/customers/dropdown'
import { customerColumns } from '../../../../static/page/core/customers/table'
import { travelerTableOptions } from '../../../../static/page/core/travelerItems/dropdown'
import { travelersColumns } from '../../../../static/page/core/travelers/table'

export const pagesConfig: PageConfigType = {
    agency_profile: {
        fetchQuery: useFetchTravelersQuery,
        columns: travelersColumns,
        tableOptions: travelerTableOptions,
    },

    users: {
        fetchQuery: useFetchCustomersQuery,
        columns: customerColumns,
        tableOptions: customerTableOptions,
    },
}
