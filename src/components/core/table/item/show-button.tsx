import { useState } from 'react'

import { DropdownItemType, ShowTableOptionsType } from '@utils/models/interface/table'
import { Dropdown } from '@components/buttons/dropdown'
import Buttons from '@components/buttons/buttons'

interface ShowButtonProps {
    dropdownOptions: ShowTableOptionsType
}

export default function ShowButton({
    dropdownOptions,
}: Readonly<ShowButtonProps>) {
    const [selectedOption, setSelectedOption] = useState<string>('')
    const Title = (
        <div data-slot="title">
            {' '}
            {selectedOption} {dropdownOptions.title}
        </div>
    )

    return (
        <Buttons hasDropdownIcon={true} >
            {Title}
            <Dropdown
                size={36}
                data-slot="dropdown"
                dropdownOptions={dropdownOptions.items as DropdownItemType[]}
                setSelectedOption={setSelectedOption}
            ></Dropdown>
        </Buttons>
    )
}
