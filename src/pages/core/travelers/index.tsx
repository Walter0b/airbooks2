import Tableheader from '@components/core/table/table-header'
import ItemDetails from '@components/compactlist/itemdetails'
import Pages from '@components/pages'
import { TableBody } from '@components/table/table.body'
import { TableHeader } from '@components/table/table.header'
import { Table } from '@components/table/table'
import { tableOptions } from '@static/travelers/table/dropdown'
import {
    travelerCompactList,
    travelersColumns,
    travelersData,
} from '@utils/mock/data/travelers/table'
import Body from '@components/body'
import TravelerCompactListHeader from '@components/core/travelers/compact-list/traveler-cl-btn'
import TravelerCompactList from '@components/core/travelers/compact-list'
import { NavLink } from 'react-router-dom'

export default function Travelers() {
    return (
        <Pages>
            <Tableheader data-slot="header" dropdownOptions={tableOptions} />
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
                    data={travelerCompactList}
                />
            </Body>
            <ItemDetails data-slot="itemDetails">
                <TravelerCompactListHeader
                    data-slot="compactListHeader"
                    dropdownOptions={tableOptions}
                />
                <div data-slot='compactListBody' className='w-full mt-12'>
                    <NavLink to='snapshot' className='text-black hover:border-b-4 border-cyan-550 px-10 py-1' >Snapshot</NavLink>
                    <NavLink to='snapshot' className='text-black hover:border-b-4 border-cyan-550  px-10 py-1' >Bookings</NavLink>
                    <hr className='mt-[0.4rem]'></hr>
                </div>
            </ItemDetails>
        </Pages>
    )
}
