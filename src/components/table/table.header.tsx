import React from 'react';
import Checkboxes from './table.checkbox';
import { TableHeaderType, TableColumnType } from '@/utils/types/page-type/table.type';
import { ArrowIcon } from '@/assets/svg/arrow';
import { cn } from '@/utils/functions/classNames';

const TableHeader: React.FC<TableHeaderType> = ({
    columns,
    isCheckedAll,
    handleCheckboxAllChange,
    hasCheckbox,
    onSortChange,
}) => {
    console.log("🚀 ~ columns:", columns)
    const handleSort = (key: string) => {
        if (onSortChange) {
            onSortChange(key);
        }
    };

    return (
        <thead
            data-slot="TableHeader"
            className="sticky top-0 bg-gray-50 text-sm capitalize"
        >
            <tr className="border-b-gray-200">
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
                        className="text-blue-550 px-6 font-semibold active:text-red-500 cursor-pointer"
                        onClick={() => column.sortable && handleSort(column.key)}
                    >
                        <span className={
                            cn(column.sortable && 'text-red-500', 'flex items-center')}>
                            {column.label}
                            {column.sortable && (
                                <span className="ml-2 flex flex-col">
                                    <ArrowIcon className={cn(
                                        "w-2 rotate-180",
                                        column.sortDirection === 'desc' ? 'fill-gray-400' : 'fill-black'
                                    )} />
                                    <ArrowIcon className={cn(
                                        "w-2 -mt-2",
                                        column.sortDirection === 'asc' ? 'fill-black' : 'fill-gray-400'
                                    )} />
                                </span>
                            )}
                        </span>
                    </th>
                ))}
            </tr>
            <tr className="relative -top-px h-px">
                <th className="bg-gray-200" colSpan={20} />
            </tr>
        </thead >
    );
};

export default TableHeader;