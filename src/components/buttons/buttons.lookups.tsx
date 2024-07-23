'use client'
import React, { useState, useRef, useEffect } from 'react'
import { ArrowIcon } from '@/assets/svg/arrow'
import { DropdownItemType } from '@/utils/types/page-type/table.type'
import usePeroxideState from '@/hooks/usePeroxideState'
import { cn } from '@/utils/functions/classNames'

interface LookupProps {
    required?: boolean
    value?: string
    lookupOptions?: []
    containerClassName?: string
    handleSelectOption?: (selectedOption: string) => void
    options?: DropdownItemType[]
    dropdownContainerClassName?: string
    dropdownWidth?: number | string
}

export function Lookup({
    containerClassName = 'w-full mt-1 items-start justify-between hover:text-cyan-550 gap-x-1.5 bg-white px-3 py-2 font-semibold text-gray-500 text-lg',
    handleSelectOption,
    value,
    required = false,
    options,
    // lookupOptions,
    dropdownContainerClassName,
    dropdownWidth,
}: Readonly<LookupProps>) {
    const FieldsValue = usePeroxideState({ selectedOption: '' })

    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handleDocumentClick)
        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])

    const handleToggleDropdown = () => {
        setIsOpen((prev) => !prev)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        FieldsValue.selectedOption = event.target.value
        handleSelectOption?.(event.target.value || '')
        // console.log(FieldsValue)
        setIsOpen(true)
    }

    const handleItemClick = (item: DropdownItemType) => {
        FieldsValue.selectedOption = item.value
        handleSelectOption?.(item.value || '')
        setIsOpen(false)
    }

    const filteredOptions = options?.filter((option) =>
        option.value!
            .toLowerCase()
            .includes(FieldsValue.selectedOption.toLowerCase())
    )

    return (
        <div
            className="relative h-full w-full flex-row text-left"
            ref={dropdownRef}
        >
            <div className="flex h-full w-full items-center">
                <div
                    className={cn(
                        'group/button flex w-full',
                        containerClassName,
                        isOpen && 'border-blue-400'
                    )}
                >
                    <input
                        required={required}
                        type="text"
                        className={`flex w-full border-none px-4 text-left`}
                        onChange={handleInputChange}
                        onFocus={handleToggleDropdown}
                        value={FieldsValue?.selectedOption || value}
                    />
                    <ArrowIcon
                        className={cn(
                            'group-hover/button:!fill-cyan-550 mt-[7px] mr-1 w-2 fill-gray-500',
                            isOpen && 'rotate-180 transform'
                        )}
                    />
                </div>
            </div>
            {isOpen && (
                <div
                    className={cn(
                        dropdownContainerClassName,
                        `absolute z-10 w-${dropdownWidth} ring-opacity-5 origin-top-right bg-white ring-1 shadow-lg ring-black focus:outline-none`
                    )}
                >
                    {!filteredOptions?.length && <div className="py-3"></div>}
                    {filteredOptions?.map(
                        (item: DropdownItemType, index: number) => (
                            <React.Fragment key={item.label}>
                                {index > 0 &&
                                    options![index - 1].group !==
                                    item.group && (
                                        <hr className="border-gray-300" />
                                    )}
                                {!item.url && !item.onClick && !item.value ? (
                                    <div
                                        className={` pointer-events-none uppercase select-none`}
                                    >
                                        {item.label}
                                    </div>
                                ) : (
                                    <button
                                        key={item.label}
                                        onClick={() => handleItemClick(item)}
                                        className={`hover:bg-cyan-550 block w-full py-2 px-4 text-start text-sm text-black hover:text-white`}
                                    >
                                        {item.label}
                                    </button>
                                )}
                            </React.Fragment>
                        )
                    )}
                </div>
            )}
        </div>
    )
}
