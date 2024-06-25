import React from 'react'
import { ArrowIcon } from '@/assets/svg/arrow'
import { PaginationPropsType } from '@/utils/models/interface/table'
import { cn } from '@/utils/intext'

const Pagination: React.FC<PaginationPropsType> = ({
    tableData,
    className,
    onPageChange,
    onItemNumberChange,
}) => {
    const totalPages = tableData?.meta.filter_count || 0

    const gotoPage = (page: number) => {
        // console.log("🚀 ~ gotoPage ~ page:", page, onPageChange.value)
        onPageChange.setValue(page)
    }

    const startIndex = (onPageChange.value - 1) * onItemNumberChange.value
    // console.log("🚀 ~ onPageChange.value:", onPageChange.value)
    const endIndex = Math.min(
        startIndex + onItemNumberChange.value,
        tableData?.meta.filter_count || 0
    )

    const handleItemsPerPageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newItemsPerPage = parseInt(event.target.value, 10)
        onItemNumberChange.setValue(newItemsPerPage)
        onPageChange.setValue(1)
    }

    const canPreviousPage = onPageChange.value - 1 > 0
    const canNextPage = endIndex < totalPages - 1

    return (
        <div id="Pagination" className={cn(className, 'mr-3')}>
            <div className="mt-3 flex flex-wrap items-center -space-x-px text-black">
                <div className="mr-3">
                    <select
                        className=" rounded-sm border p-2 text-red-800 hover:border-blue-300 focus:outline-none"
                        name="pagination"
                        id="cars"
                        value={onItemNumberChange.value}
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
                        onClick={() => gotoPage(onPageChange.value - 1)}
                        disabled={!canPreviousPage}
                        className={cn(
                            !canPreviousPage && 'cursor-not-allowed opacity-50'
                        )}
                    >
                        <span className="sr-only">Previous</span>
                        <ArrowIcon className="w-3 scale-x-100 rotate-90 fill-gray-300" />
                    </button>
                </div>
                <div className="-mt-1 px-3">
                    {`${startIndex + 1}-${endIndex}`}
                </div>
                <div>
                    <button
                        onClick={() => gotoPage(onPageChange.value + 1)}
                        disabled={!canNextPage}
                        className={cn(
                            !canNextPage && 'cursor-not-allowed opacity-50'
                        )}
                    >
                        <span className="sr-only">Next</span>
                        <ArrowIcon className="mr-3 w-3 scale-x-100 -rotate-90 fill-gray-300" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination
