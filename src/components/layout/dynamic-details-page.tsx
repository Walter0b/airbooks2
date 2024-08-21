'use client'
import Header from '@/components/table/items/page.header'
import useSingleState from '@/hooks/useSingleState'
import { GenericTablePageType } from '@/utils/types/page-type/table.type'
import PageLoader from '../loader/page-loader'
import CompactList from "@/foundry/ItemDetails/compact-list";
import CompactListDetails from "@/foundry/ItemDetails/compact-list.details";

export default function GenericCompactPage({
    fetchQuery,
    columns,
    tableOptions,
    compactListFieldsToDisplay
}: Readonly<GenericTablePageType>) {
    console.log('🚀 ~ tableOptions:', tableOptions)
    const page = useSingleState(1)
    const pageSize = useSingleState(10)

    const { data: tableData } = fetchQuery({
        page: page.value,
        pageSize: pageSize.value,
    })

    if (tableData) {
        console.log(`columns => ${JSON.stringify(columns)}`)
        return (
            <div className="flex h-screen">
                <div
                    className=" h-full w-1/3 overflow-hidden border-r border-gray-300"
                    data-slot="body"
                >
                    <Header data-slot="header" dropdownOptions={tableOptions} />
                    <CompactList
                        data-slot="compactList"
                        tableData={tableData}
                        fieldsToDisplay={compactListFieldsToDisplay}
                    />
                </div>
                <CompactListDetails
                    dropdownOptions={tableOptions}
                    justify_content={compactListFieldsToDisplay?.justify_content}
                />
            </div>
        )
    } else {
        return <PageLoader />
    }
}
