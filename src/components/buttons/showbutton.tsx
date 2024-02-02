import { useState } from 'react'
import Buttons from './dynamicButton'
import { Dropdown } from './dropdown'
import { DropdownOptions } from '@utils/models/interface/table'

interface ShowButtonProps {
    dropdownOptions: DropdownOptions
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
        <Buttons hasArrowIcon={true}>
            {Title}
            <Dropdown
                data-slot="dropdown"
                dropdownOptions={dropdownOptions}
                setSelectedOption={setSelectedOption}
            ></Dropdown>
        </Buttons>
    )
}
