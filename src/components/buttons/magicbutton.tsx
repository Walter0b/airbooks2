import { DownIcon } from "@assets/svg/down";
import { DropdownOptions } from "@utils/models/interface/table";
import { ReactNode, useState } from "react";

interface ButtonInterface { 
    children: ReactNode;
    hasDropdown?: boolean;
    dropdownOptions?: DropdownOptions[];
    onClick?: (item?: DropdownOptions) => void;
    buttonClassname?: string;
    dropdownClassname?: string;
    NoRedux?: (value: string) => void;
}

export default function MagicButton({
    children,
    hasDropdown = false,
    dropdownOptions = [],
    onClick,
    buttonClassname = "inline-flex w-full hover:text-cyan-550 justify-center gap-x-1.5  bg-white px-3 py-2 font-semibold text-gray-500 text-lg",
    dropdownClassname = "absolute z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    // dropdownClassname = "`w-2 ml-1 fill-gray-500 ${isOpen ? 'transform rotate-180' : ''} ",
    NoRedux
}: Readonly<ButtonInterface>) {
    const [isOpen, setIsOpen] = useState(false);
    const [IsHovered, setIsHovered] = useState<boolean>(false);
    const hover = IsHovered && 'fill-cyan-550'

    const handleToggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOptionClick = (item: DropdownOptions) => {
        onClick?.(item);
        setIsOpen(false);
        NoRedux?.(item.name)

    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={hasDropdown ? handleToggleDropdown : () => onClick?.()}
                    className={buttonClassname}
                >
                    {children}
                    {hasDropdown && (
                        <DownIcon
                            className={`w-2 ml-1 fill-gray-500 ${isOpen ? "transform rotate-180" : ""} ${hover}`}
                        />
                    )}
                </button>
            </div>

            {isOpen && hasDropdown && (
                <div className={dropdownClassname}>
                    <div className="py-1">
                        {dropdownOptions.map((item: DropdownOptions) => (
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
