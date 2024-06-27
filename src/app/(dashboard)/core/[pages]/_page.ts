import {
    useFetchCustomersQuery,
    useFetchTravelersQuery,
} from '@/states/reducer/apiSlice'
import { PageConfigType } from '@/utils/models/interface/table'
import { travelersColumns } from '../travelers/table'
import { customerColumns } from '../customers/table'
import { customerTableOptions } from '../customers/dropdown'
import { travelerTableOptions } from '../travelerItems/dropdown'

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
