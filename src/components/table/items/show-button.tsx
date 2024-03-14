import { useState } from 'react'

import { DropdownItemType, ShowTableOptionsType } from '@/utils/models/interface/table'
import Buttons from '@/components/buttons/buttons'

interface ShowButtonProps {
    dropdownOptions: ShowTableOptionsType
}

export default function ShowButton({
    dropdownOptions,
}: Readonly<ShowButtonProps>) {
    const [selectedOption, setSelectedOption] = useState<string>('')
    const Title = (
        <div data-slot="title" >
            {' '}
            {selectedOption} {dropdownOptions.title}
        </div>
    )

    return (

        < Buttons
            hasDropdownIcon={true}
            dropdownText='text-start'
            dropdownClassName='w-36'
            dropdownOptions={dropdownOptions.items as DropdownItemType[]}
            setSelectedOption={setSelectedOption}
        >{Title}
        </Buttons>
    )
}
