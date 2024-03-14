import { ArrowIcon } from "@/assets/svg/arrow";
import { Dropdown } from "./dropdown";
import { ReactNode, useState, useRef, useEffect } from "react";
import { DropdownItemType, ShowTableOptionsType } from "@/utils/models/interface/table";

interface ButtonInterface {
    children?: ReactNode;
    buttonClassName?: string;
    arrowClassName?: string;
    hasDropdownIcon?: boolean;
    onClick?: (item?: ShowTableOptionsType) => void;
    className?: string;
    isInput?: boolean;
    dropdownOptions?: DropdownItemType[];
    setSelectedOption?: (title: string) => void;
    setInputValue?: (value: string) => void;
    dropdownClassName?: string;
    dropdownText?: string;
    dropdownTitles?: string;
    dropdownSize?: number | string;
}

export default function Buttons({
    children,
    arrowClassName = 'group-hover/button:!fill-cyan-550 fill-gray-500 ml-1 mt-[7px]',
    hasDropdownIcon = false,
    onClick,
    className = ' w-full mt-1 items-start justify-between hover:text-cyan-550 gap-x-1.5 bg-white px-3 py-2 font-semibold text-gray-500 text-lg',
    setSelectedOption,
    dropdownOptions,
    dropdownClassName,
    dropdownText,
    dropdownTitles,
}: Readonly<ButtonInterface>) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleToggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleDocumentClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleButtonClick = () => {
        if (dropdownOptions) {
            handleToggleDropdown();
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <div className="relative h-full flex-row text-left focus:" ref={dropdownRef}>
            <div className="h-full flex items-center w-full">
                <button
                    className={`${className} group/button flex w-full`}
                    onClick={handleButtonClick}
                >
                    {children}
                    {hasDropdownIcon && (
                        <ArrowIcon
                            className={`${arrowClassName} w-2 ${isOpen ? 'rotate-180 transform' : ''}`}
                        />
                    )}
                </button>
            </div>
            {isOpen && dropdownOptions && (
                <button onClick={handleToggleDropdown} className="block">
                    <Dropdown
                        className={dropdownClassName}
                        text={dropdownText}
                        titles={dropdownTitles}
                        dropdownOptions={dropdownOptions}
                        setSelectedOption={setSelectedOption}
                    />
                </button>
            )}
        </div>
    );
}
