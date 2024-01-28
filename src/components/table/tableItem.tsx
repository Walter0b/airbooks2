import { ReactNode, useState } from 'react';
import Pagination from './pagination';
import { getCmpByAttr } from '@utils/functions/action';

interface TableItemProps {
  children: ReactNode;
  onCheckboxChange: (value: string) => void;
}

export function TableItem({ children, onCheckboxChange }: TableItemProps) {
  // const { isCheckedAll, checkedItems, handleCheckboxAllChange, handleCheckboxChange, handleAction, columns } = useTableCheckbox(data, columns);
  const [isCheckedAll, onCheckboxAllChange] = useState<boolean>(false)

  const tableHeader = getCmpByAttr({
    children,
    attr: 'data-slot',
    value: 'TableHeader',
    props: { onCheckboxAllChange },
  });

  const tableBody = getCmpByAttr({
    children,
    attr: 'data-slot',
    value: 'TableBody',
    props: { isCheckedAll, onCheckboxChange },
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
        {/* <button onClick={handleAction}>Perform Action</button> */}
      </div>
    </div>
  );
}

