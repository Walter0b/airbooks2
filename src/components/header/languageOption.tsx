import Buttons from '@/components/buttons/buttons'
import { LanguageOptions } from '@/static/page/header'
import { useState } from 'react'

export default function LanguageOption({ className }: { className?: string }) {
    const [selectedOption, setSelectedOption] = useState<string>(
        'ENDA TRAVEL - English'
    )

    return (
        <div className="ml-auto flex mb-2 items-center">
            <Buttons
                dropdownClassName="right-0 w-56"
                dropdownText="!text-xs font-normal"
                dropdownOptions={LanguageOptions}
                setSelectedOption={setSelectedOption}
                className={`${className} items-center hover:text-white`}
                hasDropdownIcon={true}
                arrowClassName="fill-white  " >
                <div data-slot="title" className=" hover:text-white mr-2">
                    {selectedOption}
                </div>
            </Buttons>
        </div>
    )
}
