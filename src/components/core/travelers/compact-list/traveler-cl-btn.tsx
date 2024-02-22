import { PenIcon } from '@assets/svg/pen'
import Buttons from '@components/buttons/buttons'
import { Dropdown } from '@components/buttons/dropdown'
import CloseButton from '@components/buttons/usefull-buttons'
import { TableOptionsInterface } from '@utils/models/interface/table'

export default function TravelerCompactListHeader({
    dropdownOptions,
}: Readonly<{
    dropdownOptions: TableOptionsInterface
}>) {
    return (
        <div className="flex w-full h-full items-end">
            <div className="flex h-8 w-full justify-end pr-5">
                <button className="mr-2 h-full rounded border border-stone-300 bg-neutral-100 px-3 hover:shadow-md ">
                    <PenIcon className="w-3" />
                </button>
                <button className="mr-2 h-full rounded border border-orange-800 bg-red-650 px-3 text-white hover:shadow-md">
                    New travel Item
                </button>
                <Buttons
                    hasDropdownIcon={true}
                    className="mr-12 flex h-full items-center rounded border-[0.8px] bg-neutral-100 px-3 hover:shadow-md "
                    arrowClassName="ml-2"
                >
                    <div data-slot="title" className="text-sm text-black ">
                        More
                    </div>
                    <Dropdown
                        size={44}
                        text="r!text-center py-2"
                        className="right-0 mt-2 mr-11 font-medium"
                        data-slot="dropdown"
                        dropdownOptions={dropdownOptions.more}
                    ></Dropdown>
                </Buttons>
                <CloseButton  />
            </div>
        </div>
    )
}
