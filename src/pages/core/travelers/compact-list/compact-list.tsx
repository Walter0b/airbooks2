import Pagination from '@/components/table/pagination'
import useSingleState from '@/hooks/useSingleState'
import { ResponseDataType } from '@/utils/models/interface/table'
import { useNavigate, useParams } from 'react-router-dom'

export default function TravelerCompactList({
    tableData,
}: Readonly<{ tableData?: ResponseDataType }>) {
    // console.log("🚀 ~ tableData:", tableData)
    
    const page = useSingleState(1)
    const pageSize = useSingleState(10)

    const navigate = useNavigate();
    const handleClick = (location: number) => {
        navigate(`${location}`);
    }

    const currentID = parseInt(useParams().id as string, 10)
    return (
        <div className='w-full'>
            <ul className="hidScrollbar flex-1 overflow-auto" style={{ maxHeight: "calc(100vh - 220px)" }}>
                {tableData?.data?.map((item) => (
                    <button
                        onClick={() => handleClick(item.id)}
                        key={item.id}
                        className={`w-full flex border-b p-2 hover:!bg-gray-100 ${currentID === item.id && 'bg-gray-100'}`}
                    >
                        <div className=" pointer-events-none px-2 py-1">
                            <input className=' cursor-pointer pointer-events-auto ' type="checkbox" name="" id="" />
                        </div>
                        <div
                            key={item.id}
                            className="space-x-auto flex w-full font-medium cursor-pointer justify-between"
                        >
                            <div className="justify-start text-left">
                                <div id="name" className="text-black">
                                    {item.display_name}
                                </div>

                                <div
                                    id="planeArrivalInfo"
                                    className="flex  text-black"
                                >
                                    <div id="ticketNumber" className="text-gray-500 pr-1">
                                        {item.city}
                                    </div>
                                    |
                                    <div id="date" className=" font-semibold text-cyan-550 pl-1">
                                        {item.mobile_phone}
                                    </div>
                                </div>
                            </div>

                            <div className="justify-end text-right">
                                <div id="money" className="flex text-black">

                                    <div id="amount" className="px-1">
                                        {item.postal_code}
                                    </div>
                                </div>
                                <div id="planeState" className="text-black">
                                    {item.id_country}
                                </div>

                            </div>
                        </div>
                    </button>
                ))}

            </ul>
            <Pagination
                className="flex justify-end"
                onPageChange={page}
                onItemNumberChange={pageSize}
                tableData={tableData}

            />
        </div>
    )
}
