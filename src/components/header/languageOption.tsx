'use client'
import Buttons from '@/components/buttons/buttons'
import { LanguageOptions } from '@/static/page/header'
import { cn } from '@/utils/intext'
import { useState } from 'react'

export default function LanguageOption({ className }: { className?: string }) {
    const [selectedOption, setSelectedOption] = useState<string>(
        'ENDA TRAVEL - English'
    )

    return (
        <div className="mb-2 ml-auto flex items-center">
            <Buttons
                dropdownClassName="right-0 w-56"
                dropdownText="!text-xs font-normal"
                setSelectedOption={setSelectedOption}
                className={cn(className, 'items - center hover:text-white')}
            hasDropdownIcon={true}
            arrowClassName="fill-white  "
            >
            <div data-slot="title" className=" mr-2 hover:text-white">
                {selectedOption}
            </div>
        </Buttons>
        </div >
    )
}
