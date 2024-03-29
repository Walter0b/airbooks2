import { CrossIcon } from '@/assets/svg/cross'
import Buttons from '../../buttons/buttons'
import { RotateIcon } from '@/assets/svg/rotate'
import { ArrowIcon } from '@/assets/svg/arrow'
import { Hamburger } from '@/assets/svg/hamburger'
import { LightBulbIcon } from '@/assets/svg/lightbulb'
import { TableOptionsType } from '@/utils/models/interface/table'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";

export default function TableOptions({
    showTableOptions,
}: Readonly<{
    showTableOptions: TableOptionsType
}>) {

    const currentID = parseInt(useParams().id as string, 10);
    const navigate = useNavigate()
    return (
        <div
            id="table-right-menu-option"
            aria-label="table right menu option"
            className="flex text-gray-500"
        >
            <div className="flex mr-4">
                <Buttons onClick={() => navigate('new')} className="flex h-full items-center justify-center  rounded bg-red-650 p-2">
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

                <Buttons className="flex h-full  items-center justify-center gap-[1px] border-[0.8px] border-grey-450 bg-gray-100 px-2"

                    dropdownClassName="right-0 mt-2 w-44"
                    dropdownTitles="text-gray-400 font-medium text-start text-xs first:mt-2 first:ml-2 first:mb-2 last:mb-1 ml-1 pt-1 last:capitalize"
                    dropdownText="text-start font-medium"
                    dropdownOptions={showTableOptions?.sort}

                >
                    <div data-slot="title">
                        <ArrowIcon className="w-2 rotate-180" />
                        <ArrowIcon className="mt-[-7px] w-2" />
                    </div>

                </Buttons>

                <Buttons className="flex h-full items-center justify-center rounded-r border-[0.8px] border-grey-450 bg-gray-100 p-2"
                    dropdownClassName="right-0 mt-2 w-fit"
                    dropdownText="text-start whitespace-nowrap font-medium"
                    dropdownOptions={showTableOptions?.action}
                >
                    <Hamburger
                        data-slot="title"
                        className="w-3 fill-gray-700"
                    />

                </Buttons>
            </div>

            {!currentID &&
                <div className=" flex">
                    <hr className='mt-4 w-5 rotate-90 border' />
                    <div className='flex'>
                        <LightBulbIcon className="m-1 w-2 fill-blue-500" />
                        <div className="md:mr-4 flex cursor-pointer items-center font-bold text-blue-500">
                            Tips
                        </div></div>

                </div>}
        </div>
    )
}
