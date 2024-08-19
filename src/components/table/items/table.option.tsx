import { CrossIcon } from '@/assets/svg/cross'
import Buttons from '../../buttons/buttons'
import { RotateIcon } from '@/assets/svg/rotate'
import { ArrowIcon } from '@/assets/svg/arrow'
import { Hamburger } from '@/assets/svg/hamburger'
import { LightBulbIcon } from '@/assets/svg/lightbulb'
import { TableOptionsType } from '@/utils/types/page-type/table.type'
import { useParams } from 'next/navigation'
import { useFetchTravelersQuery } from '@/states/reducer/apiSlice'
import { ModalContext } from '@/states/context/ModalContext'
import { openModal } from '@/states/reducer/modalSlice'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'

export default function TableOptions({
    showTableOptions,
}: Readonly<{
    showTableOptions: TableOptionsType
}>) {
    const { refetch } = useFetchTravelersQuery({ page: 1, pageSize: 10 })
    const handleOnclick = async () => {
        refetch()
    }

    const { setPageLabel } = useContext(ModalContext)

    const dispatch = useDispatch()
    const handleOpenModal = (pageLabel: string) => {
        if (pageLabel) {
            setPageLabel?.(pageLabel)
            dispatch(openModal())
        }
    }

    const currentID = parseInt(useParams().id as string, 10)
    return (
        <div
            id="table-right-menu-option"
            aria-label="table right menu option"
            className="flex text-gray-500"
        >
            <div aria-label='add button' className="mr-4 flex">
                {showTableOptions?.sort && <button
                    onClick={() => handleOpenModal(showTableOptions.pageLabel)}
                    className="bg-red-650 flex h-full items-center  justify-center rounded p-2"
                >
                    <CrossIcon
                        data-slot="title"
                        className="w-3 rotate-45 fill-white"
                        className1=" h-10"
                        className2="w-10"
                    />
                </button>
                }


                <button aria-label='refresh'
                    onClick={handleOnclick}
                    className="border-grey-450 ml-4 flex h-full items-center justify-center rounded-l border-[0.8px] bg-gray-100 p-2"
                >
                    <RotateIcon
                        data-slot="title"
                        className="w-3 fill-gray-700"
                    />
                </button>
                {showTableOptions?.sort &&
                    <Buttons aria-label='sort'
                        className="border-grey-450 flex  h-full items-center justify-center gap-[1px] border-[0.8px] bg-gray-100 px-2"
                        dropdownClassName="right-0 mt-2 w-44  "
                        dropdownTitles="text-gray-400 font-medium text-start text-xs first:mt-2 first:ml-2 first:mb-2 last:mb-1 ml-1 pt-1 last:capitalize"
                        dropdownText="text-start font-medium "
                        dropdownOptions={showTableOptions?.sort}
                    >
                        <div data-slot="title">
                            <ArrowIcon className="w-2 rotate-180" />
                            <ArrowIcon className="mt-[-7px] w-2" />
                        </div>
                    </Buttons>
                }

                {showTableOptions?.options && <Buttons aria-label='options'
                    className="border-grey-450 flex h-full items-center justify-center rounded-r border-[0.8px] bg-gray-100 p-2"
                    dropdownClassName="right-0 mt-2 w-fit"
                    dropdownText="text-start whitespace-nowrap font-medium "
                    dropdownOptions={showTableOptions?.options}
                >
                    <Hamburger
                        data-slot="title"
                        className="w-3 fill-gray-700"
                    />
                </Buttons>
                }

            </div>

            {!currentID && (
                <div className=" flex">
                    <hr className="mt-3 w-5 rotate-90 border" />
                    <div className="flex">
                        <LightBulbIcon className="m-1 w-2 fill-blue-500" />
                        <div className="flex cursor-pointer items-center font-bold text-blue-500 md:mr-4">
                            Tips
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
