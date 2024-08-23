'use client'

import {TableOptionsType} from "@/utils/types/page-type/table.type";
import CloseButton from "@/components/buttons/close-Button";
import ButtonLayout from "@/foundry/actionButtonLayout/actionButtonLayout";
import Buttons from "@/components/buttons/buttons";
import {useParams, useRouter} from "next/navigation";

export default function CompactListHeader({
    dropdownOptions,
    justify_content,
    handleOpenModal
}: Readonly<{
    dropdownOptions: TableOptionsType,
    justify_content?: string,
    handleOpenModal: () => void
}>) {
    const params = useParams();
    const route = useRouter();

    return (
        <div className="flex h-full w-full items-center">
            <div className="flex h-8 w-full justify-between pr-5">
                <div className={`flex flex-row justify-between ${justify_content}`}>
                    <ButtonLayout isEditable={true}
                                  isPrintable={true}
                                  isExportableToPDF={true}
                                  canSendEmail={true}
                                  selectTemplate={true}
                    />
                    <div className='flex flex-row'>
                        { dropdownOptions.mainButtons?.map( (button) => {
                            return (
                                <Buttons key={button.id}
                                         aria-label={button.id}
                                         {...button.attrs}
                                >
                                    <span data-slot='title'>{ button.value }</span>
                                </Buttons>
                            )
                        })}
                    </div>
                    <Buttons aria-label='more_dropdown'
                             hasDropdownIcon={true}
                             className='border-grey-450 flex h-full items-center rounded border-[0.8px] bg-neutral-100 px-3 hover:shadow-md'
                             arrowClassName='ml-2'
                             dropdownClassName='mr-12 mt-1 right-0 w-44'
                             dropdownText='text-center py-2'
                             dropdownTitles='right-0 mt-2 mr-11 font-medium'
                             dropdownOptions={dropdownOptions?.more}
                    >
                        <span data-slot='title' className='text-black'>More</span>
                    </Buttons>
                </div>
                <CloseButton redirect="/" />
            </div>
        </div>
    )
}