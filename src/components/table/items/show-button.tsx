import { useState } from 'react';

import {
    DropdownItemType,
    ShowTableOptionsType,
} from '@/utils/types/page-type/table.type';
import Buttons from '@/components/buttons/buttons';

interface ShowButtonProps {
    dropdownOptions: ShowTableOptionsType;
}

export default function ShowButton({
    dropdownOptions,
}: Readonly<ShowButtonProps>) {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const Title = (
        <div data-slot="title" className="">
            {selectedOption} {dropdownOptions.title}
        </div>
    );

    const props = {
        hasDropdownIcon: true,
        dropdownOptions: dropdownOptions.items,
        setSelectedOption: setSelectedOption,
        dropdownText: "text-start font-semibold",
        dropdownClassName: "w-40",
    };

    return (
        <Buttons
            {...(dropdownOptions.items ? props : {})}
        >
            {Title}
        </Buttons>
    );
}
