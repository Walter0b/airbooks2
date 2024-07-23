'use client'
import { useState, useRef, useEffect, useCallback, memo } from 'react'
import { ArrowIcon } from '@/assets/svg/arrow'
import { Dropdown } from './buttons.dropdown'
import { ButtonInterface } from '@/utils/types/structure'
import { cn } from '@/utils/functions/classNames'

const Buttons = ({
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
}: ButtonInterface) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    const handleToggleDropdown = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [])

    const handleButtonClick = useCallback(() => {
        if (dropdownOptions) {
            handleToggleDropdown()
        } else if (onClick) {
            onClick()
        }
    }, [dropdownOptions, handleToggleDropdown, onClick])

    const handleDocumentClick = useCallback(
        (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        },
        [dropdownRef]
    )

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick)
        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [handleDocumentClick])

    return (
        <div
            className="focus: relative h-full flex-row text-left"
            ref={dropdownRef}
        >
            <div className="flex h-full w-full items-center">
                <button
                    className={cn(className, 'group/button flex w-full')}
                    onClick={handleButtonClick}
                >
                    {children}
                    {hasDropdownIcon && (
                        <ArrowIcon
                            className={cn(
                                arrowClassName,
                                'w-2',
                                isOpen && 'rotate-180 transform'
                            )}
                        />
                    )}
                </button>
            </div>
            {isOpen && dropdownOptions && (
                <Dropdown
                    className={dropdownClassName}
                    text={dropdownText}
                    titles={dropdownTitles}
                    dropdownOptions={dropdownOptions}
                    setSelectedOption={setSelectedOption}
                />
            )}
        </div>
    )
}

export default memo(Buttons)
