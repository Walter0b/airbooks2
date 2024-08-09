import {
    useFetchCustomersQuery,
    useFetchTravelersQuery,
} from '@/states/reducer/apiSlice'
import { PageConfigType } from '@/utils/types/page-type/table.type'
import { travelersColumns } from '../travelers/table'
import { travelerTableOptions } from '../travelerItems/dropdown'

import { customerColumns } from '../customers/table'
import { customerTableOptions } from '../customers/dropdown'

export const pagesConfig: PageConfigType = {
    travelers: {
        fetchQuery: useFetchTravelersQuery,
        columns: travelersColumns,
        tableOptions: travelerTableOptions,
    },

    customer: {
        fetchQuery: useFetchCustomersQuery,
        columns: customerColumns,
        tableOptions: customerTableOptions,
    },
}
