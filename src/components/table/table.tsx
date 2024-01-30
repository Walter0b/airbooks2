/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Pagination from './pagination';
import { getCmpByAttr } from '@utils/functions/action';
import { TableItemProps } from '@utils/models/interface/table';



export function Table({ children, data, columns, hasCheckbox }: TableItemProps) {

  const [isCheckedAll, setCheckedAll] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [checkedItemIds, setCheckedItemIds] = useState<number[] | undefined>();
  // onCheckboxChange?.(checkedItemId)
  const handleCheckboxAllChange = () => {
    const allChecked = !isCheckedAll;
    setCheckedAll(allChecked);
    const updatedCheckedItems: Record<string, boolean> = data.reduce((updatedCheckedItems: any, _: any, index: any) => ({ ...updatedCheckedItems, [index]: allChecked }), {})

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


  const tableHeader = getCmpByAttr({
    children,
    value: 'TableHeader',
    props: { isCheckedAll, columns, handleCheckboxAllChange, hasCheckbox },
  });

  const tableBody = getCmpByAttr({
    children,
    value: 'TableBody',
    props: { handleCheckboxChange, checkedItems, data, columns, hasCheckbox },
  });



  return (
    <div className='flex flex-col overscroll-none items-center h-fit w-full'>
      <div className="relative pb-3 overscroll-none w-full ">
        <div className='table-container overflow-x-auto overscroll-auto h-full'>
          <table className="table w-full text-[13px] text-left text-gray-500 ">
            {tableHeader}
            {tableBody}
          </table>
        </div>
      </div>
      <div className='flex w-full flex-row-reverse !mb-10 items-end'>
        <Pagination currentPage={0} totalPages={0} onPageChange={() => { }} />
      </div>
    </div>
  );
}

