import React, { useState } from 'react';
import { ArrowIcon } from '@/assets/svg/arrow';
import { PaginationPropsType } from '@/utils/models/interface/table';

const Pagination: React.FC<PaginationPropsType> = ({
    tableData,
    className,
    onPageChange,
    onItemNumberChange,
}) => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = tableData?.totalPages || 0;
    console.log("🚀 ~ tableData:", tableData)

    const gotoPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            onPageChange.setValue(page);
        }
    };

    const canPreviousPage = currentPage > 1;
    const canNextPage = currentPage < totalPages;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // const displayedItems = tableData.items.slice(startIndex, endIndex);

    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        onItemNumberChange.setValue(newItemsPerPage)
        setCurrentPage(1);
    };

    return (
        <div id="Pagination" className={className}>
            <div className="mt-3 flex flex-wrap items-center -space-x-px text-black">
                <div className="mr-3">
                    <select
                        className="neuton rounded-sm border bg-white p-2 text-red-800 hover:border-blue-300"
                        name="pagination"
                        id="cars"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
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
                        onClick={() => gotoPage(currentPage - 1)}
                        disabled={!canPreviousPage}
                    >
                        <span className="sr-only">Previous</span>
                        <ArrowIcon className="w-3 rotate-90 scale-x-100 fill-gray-300" />
                    </button>
                </div>
                <div className="px-3">
                    {`${startIndex + 1}-${endIndex} of ${tableData?.totalItems}`}
                </div>
                <div>
                    <button onClick={() => gotoPage(currentPage + 1)} disabled={!canNextPage}>
                        <span className="sr-only">Next</span>
                        <ArrowIcon className="mr-3 w-3 -rotate-90 scale-x-100 fill-gray-300" />
                    </button>
                </div>
            </div>
       
       
        </div>
    );
};

export default Pagination;