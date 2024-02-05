import { useState } from 'react'
import Buttons from './buttons'
import { Dropdown } from './dropdown'
import { DropdownItems, ShowTableOptions } from '@utils/models/interface/table'

interface ShowButtonProps {
    dropdownOptions: ShowTableOptions
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
                size={36}
                data-slot="dropdown"
                dropdownOptions={dropdownOptions.items as DropdownItems[]}
                setSelectedOption={setSelectedOption}
            ></Dropdown>
        </Buttons>
    )
}
