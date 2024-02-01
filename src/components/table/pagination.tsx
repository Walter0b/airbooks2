import { ArrowIcon } from '@assets/svg/arrow'
import React from 'react'
import './table.css'
interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const gotoPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page)
        }
    }

    const canPreviousPage = currentPage > 1

    return (
        <div>
            <div className="mt-3 flex flex-wrap items-center -space-x-px text-black">
                <div className=" mr-3 ">
                    <select
                        className="neuton  rounded-sm border bg-white  p-2 text-red-800 hover:border-blue-300"
                        name="pagination"
                        id="cars"
                    >
                        <option value="10">10 per pages</option>
                        <option value="saab">15 per pages</option>
                        <option value="opel">20 per pages</option>
                        <option value="audi">25 per pages</option>
                        <option value="opel">50 per pages</option>
                        <option value="audi">100 per pages</option>
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
                <div className="px-3"> {'1-10'}</div>

                <div>
                    <button
                        onClick={() => gotoPage(currentPage - 1)}
                        disabled={!canPreviousPage}
                    >
                        <span className="sr-only">Previous</span>
                        <ArrowIcon className="mr-3 w-3 -rotate-90 scale-x-100 fill-gray-300" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination
