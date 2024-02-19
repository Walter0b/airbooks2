import Pagination from '@components/table/pagination'
import { TravelerCompactListInterface } from '@utils/mock/data/travelers/table'
import { NavLink, useParams } from 'react-router-dom'

export default function TravelerCompactList({
    data,
}: Readonly<{ data: TravelerCompactListInterface[] }>) {
    const currentID = parseInt(useParams().id as string, 10)
    return (
        <ul className="w-full border-r">
            {data?.map((item) => (
                <NavLink
                    to={item.id.toString()}
                    key={item.id}
                    className={`w flex border-b p-2 hover:!bg-gray-100 ${currentID === item.id && 'bg-gray-100'}`}
                >
                    <div className="px-2 py-1">
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div
                        key={item.id}
                        className="space-x-auto flex w-full font-medium cursor-pointer justify-between"
                    >
                        <div className="justify-start text-left">
                            <div id="name" className="text-black">
                                {item.name}
                            </div>


                            <div
                                id="planeArrivalInfo"
                                className="flex  text-black"
                            >
                                <div id="ticketNumber" className="text-gray-500 pr-1">
                                    {item.nationality}
                                </div>
                                |
                                <div id="date" className=" font-semibold text-cyan-550 pl-1">
                                    {item.mobilePhone}
                                </div>
                            </div>
                        </div>

                        <div className="justify-end text-right">
                            <div id="money" className="flex text-black">

                                <div id="amount" className="px-1">
                                    {item.income}
                                </div>
                            </div>
                            <div id="planeState" className="text-black">
                                {item.travelStatus}
                            </div>

                        </div>
                    </div>
                </NavLink>
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
