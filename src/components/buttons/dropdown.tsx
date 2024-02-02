import { DropdownItems, DropdownOptions } from '@utils/models/interface/table'
import React from 'react'

export function Dropdown({
    dropdownOptions,
    className = 'absolute z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
    setSelectedOption,
}: Readonly<{
    dropdownOptions: DropdownOptions
    className?: string
    setSelectedOption?: (title: string) => void
}>) {
    const dropdownClassName =
        'block px-4 py-2 font-semibold w-full text-start text-sm text-gray-700 hover:bg-gray-100'
    const handleItemClick = (item: DropdownItems) => {
        item?.url ? (window.location.href = item.url) : item.onclick?.()
        item?.hasMergeTitle && setSelectedOption?.(item.label)
    }

    return (
        <div className={className}>
            {dropdownOptions.items.map((item: DropdownItems) => (
                <React.Fragment key={item.label}>
                    {item.group && <hr className=" border-gray-300" />}

                    <button
                        key={item.label}
                        onClick={() => handleItemClick(item)}
                        className={dropdownClassName}
                    >
                        {item.label}
                    </button>
                </React.Fragment>
            ))}
        </div>
    )
}
