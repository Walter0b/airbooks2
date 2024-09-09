import {
    useFetchTravelersQuery,
    useFetchTravelItemQuery,
    useFetchCustomersQuery,
} from '@/states/reducer/apiSlice'
import { PageConfigType } from '@/utils/types/page-type/table.type'
import {
    travelerCLLayout,
    travelersColumns,
} from '@/static/page/core/travelers/table'
import {
    customerCLLayout,
    customerColumns,
} from '@/static/page/core/customers/table'
import {
    TravelerItemsColums,
    travelItemsCLLayout,
} from '@/static/page/core/travelerItems/table'

import { customerTableOptions } from '@/static/page/core/customers/dropdown'
import { travelItemsTableOptions } from '@/static/page/core/travelerItems/dropdown'
import { tableOptions } from '@/static/page/core/travelers/dropdown'

export const pagesConfig: PageConfigType = {
    travelers: {
        fetchQuery: useFetchTravelersQuery,
        columns: travelersColumns,
        tableOptions: tableOptions,
        compactListLayout: travelerCLLayout,
    },

    'travel-items': {
        fetchQuery: useFetchTravelItemQuery,
        columns: TravelerItemsColums,
        tableOptions: travelItemsTableOptions,
        compactListLayout: travelItemsCLLayout,
    },

    customer: {
        fetchQuery: useFetchCustomersQuery,
        columns: customerColumns,
        tableOptions: customerTableOptions,
        compactListLayout: customerCLLayout,
    },
}
