import Pagination from '@components/table/pagination'
import { TravelerCompactListInterface } from '@utils/mock/data/travelers/table'
import { useParams } from 'react-router-dom'

export default function TravelerCompactList({
    data,
}: Readonly<{ data: TravelerCompactListInterface[] }>) {
    const currentID = parseInt(useParams().id as string)
    return (
        <ul className="w-full border-r ">
            {data?.map((item) => (
                <li
                    // key={item.id}
                    className={`w flex border-b p-2 hover:bg-gray-100 ${currentID === item.id && 'bg-gray-100'}`}
                >
                    <div className="px-2 py-1">
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div
                        // key={item.id}
                        className="space-x-auto flex w-full cursor-pointer justify-between"
                    >
                        <div className="justify-start text-left">
                            <div id="name" className="text-black">
                                {/* {item.name} */}
                            </div>
                            <div
                                id="planeInfo"
                                className="fill-slate-500 text-slate-500"
                            >
                                {/* {item.planeInfo} */}
                            </div>
                            <div
                                id="planeArrivalInfo"
                                className="flex text-black"
                            >
                                <div id="ticketNumber" className="pr-1">
                                    {/* {item.planeArrivalInfo.ticketNumber} */}
                                </div>
                                |
                                <div id="date" className="pl-1">
                                    {/* {item.planeArrivalInfo.date} */}
                                </div>
                            </div>
                        </div>

                        <div className="justify-end text-right">
                            <div id="money" className="flex text-black">
                                <div
                                    id="currency"
                                    className="px-1 text-green-500"
                                >
                                    {/* {item.money.currency} */}
                                </div>
                                <div id="amount" className="px-1">
                                    {/* {item.money.amount} */}
                                </div>
                            </div>
                            <div id="planeState" className="text-black">
                                {/* {item.planeState} */}
                            </div>
                            <div id="arrivalStatus" className="text-black">
                                {/* {item.arrivalStatus} */}
                            </div>
                        </div>
                    </div>
                </li>
            ))}
            <Pagination
                className="flex justify-end"
                currentPage={0}
                totalPages={0}
                onPageChange={function (): void {
                    throw new Error('Function not implemented.')
                }}
            />
        </ul>
    )
}
