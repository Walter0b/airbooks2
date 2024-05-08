import Header from '@/components/table/table.page.header'
import Pages from '@/components/layout/pages'
import { tableOptions } from './dropdown'
import {
    customerColumns
} from './table'
import Body from '@/components/layout/body'
import TravelerCompactList from '@/pages/core/travelers/compact-list/compact-list'
import { useFetchCustomersQuery } from '@/states/reducer/apiSlice'
import Pagination from '@/components/table/pagination'
import Table from '@/components/table/table'
import TableHeader from '@/components/table/table.header'
import TableLoader from '@/components/table/loader'
import useSingleState from '@/hooks/useSingleState'

export default function Travelers() {

    const page = useSingleState(1)

    const pageSize = useSingleState(10)

    const { data: customersData } = useFetchCustomersQuery({ page: page.value, pageSize: pageSize.value });
    // console.log("🚀 ~ Travelers ~ page.value:", page.value)

    if (customersData) {
        return (
            <Pages>
                <Header data-slot="header" dropdownOptions={tableOptions} />
                <Body data-slot="body">
                    <Table
                        data-slot="table"
                        tableData={customersData}
                        columns={customerColumns}
                        hasCheckbox={true}
                    >
                        <TableHeader data-slot="TableHeader" />
                        <Pagination
                            data-slot="Pagination"
                            tableData={customersData}
                            onPageChange={page}
                            onItemNumberChange={pageSize}
                        />
                    </Table>
                    <TravelerCompactList
                        data-slot="compactList"
                        tableData={customersData}
                    />
                </Body>


            </Pages>
        )
    } else {
        return <TableLoader />
    }

}
