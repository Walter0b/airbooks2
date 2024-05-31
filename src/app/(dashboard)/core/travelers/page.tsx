'use client'

import Header from '@/components/table/table.page.header'
import Pages from '@/components/layout/pages'
import { tableOptions } from '@/static/travelers/table/dropdown'

import Body from '@/components/layout/body'
import { useFetchTravelersQuery } from '@/states/reducer/apiSlice'
import Pagination from '@/components/table/pagination'
import Table from '@/components/table/table'
import TableHeader from '@/components/table/table.header'
import TableLoader from '@/components/table/loader'
import useSingleState from '@/hooks/useSingleState'
import { travelersColumns } from './table'
import TravelerCompactList from './compact-list/compact-list'
import { useSession } from 'next-auth/react'

export default function Travelers() {
    const session = useSession()
    console.log("🚀 ~ Travelers ~ session:", session.user)
    console.log("")
    const page = useSingleState(1)

    // console.log("🚀 ~ Travelers ~ page:", page)

    const pageSize = useSingleState(10)
    // console.log("🚀 ~ Travelers ~ pageSize:", pageSize)

    const { data: travelersData } = useFetchTravelersQuery({
        page: page.value,
        pageSize: pageSize.value,
    })


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
                            onItemNumberChange={pageSize}
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
