layout / GenericTablePage.js
'use client'

import TableFilterOptions from '@/components/table/items/page.header'
import Pages from '@/components/layout/pages'
import Table from '@/components/table/table'
import TableHeader from '@/components/table/table.header'
import useSingleState from '@/hooks/useSingleState'
import { GenericTablePageType } from '@/utils/types/page-type/table.type'
import PageLoader from '../loader/page-loader'

export default function GenericSettingsPage({
    fetchQuery,
    columns,
    param,
    tableOptions,
}: Readonly<GenericTablePageType>) {
    //    console.log('🚀 ~ tableOptions:', tableOptions)
    const page = useSingleState(1)
    const pageSize = useSingleState(10)

    const { data: tableData } = fetchQuery({
        page: page.value,
        pageSize: pageSize.value,
        search: param?.filter === 'all' ? '' : param?.filter,
    })

    if (tableData) {
        return (
            <Pages>
                <TableFilterOptions
                    data-slot="header"
                    dropdownOptions={tableOptions}
                />
                <div data-slot="body">
                    <Table
                        data-slot="table"
                        tableData={tableData}
                        columns={columns}
                        hasCheckbox={true}
                    >
                        <TableHeader data-slot="TableHeader" />
                    </Table>
                </div>
            </Pages>
        )
    } else {
        return <PageLoader />
    }
}
