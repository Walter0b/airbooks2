/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Checkboxes from './table.checkbox'
import { TableBodyProps } from '@utils/models/interface/table'

export const TableBody: React.FC<TableBodyProps<Record<string, unknown>>> = ({
    data,
    columns,
    checkedItems,
    hasCheckbox,
    handleCheckboxChange,
    onClickHandler,
    className,
}: TableBodyProps<Record<string, unknown>>) => {
    const handleRowClick = (
        event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
    ) => {
        if (!(event.target instanceof HTMLInputElement)) {
            onClickHandler && onClickHandler()
        }
    }
    return (
        <tbody>
            {data?.map((item: Record<string, any>, index: number) => (
                <tr
                    key={index}
                    onClick={(event) => handleRowClick(event)}
                    className={`${className} border-b odd:bg-white even:bg-slate-50 hover:bg-neutral-100`}
                >
                    {hasCheckbox && (
                        <Checkboxes
                            checkboxState={checkedItems?.[index]}
                            onChange={() => handleCheckboxChange?.(index)}
                        />
                    )}
                    {columns?.map((column) => (
                        <td
                            key={column.key}
                            className="cursor-pointer px-6 py-2 font-normal text-black"
                        >
                            {item[column.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}
