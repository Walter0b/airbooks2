import Pageheader from '@components/header/pageheader'
import Pages from '@components/pages'
import { TableBody } from '@components/table/body'
import { TableHeader } from '@components/table/header'
import { Table } from '@components/table/table'
import { tableOptions } from '@static/travelers/table/dropdown'
import {
    travelersColumns,
    travelersData,
} from '@utils/mock/data/travelers/table'

export default function Travelers() {
    return (
        <Pages>
            <Pageheader data-slot="header" dropdownOptions={tableOptions} />
            <Table
                data-slot="body"
                data={travelersData}
                columns={travelersColumns}
                hasCheckbox={true}
            >
                <TableHeader data-slot="TableHeader" />
                <TableBody data-slot="TableBody" />
            </Table>
        </Pages>
    )
}
