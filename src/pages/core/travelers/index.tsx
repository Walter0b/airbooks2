import Header from '@components/core/table/table-header'
import Pages from '@components/pages'
import { TableBody } from '@components/table/table.body'
import { TableHeader } from '@components/table/table.header'
import { Table } from '@components/table/table'
import { tableOptions } from '@static/travelers/table/dropdown'
import {
    travelersColumns,
    travelersData,
} from '@utils/mock/data/travelers/table'
import Body from '@components/body'
import TravelerCompactList from '@components/core/travelers/compact-list'
// import Modal from '@components/modal'

export default function Travelers() {
    //todo: add every specific components to their specific folder  
    return (
        <Pages>
            <Header data-slot="header" dropdownOptions={tableOptions} />
            <Body data-slot="body">
                <Table
                    data-slot="table"
                    data={travelersData}
                    columns={travelersColumns}
                    hasCheckbox={true}
                >
                    <TableHeader data-slot="TableHeader" />
                    <TableBody data-slot="TableBody" />
                </Table>
                <TravelerCompactList
                    data-slot="compactList"
                    data={travelersData}
                />
            </Body>
           

        </Pages>
    )
}
