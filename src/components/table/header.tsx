import { Column } from "@utils/models/struc";
import React from "react";

interface TableHeaderProps {
    columns: Column[];
    onCheckboxAllChange?: (isCheckedAll: boolean) => void;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ columns, onCheckboxAllChange }) => {

    const [isCheckedAll, setCheckedAll] = React.useState(false);

    const handleCheckboxAllChange = () => {
        const allChecked = !isCheckedAll;
        setCheckedAll(allChecked);
        onCheckboxAllChange?.(allChecked);
    };

    return (
        <thead className="text-xs sticky top-0 uppercase bg-gray-50">
            <tr>
                <th scope="col w-1/3" className="p-4">
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
                </th>
                {columns.map((column: Column) => (
                    <th key={column.key} scope="col" className="px-6 py-3 text-blue-550 font-semibold active:text-red-500">
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};