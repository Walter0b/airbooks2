import { useState } from "react";
import Buttons from "./dynamicButton";
import { DropdownOptions } from "@utils/models/interface/table";
import { Dropdown } from "./dropdown";

interface ShowButtonProps {
    dropdownOptions: DropdownOptions[];
}

export default function ShowButton({ dropdownOptions }: Readonly<ShowButtonProps>) {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const currentPage = window.location.pathname.replace('/', '');
    const capitalizedPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    const Title = <div data-slot="title" > {selectedOption} {capitalizedPage}</div>;


    return (
        <Buttons  hasDownIcon={true}>
            {Title}
            <Dropdown data-slot="dropdown" dropdownOptions={dropdownOptions} setSelectedOption={setSelectedOption}  >
            </Dropdown>
        </Buttons>
    );
}

