import { DownIcon } from "@assets/svg/down";
import { DropdownOptions } from "@utils/models/interface/table";
import { useState } from "react";

export default function Dropdown({ options }: Readonly<{ options: DropdownOptions[] }>) {
    const [isOpen, setIsOpen] = useState(false);
    const currentPage = window.location.pathname.replace('/', '');
    const capitalizedPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [IsHovered, setIsHovered] = useState<boolean>(false);
    const handleToggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOptionClick = (item: DropdownOptions) => {
        setSelectedOption(item.name);
        setIsOpen(false);
    };
    const hover = IsHovered && 'fill-cyan-550'

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleToggleDropdown}
                    className="inline-flex w-full hover:text-cyan-550 justify-center gap-x-1.5  bg-white px-3 py-2 font-semibold text-gray-500 text-lg "
                >
                    {selectedOption + " " + capitalizedPage}
                    <DownIcon className={`w-2 ml-1 fill-gray-500 ${isOpen ? 'transform rotate-180' : ''} ${hover}`} />
                </button>
            </div>

            {isOpen && (
                <div className="absolute z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map((item: DropdownOptions) => (
                            <button
                                key={item.name}
                                onClick={() => handleOptionClick(item)}
                                className="block px-4 py-2 font-semibold w-full text-start text-sm text-gray-700 hover:bg-gray-100"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
