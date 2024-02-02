import Pages from '@components/pages'
import { TableBody } from '@components/table/body'
import { TableHeader } from '@components/table/header'
import { Table } from '@components/table/table'
import { dropdownDate } from '@utils/mock/data/page/dropdown'
import {
    travelersColumns,
    travelersData,
} from '@utils/mock/data/travelers/table'

export default function Customer() {
    return (
        <Pages dropdownOptions={dropdownDate}>
            <Table
                data={travelersData}
                columns={travelersColumns}
                hasCheckbox={true}
            >
                <TableHeader data-slot="TableHeader" />
                <TableBody data-slot="TableBody" />
            </Table>
            <h1>hi</h1>
        </Pages>
    )
}
