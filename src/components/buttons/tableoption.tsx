import { CrossIcon } from '@assets/svg/cross'
import Buttons from './dynamicButton'
import { RotateIcon } from '@assets/svg/rotate'
import { ArrowIcon } from '@assets/svg/arrow'
import { Hamburger } from '@assets/svg/hamburger'
import { LightBulbIcon } from '@assets/svg/lightbulb'

export default function TableOptions() {
    return (
        <div
            id="table-right-menu-option"
            aria-label="table right menu option"
            className=" flex text-gray-500"
        >
            <div className="flex">
                <Buttons className="flex h-full items-center justify-center  rounded bg-red-700 p-2">
                    <CrossIcon
                        data-slot="title"
                        className="w-3 rotate-45 fill-white"
                        className1=" h-10"
                        className2="w-10"
                    />
                </Buttons>

                <Buttons className="ml-4 flex h-full items-center justify-center rounded-l border-[0.8px] border-grey-450 bg-gray-100 p-2">
                    <RotateIcon
                        data-slot="title"
                        className="w-3 fill-gray-700"
                    />
                </Buttons>

                <Buttons className="flex h-full flex-col items-center justify-center gap-[1px] border-[0.8px] border-grey-450 bg-gray-100 px-2">
                    <div data-slot="title">
                        <ArrowIcon className="w-2 rotate-180" />
                        <ArrowIcon className="mt-[-7px] w-2" />
                    </div>
                </Buttons>

                <Buttons className="flex h-full items-center justify-center rounded-r border-[0.8px] border-grey-450 bg-gray-100 p-2">
                    <Hamburger
                        data-slot="title"
                        className="w-3 fill-gray-700"
                    />
                </Buttons>
            </div>

            <div className=" flex">
                <div className="ml-4 mt-2 h-5 border-l-2 p-2"></div>

                <LightBulbIcon className="m-1 w-2 fill-blue-500" />
                <div className="mr-4 flex cursor-pointer items-center font-bold text-blue-500">
                    Tips
                </div>
            </div>
        </div>
    )
}
