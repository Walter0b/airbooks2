import {
    useFetchTravelersQuery,
    useFetchTravelItemsQuery,
    useFetchCustomersQuery
} from '@/states/reducer/apiSlice'
import { PageConfigType } from '@/utils/types/page-type/table.type'
import { travelersColumns } from '../travelers/table'
import { customerColumns } from '../customers/table'
import { TravelerItemsColums } from "@/app/(dashboard)/core/travelerItems";

import { customerTableOptions } from '../customers/dropdown'
import { travelItemsTableOptions} from '../travelerItems/dropdown'
import { tableOptions } from "@/app/(dashboard)/core/travelers/dropdown";

export const pagesConfig: PageConfigType = {

    travelers: {
        fetchQuery: useFetchTravelersQuery,
        columns: travelersColumns,
        tableOptions: tableOptions,
    },

    'travel-items': {
        fetchQuery: useFetchTravelItemsQuery,
        columns: TravelerItemsColums,
        tableOptions: travelItemsTableOptions,
    },

    customer: {
        fetchQuery: useFetchCustomersQuery,
        columns: customerColumns,
        tableOptions: customerTableOptions,
    },
}
