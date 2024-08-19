import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableFilterOptions from '@/components/table/items/page.header'
import Pages from '@/components/layout/pages'
import Pagination from '@/components/table/pagination'
import Table from '@/components/table/table'
import TableHeader from '@/components/table/table.header'
import { GenericTablePageType, TableColumnType } from '@/utils/types/page-type/table.type'
import { RootState } from '@/states/store'
import { setTableState } from '@/states/reducer/tableStatesSlice'
import useSingleState from '@/hooks/useSingleState'

export default function GenericTablePage({
    fetchQuery,
    columns,
    param,
    tableOptions,
    pageName,
}: Readonly<GenericTablePageType & { pageName: string }>) {
    console.log("🚀 ~ columns:", columns)
    const dispatch = useDispatch()
    const savedState = useSelector((state: RootState) => state.tableStates[pageName])
    const page = useSingleState(savedState?.page || 1)
    const pageSize = useSingleState(savedState?.pageSize || 10)
    const [sort, setSort] = useState<string>(savedState?.sort || '')
    const [filter, setFilter] = useState(savedState?.filter || (param?.filter === 'all' ? '' : param?.filter))
    const [search, setSearch] = useState(savedState?.search || '')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    const { data: tableData, isFetching, refetch } = fetchQuery({
        page: page.value,
        pageSize: pageSize.value,
        sort,
        filter,
        search,
    });

    const handleRefresh = () => {
        refetch();
    };


    useEffect(() => {
        if (mounted) {
            dispatch(setTableState({
                pageName,
                tableState: {
                    page: page.value,
                    pageSize: pageSize.value,
                    sort,
                    filter,
                    search,
                },
            }))
        }
    }, [mounted, page.value, pageSize.value, sort, filter, search, dispatch, pageName])

    const handleSortChange = useCallback((key: string) => {
        setSort((prevSort) => {
            if (prevSort === key) return `-${key}`;
            if (prevSort === `-${key}`) return '';
            return key;
        });
    }, []);

    const columnsWithSort: TableColumnType[] = useMemo(() => columns.map((col: TableColumnType) => ({
        ...col,
        sortDirection: sort === col.key ? 'asc' : (sort === `-${col.key}` ? 'desc' : undefined)
    })), [columns, sort]);
    console.log("🚀 ~ columnsWithSort ~ columnsWithSort:", columnsWithSort)

    return (
        <Pages>
            <TableFilterOptions
                data-slot="header"
                dropdownOptions={tableOptions}
                handleRefresh={handleRefresh}
                onFilterChange={setFilter}
                onSearchChange={setSearch}
            />
            <div data-slot="body">
                <Table
                    data-slot="table"
                    isFetching={isFetching}
                    tableData={tableData}
                    columns={columnsWithSort}
                    hasCheckbox={true}
                >
                    <TableHeader
                        data-slot="TableHeader"
                        columns={columnsWithSort}
                        onSortChange={handleSortChange}
                        hasCheckbox={true}
                    />
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
}