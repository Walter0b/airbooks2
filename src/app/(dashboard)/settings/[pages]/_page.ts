import {
    useFetchCustomersQuery,
    useFetchTravelersQuery,
} from '@/states/reducer/apiSlice'
import { PageConfigType } from '@/utils/types/page-type/table.type'
import { customerTableOptions } from '../../core/customers/dropdown'
import { customerColumns } from '../../core/customers/table'
import { travelerTableOptions } from '../../core/travelerItems/dropdown'
import { travelersColumns } from '../../core/travelers/table'

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
