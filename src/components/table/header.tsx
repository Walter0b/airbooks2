import { TableHeaderProps, Column } from '@utils/models/interface/table';
import React from 'react';
import Checkboxes from './checkbox';


export const TableHeader: React.FC<TableHeaderProps> = ({ columns, isCheckedAll, handleCheckboxAllChange, hasCheckbox }) => {


    return (
        <thead data-slot="TableHeader" className="text-xs sticky top-0 uppercase bg-gray-50">
            <tr>
                {hasCheckbox &&
                    <Checkboxes checkboxState={isCheckedAll} onChange={handleCheckboxAllChange} />
                }
                {columns?.map((column: Column) => (
                    <th key={column.key} scope="col" className="px-6 py-3 text-blue-550 font-semibold active:text-red-500">
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
