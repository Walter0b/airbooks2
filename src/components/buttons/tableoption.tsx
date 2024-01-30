import { CrossIcon } from "@assets/svg/cross";
import Buttons from "./dynamicButton";
import { RotateIcon } from "@assets/svg/rotate";
import { DownIcon } from "@assets/svg/down";
import { Hamburger } from "@assets/svg/hamburger";
import { LightBulbIcon } from "@assets/svg/lightbulb";

export default function TableOptions() {
    return (
        <div id="table-right-menu-option" aria-label="table right menu option" className=" text-gray-500 flex">
            <div className="flex">
               <Buttons className="p-2 h-full rounded bg-red-700  flex justify-center items-center">
                      <CrossIcon  data-slot='title'
                        className="w-3 fill-white rotate-45"
                        className1=" h-10"
                        className2="w-10"
                    />
                </Buttons>

                <Buttons className="p-2 h-full border-[0.8px] border-grey-450 ml-4 rounded-l bg-gray-100 flex justify-center items-center">
                    <RotateIcon data-slot='title' className="w-3 fill-gray-700" />
                </Buttons>

                <Buttons className="px-2 h-full border-[0.8px] flex-col border-grey-450 bg-gray-100 flex justify-center items-center gap-[1px]">
                    <div data-slot='title' >
                        <DownIcon  className="w-2 rotate-180" />
                        <DownIcon className="w-2 mt-[-7px]" />
                    </div>
                </Buttons>

                <Buttons className="p-2 h-full border-[0.8px] border-grey-450 rounded-r bg-gray-100 flex justify-center items-center">
                    <Hamburger data-slot='title'  className="w-3 fill-gray-700" />
                </Buttons>
            </div>

            <div className=" flex">
                <div className="h-5 border-l-2 p-2 ml-4 mt-2"></div>

                <LightBulbIcon  className="fill-blue-500 w-2 m-1" />
                <div className="flex items-center text-blue-500 cursor-pointer mr-4 font-bold">Tips</div>
            </div>


        </div>

    )
}