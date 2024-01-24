import { DownIcon } from '@assets/svg/down';
import React from 'react';
import './table.css'
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const gotoPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const canPreviousPage = currentPage > 1;

    return (
        <div>
            <div className="flex items-center -space-x-px mt-3 flex-wrap text-black">
                
                <div className=' mr-3 '>
                    <select className='p-2  text-red-800 border neuton hover:border-blue-300 rounded-sm bg-white' name="pagination" id="cars">
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
                        <DownIcon className='w-3 scale-x-100 rotate-90 fill-gray-300' />
                    </button>
                </div>
                <div className='px-3'> {"1-10"}</div>

                <div>
                    <button
                        onClick={() => gotoPage(currentPage - 1)}
                        disabled={!canPreviousPage}
                    >
                        <span className="sr-only">Previous</span>
                        <DownIcon className='w-3 scale-x-100 -rotate-90 mr-3 fill-gray-300' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
