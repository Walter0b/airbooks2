import React from 'react';
import { ArrowIcon } from '@/assets/svg/arrow';
import { PaginationPropsType } from '@/utils/models/interface/table';

const Pagination: React.FC<PaginationPropsType> = ({
    tableData,
    className,
    onPageChange,
    onItemNumberChange,
}) => {

    const totalPages = tableData?.totalPages || 0;

    const gotoPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange.setValue(page);
        }
    };

    const canPreviousPage = onPageChange.value > 1;
    const canNextPage = onPageChange.value < totalPages;

    const startIndex = (onPageChange.value - 1) * onItemNumberChange.value;
    const endIndex = startIndex + onItemNumberChange.value;
    // const displayedItems = tableData.items.slice(startIndex, endIndex);

    const handleItemspageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newItemspageSize = parseInt(event.target.value, 10);
        onItemNumberChange.setValue(newItemspageSize)
        onPageChange.setValue(1);
    };

    return (
        <div id="Pagination" className={className}>
            <div className="mt-3 flex flex-wrap items-center -space-x-px text-black">
                <div className="mr-3">
                    <select
                        className="neuton rounded-sm border bg-white p-2 text-red-800 hover:border-blue-300"
                        name="pagination"
                        id="cars"
                        value={onItemNumberChange.value}
                        onChange={handleItemspageSizeChange}
                    >
                        <option value="10">10 per pages</option>
                        <option value="15">15 per pages</option>
                        <option value="20">20 per pages</option>
                        <option value="25">25 per pages</option>
                        <option value="50">50 per pages</option>
                        <option value="100">100 per pages</option>
                    </select>
                </div>
                <div>
                    <button
                        onClick={() => gotoPage(onPageChange.value - 1)}
                        disabled={!canPreviousPage}
                    >
                        <span className="sr-only">Previous</span>
                        <ArrowIcon className="w-3 rotate-90 scale-x-100 fill-gray-300" />
                    </button>
                </div>
                <div className="px-3">
                    {`${startIndex + 1}-${endIndex} of ${tableData?.totalRowCount}`}
                </div>
                <div>
                    <button onClick={() => gotoPage(onPageChange.value + 1)} disabled={!canNextPage}>
                        <span className="sr-only">Next</span>
                        <ArrowIcon className="mr-3 w-3 -rotate-90 scale-x-100 fill-gray-300" />
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Pagination;