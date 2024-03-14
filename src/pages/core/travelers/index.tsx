import Header from '@/components/table/table.page.header'
import Pages from '@/components/pages'
import { tableOptions } from '@/static/travelers/table/dropdown'
import {
    travelersColumns,
} from '@/utils/mock/data/travelers/table'
import Body from '@/components/body'
import TravelerCompactList from '@/pages/core/travelers/compact-list/compact-list'
import { useFetchTravelersQuery } from '@/states/reducer/apiSlice'
import Pagination from '@/components/table/pagination'
import Table from '@/components/table/table'
import TableHeader from '@/components/table/table.header'
import TableLoader from '@/components/table/loader'
import useSingleState from '@/hooks/useSingleState'

export default function Travelers() {

    const page = useSingleState(0)
    const perPage = useSingleState(0)

    const { data: travelersData } = useFetchTravelersQuery({ page: page.value, perPage: perPage.value });

    if (travelersData) {
        return (
            <Pages>
                <Header data-slot="header" dropdownOptions={tableOptions} />
                <Body data-slot="body">
                    <Table
                        data-slot="table"
                        tableData={travelersData}
                        columns={travelersColumns}
                        hasCheckbox={true}
                    >
                        <TableHeader data-slot="TableHeader" />
                        <Pagination
                            data-slot="Pagination"
                            tableData={travelersData}
                            onPageChange={page} 
                            onItemNumberChange={perPage}
                            />
                    </Table>
                    <TravelerCompactList
                        data-slot="compactList"
                        tableData={travelersData}
                    />
                </Body>


            </Pages>
        )
    } else {
        return <TableLoader />
    }

}
