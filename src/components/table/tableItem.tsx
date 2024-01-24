import { useState } from 'react';
import Pagination from './pagination';
import { DataTableProps, Column } from '@utils/models/struc';


export function TableItem<T>({ data, columns}: DataTableProps<T>) {

  const [isCheckedAll, setCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [checkedItemIds, setCheckedItemIds] = useState<number[] | undefined>();

  const handleCheckboxAllChange = () => {
    const allChecked = !isCheckedAll;
    setCheckedAll(allChecked);
    const updatedCheckedItems: Record<string, boolean> = data.reduce((updatedCheckedItems,_,index)=>({...updatedCheckedItems,[index]:allChecked}),{})
  
    setCheckedItems(updatedCheckedItems);

  };


  const handleCheckboxChange = (index: number) => {

    const updatedCheckedItems = { ...checkedItems, [index.toString()]: !checkedItems[index] };
    setCheckedItems(updatedCheckedItems);
    console.log(updatedCheckedItems)

    const allChecked = Object.values(updatedCheckedItems).every((isChecked) => isChecked);
    (Object.values(updatedCheckedItems).length === data.length) &&
     setCheckedAll(allChecked);

    const checkedIds = Object.entries(updatedCheckedItems)
      .filter(([, isChecked]) => isChecked)
      .map(([index]) => data[parseInt(index, 10)]) as number[];

    setCheckedItemIds(checkedIds);
    console.log(checkedItemIds)
  };



  return (
    <div className='flex flex-col overscroll-none items-center  h-fit w-full'>

      <div className="relative  pb-3 overscroll-none w-full ">

        <div className='table-container overflow-x-auto overscroll-auto h-full'>
          <table className="table w-full text-[13px] text-left text-gray-500 ">
            {/* Table header */}
            <thead className="text-xs sticky top-0  uppercase bg-gray-50 ">
              <tr>
                <th scope="col w-1/3" className="p-4">
                  <div className="flex !text-purple-300 items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className='bg-white'
                      checked={isCheckedAll}
                      onChange={handleCheckboxAllChange}
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </th>
                {columns.map((column: Column) => (
                  <th key={column.key} scope="col" className="px-6 py-3 text-blue-550 font-semibold active:text-red-500">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {data.slice(0, 10).map((item: T, index: number) => (

                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-white ' : 'bg-gray-50 '
                    } border-b  hover:bg-gray-50 -600`}
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-${index}`}
                        type="checkbox"
                        checked={checkedItems[index] || false}
                        onChange={() => handleCheckboxChange(index)}
                      />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  {columns.map((column) => (
                    <td key={column.key} className="font-medium  text-black px-6 py-4">
                      {(item as never)[column.key]}
                    </td>
                  ))}

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex w-full flex-row-reverse !mb-10 items-end'>
        <Pagination currentPage={0} totalPages={0} onPageChange={function (): void {
          throw new Error('Function not implemented.');
        }}>

        </Pagination>
      </div>
    </div>
  );
}

export default TableItem;

