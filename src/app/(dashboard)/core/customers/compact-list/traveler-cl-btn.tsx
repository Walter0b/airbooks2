import { PenIcon } from '@/assets/svg/pen'
import Buttons from '@/components/buttons/buttons'
import CloseButton from '@/components/buttons/close-Button'
import { TableOptionsType } from '@/utils/models/interface/table'

export default function TravelerCompactListHeader({
    dropdownOptions,
    handleOpenModal,
}: Readonly<{
    dropdownOptions: TableOptionsType
    handleOpenModal: () => void
}>) {
    return (
        <div className="flex h-full w-full items-end">
            <div className="flex h-8 w-full justify-end pr-5">
                <button
                    id="edit_buttons"
                    onClick={() => handleOpenModal()}
                    className="mr-2 h-full rounded border border-stone-300 bg-neutral-100 px-3 hover:shadow-md "
                >
                    <PenIcon className="w-3" />
                </button>
                <button className="bg-red-650 mr-2 h-full rounded border border-orange-800 px-3 text-white hover:shadow-md">
                    New travel Item
                </button>
                <Buttons
                    hasDropdownIcon={true}
                    className="mr-12 flex h-full items-center rounded border-[0.8px] bg-neutral-100 px-3 hover:shadow-md "
                    arrowClassName="ml-2"
                    dropdownClassName="mr-12 mt-1 right-0 w-44"
                    dropdownText="text-center py-2"
                    dropdownTitles="right-0 mt-2 mr-11 font-medium"
                    dropdownOptions={dropdownOptions.more}
                >
                    <div data-slot="title" className="text-sm text-black ">
                        More
                    </div>
                </Buttons>
                <CloseButton redirect="/" />
            </div>
        </div>
    )
}
