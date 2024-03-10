import Header from '@components/table/table.page.header'
import Pages from '@components/pages'
import { tableOptions } from '@static/travelers/table/dropdown'
import {
    travelersColumns,
} from '@utils/mock/data/travelers/table'
import Body from '@components/body'
import TravelerCompactList from '@pages/core/travelers/compact-list'
import { useFetchTravelersQuery } from '@states/reducer/apiSlice'
import Pagination from '@components/table/pagination'
import Table from '@components/table/table'
import TableHeader from '@components/table/table.header'

export default function Travelers() {


    const { data: travelersData } = useFetchTravelersQuery();
    console.log(travelersData)

    //todo: add every specific components to their specific folder  
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
                    />
                </Table>
                <TravelerCompactList
                    data-slot="compactList"
                    tableData={travelersData}
                />
            </Body>


        </Pages>
    )
}
