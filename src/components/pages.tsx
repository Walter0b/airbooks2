import { CrossIcon } from "@assets/svg/cross";
import { DownIcon } from "@assets/svg/down";
import { LightBulbIcon } from "@assets/svg/lightbulb";
import { RotateIcon } from "@assets/svg/rotate";
import { Hamburger } from "@assets/svg/hamburger";
import { DropdownOptions } from "@utils/models/interface/table";
import ShowButton from "./buttons/showbutton";
import { ReactNode } from "react";

interface pageProps {
    children: ReactNode,
    dropdownOptions: DropdownOptions[]
}
export default function Pages({ children, dropdownOptions }: Readonly<pageProps>) {

    return (
        <div className="flex-row h-full ">
            <div className="max h-16  border flex rounded-sm justify-between items-center space-x-4  w-full">
                <div id="table-left-menu-option" aria-label="table left menu option" className="ml-4">
                    <ShowButton dropdownOptions={dropdownOptions} />
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
                        <RotateIcon className="w-3 !fill-gray-700" />
                    </button>
                    <button className="px-2 border-[0.8px] flex-col border-grey-450  bg-gray-100 flex justify-center items-center">
                        <DownIcon className="w-2 rotate-180" />
                        <DownIcon className="w-2 mt-[-7px]" />
                    </button>

                    <button className="p-2 border-[0.8px] border-grey-450 rounded-r-md bg-gray-100 flex justify-center items-center">
                        <Hamburger
                            className="w-3 fill-gray-700 "
                        />
                    </button>
                    <div className="h-5 border-l-2 p-2 ml-2 mt-2"></div>
                    <div className=" flex">
                        <LightBulbIcon className="fill-blue-500 w-2 m-1" />
                        <div className="flex items-center text-blue-500 cursor-pointer mr-4 font-bold">Tips</div></div>
                </div>
            </div>
            {children}
        </div>
    )
}