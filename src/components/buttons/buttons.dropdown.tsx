import React from 'react'
import { DropdownItemType } from '@/utils/models/interface/table'
import { cn } from '@/utils/intext'

interface DropdownProps {
    dropdownOptions?: DropdownItemType[]
    className?: string
    titles?: string
    text?: string
    setSelectedOption?: (title: string) => void
}

export const Dropdown = React.memo(
    ({
        dropdownOptions,
        className = '',
        text = '',
        titles = 'text-gray-400 font-medium text-xs first:mt-1 first:mb-2 last:mb-1 ml-1 pt-1 last:capitalize',
        setSelectedOption,
    }: DropdownProps) => {
        const dropdownClassName = `${text} block px-4 py-1 w-full text-sm text-gray-700 hover:bg-cyan-550 hover:text-white last:mb-2`

        const handleItemClick = (
            item: DropdownItemType,
            event: React.MouseEvent<HTMLButtonElement>
        ) => {
            event.preventDefault()
            if (item?.url) {
                window.location.href = item.url
            } else if (item?.onClick) {
                item?.onClick?.()
            }

            item?.hasMergeTitle && setSelectedOption?.(item.label!)
        }

        return (
            <div
                className={cn(
                    className,
                    'ring-opacity-5 absolute z-10 origin-top-right bg-white ring-1 shadow-lg ring-black focus:outline-none'
                )}
            >
                {!dropdownOptions?.length && <div className="py-3"></div>}
                {dropdownOptions?.map(
                    (item: DropdownItemType, index: number) => (
                        <React.Fragment key={item.label}>
                            {index > 0 &&
                                dropdownOptions[index - 1].group !==
                                    item.group && (
                                    <hr className=" border-gray-300" />
                                )}
                            {!item.url && !item.onClick && !item.value ? (
                                <div
                                    className={cn(
                                        titles,
                                        'pointer-events-none uppercase select-none'
                                    )}
                                >
                                    {item.label}
                                </div>
                            ) : (
                                <button
                                    key={item.label}
                                    onClick={(event) =>
                                        handleItemClick(item, event)
                                    }
                                    className={cn(dropdownClassName)}
                                >
                                    {item.label}
                                </button>
                            )}
                        </React.Fragment>
                    )
                )}
            </div>
        )
    }
)
