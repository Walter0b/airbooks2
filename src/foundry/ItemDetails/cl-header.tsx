'use client'

import { TableOptionsType } from "@/utils/types/page-type/table.type";
import CloseButton from "@/components/buttons/close-Button";
import ButtonLayout from "@/foundry/actionButtonLayout/actionButtonLayout";
import Buttons from "@/components/buttons/buttons";
import { memo, useEffect, useState } from "react";
import { CompactListButtonLayout } from "@/utils/types/page-type/button.type";




export const CompactListHeader = memo(function CompactListHeader({
    dropdownOptions,
    justifyContent,
    contentToDisplay,
    // handleOpenModal
}: Readonly<{
    dropdownOptions: TableOptionsType,
    justifyContent?: string,
    contentToDisplay?: string,
    // handleOpenModal: () => void
}>) {
    const [activeActionButtons, setActiveActionButtons] = useState<CompactListButtonLayout>()


    useEffect(() => {
        setActiveActionButtons(dropdownOptions?.actionButtons?.find(value => value.api_name === contentToDisplay))
    }, [contentToDisplay,dropdownOptions?.actionButtons])

    return (
        <div className="flex h-full w-full items-center">
            <div className="flex h-8 w-full justify-between pr-5">
                <div className={`flex flex-row w-full mr-4 justify-between ${justifyContent}`}>
                    <ButtonLayout
                        isEditable={activeActionButtons?.isEditable}
                        isPrintable={activeActionButtons?.isPrintable}
                        isExportableToPDF={activeActionButtons?.isExportableToPDF}
                        canSendEmail={activeActionButtons?.canSendEmail}
                        selectTemplate={activeActionButtons?.selectTemplate}
                    />
                    <div className='flex flex-row'>
                        {dropdownOptions.mainButtons?.map((button) => {
                            return (
                                <Buttons key={button.id}
                                    aria-label={button.id}
                                    {...button.attrs}
                                >
                                    <span data-slot='title'>{button.value}</span>
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
})

export default CompactListHeader