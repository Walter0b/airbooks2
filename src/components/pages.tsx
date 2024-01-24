import { CrossIcon } from "@assets/svg/cross";
import { DownIcon } from "@assets/svg/down";
import { LightBulbIcon } from "@assets/svg/lightbulb";
import Table from "./table/table";
import { Data, columns } from "@utils/test/table";

export default function Pages() {
    return (
        <div className="flex-row h-full ">
            <div className="max h-16 hidden border md:flex rounded-sm justify-between items-center space-x-4  w-full">
                <div id="table-left-menu-option" aria-label="table left menu option" className="font-titles text-gray-500 text-lg m-5 flex">
                    menu
                    <DownIcon className="w-2 ml-1 fill-gray-500 mb-1" />
                </div>
                <div id="table-right-menu-option" aria-label="table right menu option" className=" text-gray-500 flex">
                    <button className="p-2 border rounded-md bg-red-700 flex justify-center items-center">
                        <CrossIcon
                            className="w-3 fill-white rotate-45"
                            className1=" h-10"
                            className2="w-10"
                        />
                    </button>
                    <button className="p-2 border-[0.8px] border-grey-450 ml-4 rounded-l-md bg-gray-100 flex justify-center items-center">
                        <CrossIcon
                            className="w-3 fill-gray-700 rotate-45"
                            className1=" h-10"
                            className2="w-10"
                        />
                    </button>
                    <button className="p-2 border-[0.8px] border-grey-450  bg-gray-100 flex justify-center items-center">
                        <CrossIcon
                            className="w-3 fill-gray-700  rotate-45"
                            className1=" h-10"
                            className2="w-10"
                        />
                    </button>
                    <button className="p-2 border-[0.8px] border-grey-450 rounded-r-md bg-gray-100 flex justify-center items-center">
                        <CrossIcon
                            className="w-3 fill-gray-700  rotate-45"
                            className1=" h-10"
                            className2="w-10"
                        />
                    </button>
                    <div className="h-5 border-l-2 p-2 ml-2 mt-2"></div>
                    <div className=" flex">
                        <LightBulbIcon className="fill-blue-500 w-2 m-1" />
                        <div className="flex items-center text-blue-500 cursor-pointer mr-4 font-bold">Tips</div></div>
                </div>
            </div>
            <Table data={Data} columns={columns} />
        </div>
    )
}