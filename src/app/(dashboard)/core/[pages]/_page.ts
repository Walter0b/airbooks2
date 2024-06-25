import {
    useFetchCustomersQuery,
    useFetchTravelersQuery,
} from '@/states/reducer/apiSlice'
import { travelerTableOptions } from '@/static/travelers/table/dropdown'
import { PageConfigType } from '@/utils/models/interface/table'
import { travelersColumns } from '../travelers/table'
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
