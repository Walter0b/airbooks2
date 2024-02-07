import Pagination from "@components/table/pagination";
import { TravelerCompactListInterface } from "@utils/mock/data/travelers/table";

export default function TravelerCompactList({ data }: Readonly<{ data: TravelerCompactListInterface[] }>) {
    
    return (
        <ul className="w-full border-r ">


            {data?.map((item, index) => (
                <li key={index} className="flex w border-b p-2 hover:bg-gray-100">
                    <div className="py-1 px-2">
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div key={index} className="space-x-auto flex w-full justify-between cursor-pointer">
                        <div className="justify-start text-left">
                            <div id="name" className="text-black">{item.name}</div>
                            <div id="planeInfo" className="fill-slate-500 text-slate-500">{item.planeInfo}</div>
                            <div id="planeArrivalInfo" className="flex text-black">
                                <div id="ticketNumber" className="pr-1">{item.planeArrivalInfo.ticketNumber}</div>|
                                <div id="date" className="pl-1">{item.planeArrivalInfo.date}</div>
                            </div>
                        </div>

                        <div className="justify-end text-right">
                            <div id="money" className="flex text-black">
                                <div id="currency" className="text-green-500 px-1">{item.money.currency}</div>
                                <div id="amount" className="px-1">{item.money.amount}</div>
                            </div>
                            <div id="planeState" className="text-black">{item.planeState}</div>
                            <div id="arrivalStatus" className="text-black">{item.arrivalStatus}</div>
                        </div>
                    </div>
                </li>
            ))}
            <Pagination className='flex justify-end' currentPage={0} totalPages={0} onPageChange={function (): void {
                throw new Error("Function not implemented.");
            } } />
        </ul>
    )
}