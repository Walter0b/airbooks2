/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Checkboxes from './table.checkbox';
import { TableBodyType, ResponseDataType } from '@/utils/models/interface/table';
import { useNavigate } from 'react-router-dom';

const TableBody: React.FC<TableBodyType> = ({
    tableData,
    columns,
    checkedItems,
    hasCheckbox,
    handleCheckboxChange,
    className,
}) => {
    const navigate = useNavigate();
    const handleRowClick = (
        event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
        id: number | string
    ) => {
        if (!(event.target instanceof HTMLInputElement)) {
            navigate(`${id}`);
        }
    };

    return (
        <tbody>
            {tableData?.data?.map((item: ResponseDataType, index: number) => (
                <tr
                    key={index}
                    onClick={(event) => handleRowClick(event, item.id)}
                    className={`${className} border-b odd:bg-white even:bg-slate-50 hover:bg-neutral-100`}
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
                            className="cursor-pointer px-6 py-2 font-normal text-black"
                        >
                            {item[column.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
export default TableBody;