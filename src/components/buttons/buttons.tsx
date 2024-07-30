import React, { useState, useRef, useCallback, memo } from 'react'
import { ArrowIcon } from '@/assets/svg/arrow'
import { ButtonInterface } from '@/utils/types/structure'
import { cn } from '@/utils/functions/classNames'
import useOutsideClick from '@/hooks/useOutsideClick'
import { Dropdown } from './buttons.dropdown'
import { getCmpByAttr } from '@/utils/functions/getCmpByAttr'

const Buttons: React.FC<ButtonInterface> = memo(({
    children,
    arrowClassName = 'group-hover/button:!fill-cyan-550 fill-gray-500 ml-1 mt-[7px]',
    hasDropdownIcon = false,
    onClick,
    className = 'w-full mt-1 items-start justify-between hover:text-cyan-550 gap-x-1.5 bg-white px-3 py-2 font-semibold text-gray-500 text-lg',
    setSelectedOption,
    dropdownOptions,
    dropdownClassName,
    dropdownText,
    dropdownTitles,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useOutsideClick(dropdownRef, () => setIsOpen(false))

    const handleToggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])


    const Title = getCmpByAttr({
        children,
        value: 'title',
    })
    const DropdownOption = getCmpByAttr({
        children,
        value: 'dropDown',
    })

    const handleButtonClick = useCallback(() => {
        if (dropdownOptions || DropdownOption) {
            handleToggleDropdown()
        } else if (onClick) {
            onClick()
        }
    }, [dropdownOptions, handleToggleDropdown, onClick])

    return (
        <div className="relative h-full flex-row text-left" ref={dropdownRef}>
            <div className="flex h-full w-full items-center">
                <button
                    className={cn(className, 'group/button flex w-full')}
                    onClick={handleButtonClick}
                >
                    {Title}
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
            {isOpen && (
                DropdownOption ? DropdownOption : (
                    dropdownOptions && (
                        <Dropdown
                            className={dropdownClassName}
                            text={dropdownText}
                            titles={dropdownTitles}
                            dropdownOptions={dropdownOptions}
                            setSelectedOption={setSelectedOption}
                        />
                    )
                )
            )}

        </div>
    )
})

Buttons.displayName = 'Buttons'

export default Buttons
