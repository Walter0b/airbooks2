import { useState } from 'react'

import {
    DropdownItemType,
    ShowTableOptionsType,
} from '@/utils/types/page-type/table.type'
import Buttons from '@/components/buttons/buttons'

interface ShowButtonProps {
    dropdownOptions: ShowTableOptionsType
}

export default function ShowButton({
    dropdownOptions,
}: Readonly<ShowButtonProps>) {
    const [selectedOption, setSelectedOption] = useState<string>('')
    const Title = (
        <div data-slot="title" className="">
            {' '}
            {selectedOption} {dropdownOptions.title}
        </div>
    )

    return (
        <Buttons
            hasDropdownIcon={true}
            dropdownText="text-start font-semibold"
            dropdownClassName="w-40"
            dropdownOptions={dropdownOptions.items}
            setSelectedOption={setSelectedOption}
        >
            {Title}
        </Buttons>
    )
}
