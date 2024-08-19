import {
    useFetchCustomersQuery,
    useFetchTravelersQuery,
} from '@/states/reducer/apiSlice'
import { PageConfigType } from '@/utils/types/page-type/table.type'
import { travelersColumns } from '../../../../static/page/core/travelers/table'
import { travelerTableOptions } from '../../../../static/page/core/travelerItems/dropdown'

import { customerColumns } from '../../../../static/page/core/customers/table'
import { customerTableOptions } from '../../../../static/page/core/customers/dropdown'

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
