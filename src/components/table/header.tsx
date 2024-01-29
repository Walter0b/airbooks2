import { TableHeaderProps, Column } from '@utils/models/interface/table';
import React from 'react';


export const TableHeader: React.FC<TableHeaderProps> = ({ columns, setCheckedAll, isCheckedAll, onCheckboxChange }) => {

    const handleCheckboxAllChange = () => {
        setCheckedAll?.((prev: boolean) => !prev);
    };



    return (
        <thead data-slot="TableHeader" className="text-xs sticky top-0 uppercase bg-gray-50">
            <tr>
                {onCheckboxChange && <th scope="col w-1/3" className="p-4">
                    <label htmlFor="checkbox-all" className="flex !text-purple-300 items-center">
                        <input
                            id="checkbox-all"
                            type="checkbox"
                            className="bg-white"
                            checked={isCheckedAll}
                            onChange={handleCheckboxAllChange}
                        />
                        <span className="sr-only">checkbox</span>
                    </label>
                </th>}
                {columns.map((column: Column) => (
                    <th key={column.key} scope="col" className="px-6 py-3 text-blue-550 font-semibold active:text-red-500">
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
