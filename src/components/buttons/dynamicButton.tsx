import { ArrowIcon } from '@assets/svg/arrow'
import { ReactNode, useState, useEffect, useRef } from 'react'
import { DropdownOptions } from '@utils/models/interface/table'
import { getCmpByAttr } from '@utils/functions/action'

interface ButtonInterface {
    children: ReactNode
    buttonClassName?: string
    hasArrowIcon?: boolean
    onClick?: (item?: DropdownOptions) => void
    className?: string
}

export default function Buttons({
    children,
    hasArrowIcon = false,
    onClick,
    className = 'inline-flex w-full hover:text-cyan-550 justify-center gap-x-1.5  bg-white px-3 py-2 font-semibold text-gray-500 text-lg',
}: Readonly<ButtonInterface>) {
    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const hover = isHovered && 'fill-cyan-550'
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
        attr: 'data-slot',
        value: 'title',
    })

    const dropdown = getCmpByAttr({
        children,
        attr: 'data-slot',
        value: 'dropdown',
    })

    return (
        <div
            className={`${className} li relative mt-1 flex-row items-center  text-left`}
            ref={dropdownRef}
        >
            <div>
                <button
                className='inline-flex w-full hover:text-cyan-550 justify-center gap-x-1.5 '
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={
                        dropdown ? handleToggleDropdown : () => onClick?.()
                    }
                >
                    {title}
                    {dropdown && hasArrowIcon && (
                        <ArrowIcon
                            className={`ml-1 w-2 fill-gray-500 ${isOpen ? 'rotate-180 transform' : ''} ${hover}`}
                        />
                    )}
                </button>
            </div>

            {isOpen && dropdown}
        </div>
    )
}
