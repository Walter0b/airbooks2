/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Pagination from './pagination'
import { getCmpByAttr } from '@utils/functions/action'
import { TableItemType } from '@utils/models/interface/table'

export function Table({
    children,
    data,
    columns,
    onClickHandler,
    hasCheckbox,
}: Readonly<TableItemType>) {
    const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false)

    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>(
        {}
    )
    const handleCheckboxAllChange = () => {
        const allChecked = !isCheckedAll;
        setIsCheckedAll(allChecked);
        const updatedCheckedItems: Record<number, boolean> = data.reduce(
            (updatedCheckedItems, _, index) => ({
                ...updatedCheckedItems,
                [index]: allChecked,
            }),
            {}
        );

        setCheckedItems(updatedCheckedItems);
    };

    const handleCheckboxChange = (index: number) => {
        const updatedCheckedItems = {
            ...checkedItems,
            [index.toString()]: !checkedItems[index],
        }
        setCheckedItems(updatedCheckedItems)

        const allChecked = Object.values(updatedCheckedItems).every(
            (isChecked) => isChecked
        )
        Object.values(updatedCheckedItems).length === data.length &&
            setIsCheckedAll(allChecked)
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
            onClickHandler,
        },
    })

    return (
        <div className="flex h-full w-full flex-col items-center overscroll-none">
            <div className="relative w-full ">
                <div className="table-container flex-1 overflow-auto" style={{ maxHeight: "calc(100vh - 230px)" }}>
                    {/* Table with dynamic height */}
                    <table className="w-full table-auto text-left text-[13px] text-gray-500">
                        {tableHeader}
                        {tableBody}
                    </table>
                </div>
            </div>
            <div className="mb-10 flex w-full flex-row-reverse items-end">
                <Pagination
                    currentPage={0}
                    totalPages={0}
                    onPageChange={() => { }}
                />
            </div>
        </div>

    )
}
