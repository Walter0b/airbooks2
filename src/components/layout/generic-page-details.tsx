'use client'
import Header from '@/components/table/table.page.header'
import TableLoader from '@/components/table/loader'
import useSingleState from '@/hooks/useSingleState'
import { GenericTablePageType } from '@/utils/models/interface/table'
import TravelerCompactList from '@/app/(dashboard)/core/travelers/compact-list/compact-list'
import TravelersItemDetails from '@/app/(dashboard)/core/travelers/compact-list/compact-list.details'

export default function GenericCompactPage({
    fetchQuery,
    columns,
    tableOptions,
}: Readonly<GenericTablePageType>) {
    console.log('🚀 ~ tableOptions:', tableOptions)
    const page = useSingleState(1)
    const pageSize = useSingleState(10)

    const { data: tableData } = fetchQuery({
        page: page.value,
        pageSize: pageSize.value,
    })

    if (tableData) {
        return (
            <div className="flex h-screen">
                <div
                    className=" h-full w-1/3 overflow-hidden border-r border-gray-300"
                    data-slot="body"
                >
                    <Header data-slot="header" dropdownOptions={tableOptions} />
                    <TravelerCompactList
                        data-slot="compactList"
                        tableData={tableData}
                    />
                </div>
                <TravelersItemDetails children={undefined} />
            </div>
        )
    } else {
        return <TableLoader />
    }
}
