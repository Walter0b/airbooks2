import { TableHeaderType, TableColumnType } from '@/utils/models/interface/table'
import React from 'react'
import Checkboxes from './table.checkbox'

const TableHeader: React.FC<TableHeaderType> = ({
    columns,
    isCheckedAll,
    handleCheckboxAllChange,
    hasCheckbox,
}) => {
    return (
        <thead
            data-slot="TableHeader"
            className="sticky top-0 bg-gray-50 text-xs capitalize"
        >
            <tr className=" border-b-gray-200 ">
                {hasCheckbox && (
                    <Checkboxes
                        checkboxState={isCheckedAll}
                        onChange={handleCheckboxAllChange}
                    />
                )}
                {columns?.map((column: TableColumnType) => (
                    <th
                        key={column.key}
                        scope="col"
                        className="px-6 font-semibold text-blue-550 active:text-red-500"
                    >
                        {column.label}
                    </th>
                ))}

            </tr>
            <tr className=' h-px relative -top-px'>
                <th className=" bg-gray-200" colSpan={20}/>
            </tr>
        </thead>
    )
}
export default TableHeader
