import Pagination from '@/components/table/pagination'
import useSingleState from '@/hooks/useSingleState'
import { ResponseDataType } from '@/utils/models/interface/table'
import { useRouter, useParams } from 'next/navigation'

export default function TravelerCompactList({
    tableData,
}: Readonly<{ tableData?: ResponseDataType }>) {
    // console.log("🚀 ~ tableData:", tableData)

    const page = useSingleState(1)
    const pageSize = useSingleState(10)

    const navigate = useRouter()
    const handleClick = (location: number) => {
        navigate.push(`${location}`)
    }

    const currentID = parseInt(useParams().id as string, 10)
    return (
        <div className="w-full">
            <ul
                className="hidScrollbar flex-1 overflow-auto"
                style={{ maxHeight: 'calc(100vh - 220px)' }}
            >
                {tableData?.data?.map((item) => (
                    <button
                        onClick={() => handleClick(item.id)}
                        key={item.id}
                        className={`flex w-full border-b p-2 hover:!bg-gray-100 ${currentID === item.id && 'bg-gray-100'}`}
                    >
                        <div className=" pointer-events-none py-1 px-2">
                            <input
                                className=" pointer-events-auto cursor-pointer "
                                type="checkbox"
                                name=""
                                id=""
                            />
                        </div>
                        <div
                            key={item.id}
                            className="space-x-auto flex w-full cursor-pointer justify-between font-medium"
                        >
                            <div className="justify-start text-left">
                                <div id="name" className="text-black">
                                    {item.display_name}
                                </div>

                                <div
                                    id="planeArrivalInfo"
                                    className="flex  text-black"
                                >
                                    <div
                                        id="ticketNumber"
                                        className="pr-1 text-gray-500"
                                    >
                                        {item.city}
                                    </div>
                                    |
                                    <div
                                        id="date"
                                        className=" text-cyan-550 pl-1 font-semibold"
                                    >
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
