// app/[...slug].js
'use client'

import GenericTablePage from '@/components/layout/generic-page'
import { useFetchTravelersQuery } from '@/states/reducer/apiSlice'
import { useRouter } from 'next/navigation'
import TravelerCompactList from '../travelers/compact-list/compact-list'
import { travelersColumns } from '../travelers/table'
import { travelerTableOptions } from '@/static/travelers/table/dropdown'

export default function DynamicPage({ params }: { params: { pages: string } }) {
    const router = useRouter()
    // const { slug } = router.query
    console.log("🚀 ~ DynamicPage ~ params.slug:", params.pages)

    if (!params.pages) return <p>Loading...</p>

     let fetchQuery, columns, tableOptions, CompactList

    switch (params.pages) {
        case 'travelerss':
            fetchQuery = useFetchTravelersQuery
            columns = travelersColumns
            tableOptions = travelerTableOptions
            CompactList = TravelerCompactList
            break
        // case 'other':
        //     fetchQuery = useFetchOtherDataQuery
        //     columns = otherColumns
        //     tableOptions = otherTableOptions
        //     CompactList = OtherCompactList
        //     break
        default:
            return <p>Page not found</p>
    }

// const { fetchQuery ,
//     columns ,
//     tableOptions,
//     CompactList ,}=pagesArgs[params.page]

    return (
        <GenericTablePage
            fetchQuery={fetchQuery}
            columns={columns}
            tableOptions={tableOptions}
            compactList={CompactList} headerSlot={undefined} bodySlot={undefined} />
    )
}
