import { CrossIcon } from "@assets/svg/cross";
import MagicButton from "./magicbutton";
import { RotateIcon } from "@assets/svg/rotate";
import { DownIcon } from "@assets/svg/down";
import { Hamburger } from "@assets/svg/hamburger";

export default function TableOptions() {
    return (
        <div id="table-right-menu-option" aria-label="table right menu option" className=" text-gray-500 flex">
            <button className="p-2 border rounded-md bg-red-700 flex justify-center items-center">
                <CrossIcon
                    className="w-3 fill-white rotate-45"
                    className1=" h-10"
                    className2="w-10"
                />
            </button>

            <MagicButton children={<RotateIcon className="w-3 !fill-gray-700" />} buttonClassname="p-2 border-[0.8px] border-grey-450 ml-4 rounded-l-md bg-gray-100 flex justify-center items-cente" />

            <MagicButton children={<> <DownIcon className="w-2 rotate-180" />
                <DownIcon className="w-2 mt-[-7px]" /></>} buttonClassname="x-2 border-[0.8px] flex-col border-grey-450  bg-gray-100 flex justify-center items-center" />
           
            <MagicButton children={<Hamburger
                className="w-3 fill-gray-700 "
            />}  buttonClassname="p-2 border-[0.8px] border-grey-450 rounded-r-md bg-gray-100 flex justify-center items-cente"/>
           
        </div>

    )
}