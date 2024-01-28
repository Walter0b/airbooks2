/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "@utils/models/struc";

interface TableBodyProps<T> {
    data: T[];
    columns: Column[];
    checkedItems?: Record<number, boolean>;
    isCheckedAll: boolean
    onCheckboxChange?: (index: number) => void;
}

export const TableBody: React.FC<TableBodyProps<unknown>> = ({ data, columns, isCheckedAll, checkedItems = {}, onCheckboxChange = () => { } }) => (
    
    <tbody>

        {data.map((item: any, index: number) => (
            <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-white ' : 'bg-[#a8a8a805] '}
                    } border-b  hover:bg-gray-50 -600`}
            >
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input
                            id={`checkbox-${index}`}
                            type="checkbox"
                            checked={checkedItems[index] || false}
                            onChange={() => onCheckboxChange(index)}
                        />
                        <label className="sr-only">checkbox</label>
                    </div>
                </td>
                {columns.map((column) => (
                    <td key={column.key} className="font-medium  text-black px-6 py-4">
                        {item[column.key]}
                    </td>
                ))}
            </tr>
        ))}
    </tbody>
);
