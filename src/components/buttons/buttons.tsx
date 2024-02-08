import { ArrowIcon } from '@assets/svg/arrow'
import { ReactNode, useState, useEffect, useRef } from 'react'
import { ShowTableOptions } from '@utils/models/interface/table'
import { getCmpByAttr } from '@utils/functions/action'

interface ButtonInterface {
    children: ReactNode
    buttonClassName?: string
    arrowClassName?: string
    hasDropdownIcon?: boolean
    onClick?: (item?: ShowTableOptions) => void
    className?: string
}

export default function Buttons({
    children,
    arrowClassName = 'group-hover/button:!fill-cyan-550 fill-gray-500 ml-1 mt-[7px]',
    hasDropdownIcon = false,
    onClick,
    className = ' w-full mt-1 hover:text-cyan-550 justify-center gap-x-1.5  bg-white px-3 py-2 font-semibold text-gray-500 text-lg',
}: Readonly<ButtonInterface>) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    const handleToggleDropdown = () => {
        setIsOpen((prev) => !prev)
    }

    const handleDocumentClick = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick)

        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])

    const title = getCmpByAttr({
        children,
        value: 'title',
    })

    const dropdown = getCmpByAttr({
        children,
        value: 'dropdown',
    })

    return (
        <div
            className={`${className} relative  flex-row text-left`}
            ref={dropdownRef}
        >
            <div className="h-fit w-fit">
                <button
                    className="group/button flex w-full items-start gap-x-1.5 "
                    onClick={
                        dropdown ? handleToggleDropdown : () => onClick?.()
                    }
                >
                    {title}
                    {dropdown && hasDropdownIcon && (
                        <ArrowIcon
                            className={`${arrowClassName}  w-2 ${isOpen ? 'rotate-180 transform' : ''}`}
                        />
                    )}
                </button>
            </div>
            {isOpen && (
                <div
                    onClick={
                        dropdown ? handleToggleDropdown : () => onClick?.()
                    }
                >
                    {dropdown}
                </div>
            )}
        </div>
    )
}
