import { useState } from "react";
import MagicButton from "./magicbutton";
import { DropdownOptions } from "@utils/models/interface/table";

interface ShowButtonProps {
    dropdownOptions: DropdownOptions[];
}

export default function ShowButton({ dropdownOptions }: ShowButtonProps) {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const currentPage = window.location.pathname.replace('/', '');
    const capitalizedPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    const title = `${capitalizedPage} ${selectedOption}`;


    return (
        <MagicButton children={title} NoRedux={setSelectedOption} hasDropdown={true} dropdownOptions={dropdownOptions} />
    );
}

