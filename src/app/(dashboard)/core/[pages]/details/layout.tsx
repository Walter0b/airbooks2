
'use client'

import { pagesConfig } from '../_pagesConfig'
import Header from '@/components/table/items/page-header'
import CompactList from '@/foundry/ItemDetails/compact-list'
import useSingleState from '@/hooks/useSingleState'
import PageLoader from '@/components/loader/page-loader'

export default function DynamicDetailsPage({
    params,
    children,
}: Readonly<{
    children: React.ReactElement
    params: { pages: string }
}>) {

    const pageConfig = pagesConfig[params.pages]

    if (!pageConfig) return <p>Page {params.pages} found</p>

    const { fetchQuery, tableOptions, compactListLayout } = pageConfig

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
                    className=" h-full w-2/4 overflow-hidden border-r border-gray-300"
                    data-slot="body"
                >
                    <Header data-slot="header" dropdownOptions={tableOptions} />

                    <CompactList
                        data-slot="compactList"
                        tableData={tableData}
                        layoutParameters={compactListLayout}
                    />
                </div>
                {children}
            </div>
        )
    } else {
        return <PageLoader />
    }
}
