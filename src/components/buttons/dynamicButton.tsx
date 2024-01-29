import { DownIcon } from "@assets/svg/down";
import { ReactNode, useState, useEffect, useRef } from "react";
import { DropdownOptions } from "@utils/models/interface/table";
import { getCmpByAttr } from "@utils/functions/action";

interface ButtonInterface {
    children: ReactNode;
    hasDownIcon?: boolean;
    onClick?: (item?: DropdownOptions) => void;
    className?: string;
}

export default function Buttons({
    children,
    hasDownIcon = false,
    onClick,
    className = "inline-flex w-full hover:text-cyan-550 justify-center gap-x-1.5  bg-white px-3 py-2 font-semibold text-gray-500 text-lg",
}: Readonly<ButtonInterface>) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const hover = isHovered && 'fill-cyan-550';
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleToggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleDocumentClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    const title = getCmpByAttr({
        children,
        attr: 'data-slot',
        value: 'title',
    });

    const dropdown = getCmpByAttr({
        children,
        attr: 'data-slot',
        value: 'dropdown',
    });

    return (
        <div className="relative inline-block text-left mt-1" ref={dropdownRef}>
            <div>
                <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={dropdown ? handleToggleDropdown : () => onClick?.()}
                    className={className}
                >
                    {title}
                    {dropdown && hasDownIcon && (
                        <DownIcon
                            className={`w-2 ml-1 fill-gray-500 ${isOpen ? "transform rotate-180" : ""} ${hover}`}
                        />
                    )}
                </button>
            </div>

            {isOpen && dropdown}
        </div>
    );
}
