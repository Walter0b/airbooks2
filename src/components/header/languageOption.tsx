import { Dropdown } from '@components/buttons/dropdown'
import Buttons from '@components/buttons/buttons'
import { LanguageOptions } from '@static/page/header'
import { useState } from 'react'

export default function LanguageOption({ className }: { className?: string }) {
    const [selectedOption, setSelectedOption] = useState<string>(
        'ENDA TRAVEL - English'
    )

    return (
        <div className="ml-auto flex items-center">
            <Buttons
                className={`${className} items-end hover:text-white`}
                hasArrowIcon={true}
                arrowClassName="fill-white mt-1 hover:!fill-white "
            >
                <div data-slot="title" className="mb-2 hover:text-white">
                    {selectedOption}
                </div>
                <Dropdown
                    size={56}
                    className='  w- right-0'
                    titles=" text-gray-400 font-medium text-xs first:mt-1 first:mb-2 last:mb-1 ml-1 pt-1 last:capitalize "
                    text="!text-xs font-normal"
                    data-slot="dropdown"
                    dropdownOptions={LanguageOptions}
                    setSelectedOption={setSelectedOption}
                ></Dropdown>
            </Buttons>
        </div>
    )
}
