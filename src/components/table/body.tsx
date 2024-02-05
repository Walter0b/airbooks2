/* eslint-disable @typescript-eslint/no-explicit-any */
import Checkboxes from './checkbox'
import { TableBodyProps } from '@utils/models/interface/table'

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
                    className={`${className} hover:bg-Neutral-50 border-b odd:bg-white even:bg-slate-50`}
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
                            className="px-6 py-2 font-normal text-black"
                        >
                            {item[column.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}
