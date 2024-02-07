import { DropdownItems } from '@utils/models/interface/table'
import React from 'react'

export function Dropdown({
    dropdownOptions,
    className,
    text,
    titles = 'text-gray-300 text-sm ml-1 pt-1 ',
    size,
    setSelectedOption,
}: Readonly<{
    dropdownOptions: DropdownItems[]
    className?: string
    titles?: string
    text?: string
    size?: number
    setSelectedOption?: (title: string) => void
}>) {
    const dropdownClassName = `${text}  block px-4 py-1 w-full text-sm text-gray-700 hover:bg-cyan-550 hover:text-white last:mb-2`

    const handleItemClick = (item: DropdownItems) => {
        if (item?.url) {
            window.location.href = item.url
        } else if (item?.onclick) {
            item.onclick()
        }

        item?.hasMergeTitle && setSelectedOption?.(item.label)
    }

    return (
        <div
            className={`${className} absolute z-10 w-${size} origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
            {dropdownOptions.map((item: DropdownItems, index: number) => (
                <React.Fragment key={item.label}>
                    {index > 0 && dropdownOptions[index - 1].group !== item.group && (
                        <hr className=" border-gray-300" />
                    )}
                    {!item.url && !item.onclick ? (
                        <div
                            className={`${titles} pointer-events-none select-none uppercase`}
                        >
                            {item.label}
                        </div>
                    ) : (
                        <button
                            key={item.label}
                            onClick={() => handleItemClick(item)}
                            className={`${dropdownClassName}`}
                        >
                            {item.label}
                        </button>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}
