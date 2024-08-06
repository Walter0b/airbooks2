// components/layout/GenericTablePage.js
'use client'

import PageHeader from '@/components/table/items/page.header'
import Pages from '@/components/layout/pages'
import Pagination from '@/components/table/pagination'
import Table from '@/components/table/table'
import TableHeader from '@/components/table/table.header'
import useSingleState from '@/hooks/useSingleState'
import { GenericTablePageType } from '@/utils/types/page-type/table.type'
import PageLoader from '../loader/page-loader'

export default function GenericTablePage({
    fetchQuery,
    columns,
    param,
    tableOptions,
}: Readonly<GenericTablePageType>) {
    console.log('🚀 ~ tableOptions:', tableOptions)
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
                <PageHeader data-slot="header" dropdownOptions={tableOptions} />
                <div data-slot="body">
                    <Table
                        data-slot="table"
                        tableData={tableData}
                        columns={columns}
                        hasCheckbox={true}
                    >
                        <TableHeader data-slot="TableHeader" />
                        <Pagination
                            data-slot="Pagination"
                            tableData={tableData}
                            onPageChange={page}
                            onItemNumberChange={pageSize}
                        />
                    </Table>
                </div>
            </Pages>
        )
    } else {
        return <PageLoader />
    }
}
