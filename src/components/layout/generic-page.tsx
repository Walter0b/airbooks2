// components/layout/GenericTablePage.js
'use client'

import Header from '@/components/table/table.page.header'
import Pages from '@/components/layout/pages'
import Body from '@/components/layout/body'
import Pagination from '@/components/table/pagination'
import Table from '@/components/table/table'
import TableHeader from '@/components/table/table.header'
import TableLoader from '@/components/table/loader'
import useSingleState from '@/hooks/useSingleState'
import { GenericTablePageType } from '@/utils/models/interface/table'



export default function GenericTablePage({
    fetchQuery,
    columns,
    tableOptions,

}: Readonly<GenericTablePageType>) {
    console.log("🚀 ~ tableOptions:", tableOptions)
    const page = useSingleState(1)
    const pageSize = useSingleState(10)

    const { data: tableData } = fetchQuery({
        page: page.value,
        pageSize: pageSize.value,
    })

    if (tableData) {
        return (
            <Pages>
                <Header data-slot="header"  dropdownOptions={tableOptions} />
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
        return <TableLoader />
    }
}
