/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Checkboxes from './table-checkbox'
import {
    TableBodyType,
    TableDataType,
} from '@/utils/types/page-type/table.type'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/utils/functions/classNames'

const TableBody: React.FC<TableBodyType> = ({
    tableData,
    columns,
    checkedItems,
    hasCheckbox,
    handleCheckboxChange,
    className,
}) => {
    const router = useRouter()
    const { } = router
    const pathname = usePathname()
    const handleRowClick = (
        event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
        id: number | string
    ) => {
        if (!(event.target instanceof HTMLInputElement)) {
            router.push(`${pathname}/details/${id}`)
        }
    }

    return (
        <tbody>
            {tableData?.data?.map((item: TableDataType, index: number) => (
                <tr
                    key={index}
                    onClick={(event) => handleRowClick(event, item.id)}
                    className={cn(
                        className,
                        'whitespace-nowrap border-b border-gray-200 odd:bg-white even:bg-slate-50 hover:bg-black/7'
                    )}
                >
                    {hasCheckbox && (
                        <Checkboxes
                            checkboxState={!!checkedItems?.[index]}
                            onChange={() => handleCheckboxChange?.(index)}
                        />
                    )}
                    {columns?.map((column) => (
                        <td
                            key={column.key}
                            className="cursor-pointer py-2 px-6 font-normal text-black"
                        >
                            {item[column.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}
export default TableBody
