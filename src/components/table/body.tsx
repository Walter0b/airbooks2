/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableBodyProps } from "@utils/models/interface/table";
import { useEffect, useState } from "react";


export const TableBody: React.FC<TableBodyProps<Record<string, unknown>>> = ({ data, columns, setCheckedAll, isCheckedAll, onCheckboxChange }) => {
    const [checkedItems, setCheckedItems] = useState<Array<boolean>>(new Array(data.length).fill(false));
    const [checkedItemsId, setCheckedItemsId] = useState<any>();

    const updateCheckedItemIds = (checkedItems: boolean[]) => {
        const checkedIds = checkedItems
            .map((isChecked, index) => (isChecked ? data[index] : null))
            .filter((id) => id !== null);

        setCheckedItemsId(checkedIds);
        console.log(checkedItemsId);
    };

    useEffect(() => {
        if (isCheckedAll) {
            setCheckedItems(new Array(data.length).fill(true));
            updateCheckedItemIds(new Array(data.length).fill(true));
        } else {
            setCheckedItems(new Array(data.length).fill(false));
            updateCheckedItemIds(new Array(data.length).fill(false));
        }
    }, [isCheckedAll, data]);

    const handleCheckboxChange = (index: number) => {
        // Ensure that we're not updating state during rendering
        requestAnimationFrame(() => {
            setCheckedItems((prevCheckedItems) => {
                const updatedCheckedItems = [...prevCheckedItems];
                updatedCheckedItems[index] = !updatedCheckedItems[index];

                const allChecked = updatedCheckedItems.every((isChecked) => isChecked);
                setCheckedAll?.(allChecked);

                updateCheckedItemIds(updatedCheckedItems);

                return updatedCheckedItems;
            });
        });
    };


    // console.log(checkedItems)
    return (
        <tbody>
            {data.map((item: Record<string, any>, index: number) => (
                <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-white ' : 'bg-[#a8a8a805] '}
              border-b  hover:bg-gray-50 -600`}
                >
                   {onCheckboxChange && <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input
                                id={`checkbox-${index}`}
                                type="checkbox"
                                checked={checkedItems[index]}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            <label className="sr-only">checkbox</label>
                        </div>
                    </td>}
                    {columns.map((column) => (
                        <td key={column.key} className="font-medium  text-black px-6 py-4">
                            {item[column.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};