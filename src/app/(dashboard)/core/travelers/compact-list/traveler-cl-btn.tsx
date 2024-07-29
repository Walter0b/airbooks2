import CloseButton from '@/components/buttons/close-Button'
import {DetailComponentInputs, InputType, TableOptionsType} from '@/utils/types/page-type/table.type'
import {MailIcon} from "@/assets/svg/mail";
import GenericInput from "@/components/layout/generic-header-input";
import clsx from "clsx";

export default function TravelerCompactListHeader({
    dropdownOptions,
    handleOpenModal,
}: Readonly<{
    dropdownOptions: TableOptionsType
    handleOpenModal: () => void
}>) {

    const testElt: DetailComponentInputs[][] = [
        [
            {
                id: 'edit_button',
                type: InputType.Button,
                icon: MailIcon,
                attrs: {
                    className: 'mr-2 h-full rounded border border-stone-300 bg-neutral-100 px-3 hover:shadow-md',
                },
                group: 1
            }
        ],
        [
            {
                id: 'dropdown',
                type: InputType.Dropdown,
                value: 'More',
                attrs: {
                    hasDropdownIcon: true,
                    className:'mr-12 flex h-full items-center rounded border-[0.8px] bg-neutral-100 px-3 hover:shadow-md ',
                    arrowClassName:'ml-2',
                    dropdownClassName:'mr-12 mt-1 right-0 w-44',
                    dropdownText:'text-center py-2',
                    dropdownTitles:'right-0 mt-2 mr-11 font-medium',
                    dropdownOptions: dropdownOptions.more
                },
                group: 2
            }
        ]
    ]

    return (
        <div className="flex h-full w-full items-end">
            <div className="flex h-8 w-full justify-end pr-5">
                {testElt.map((inputsGroup: DetailComponentInputs[], index: number) => {
                    return (<span key={index} className="flex mr-4">
                        {inputsGroup.map((elt: DetailComponentInputs) => {
                            return (<GenericInput
                                key={elt.id}
                                type={elt.type}
                                {...elt.attrs}>
                                {elt.icon ? <elt.icon className='w-3'/> : elt.value}
                            </GenericInput>)
                        })}
                    </span>)
                })}
                <CloseButton redirect="/" />
            </div>
        </div>
    )
}
