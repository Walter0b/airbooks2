import { CrossIcon } from "@assets/svg/cross";
import { PenIcon } from "@assets/svg/pen";
import Buttons from "@components/buttons/buttons";
import { Dropdown } from "@components/buttons/dropdown";
import { TableOptionsInterface } from "@utils/models/interface/table";

export default function TravelerCompactListHeader({ dropdownOptions, CloseCompactList }: Readonly<{ dropdownOptions: TableOptionsInterface, CloseCompactList?: () => void }>) {
    return (
        <div className="flex w-full items-end">
            <div className="flex justify-end pr-5 h-8 w-full">
                <button className="border border-stone-300 bg-neutral-100 hover:shadow-md rounded px-3 h-full mr-2 ">
                    <PenIcon className="w-3" />
                </button>
                <button className="border border-orange-800 rounded px-3 h-full mr-2 bg-red-650 text-white hover:shadow-md">
                    New travel Item
                </button>
                <Buttons
                    hasDropdownIcon={true}
                    className="flex items-center rounded bg-neutral-100 mr-12 hover:shadow-md border-[0.8px] px-3 h-full "
                    arrowClassName="mt-1"
                >
                    <div data-slot="title" className="text-sm text-black ">
                        More
                    </div>
                    <Dropdown
                        size={44}
                        text='!text-center'
                        className="right-0 mt-6  font-medium py-3 "
                        data-slot="dropdown"
                        dropdownOptions={dropdownOptions.more}
                    ></Dropdown>
                </Buttons>

                <button type="button" onClick={CloseCompactList}>
                    <CrossIcon
                        data-slot="title"
                        className="w-4 fill-black"
                        className1=" h-10"
                        className2="w-10"
                    />
                </button>
            </div>
        </div>

    )
}
