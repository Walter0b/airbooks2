/* eslint-disable @typescript-eslint/no-explicit-any */
import Checkboxes from "./checkbox";
import { TableBodyProps } from "@utils/models/interface/table";

export const TableBody: React.FC<TableBodyProps<Record<string, unknown>>> = ({
    data,
    columns,
    checkedItems,
    hasCheckbox,
    handleCheckboxChange,
    className,
}: TableBodyProps<Record<string, unknown>>) => {
    return (
        <tbody>
            {data?.map((item: Record<string, any>, index: number) => (
                <tr
                    key={index}
                    className={`${className} ${index % 2 === 0 ? ' bg-white ' : 'bg-[#a8a8a805] '} border-b hover:bg-gray-50 -600`}
                >
                    {hasCheckbox && <Checkboxes checkboxState={checkedItems?.[index]} onChange={() => handleCheckboxChange?.(index)} />}
                    {columns?.map((column) => (
                        <td key={column.key} className="font-medium text-black px-6 py-4">
                            {item[column.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
