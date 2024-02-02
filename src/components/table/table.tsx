/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Pagination from './pagination'
import { getCmpByAttr } from '@utils/functions/action'
import { TableItemProps } from '@utils/models/interface/table'

export function Table({
    children,
    data,
    columns,
    hasCheckbox,
}: TableItemProps) {
    const [isCheckedAll, setCheckedAll] = useState<boolean>(false)

    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>(
        {}
    )
    // onCheckboxChange?.(checkedItemId)
    const handleCheckboxAllChange = () => {
        const allChecked = !isCheckedAll
        setCheckedAll(allChecked)
        const updatedCheckedItems: Record<string, boolean> = data.reduce(
            (updatedCheckedItems: any, _: any, index: any) => ({
                ...updatedCheckedItems,
                [index]: allChecked,
            }),
            {}
        )

        setCheckedItems(updatedCheckedItems)
    }

    const handleCheckboxChange = (index: number) => {
        const updatedCheckedItems = {
            ...checkedItems,
            [index.toString()]: !checkedItems[index],
        }
        setCheckedItems(updatedCheckedItems)
        console.log(updatedCheckedItems)

        const allChecked = Object.values(updatedCheckedItems).every(
            (isChecked) => isChecked
        )
        Object.values(updatedCheckedItems).length === data.length &&
            setCheckedAll(allChecked)
    }

    const tableHeader = getCmpByAttr({
        children,
        value: 'TableHeader',
        props: { isCheckedAll, columns, handleCheckboxAllChange, hasCheckbox },
    })

    const tableBody = getCmpByAttr({
        children,
        value: 'TableBody',
        props: {
            handleCheckboxChange,
            checkedItems,
            data,
            columns,
            hasCheckbox,
        },
    })

    return (
        <div className="flex h-fit w-full flex-col items-center overscroll-none">
            <div className="relative w-full overscroll-none pb-3 ">
                <div className="table-container h-full overflow-x-auto overscroll-auto">
                    <table className="table w-full text-left text-[13px] text-gray-500 ">
                        {tableHeader}
                        {tableBody}
                    </table>
                </div>
            </div>
            <div className="!mb-10 flex w-full flex-row-reverse items-end">
                <Pagination
                    currentPage={0}
                    totalPages={0}
                    onPageChange={() => {}}
                />
            </div>
        </div>
    )
}
