import React, { useCallback } from 'react'
import { DropdownItemType } from '@/utils/types/page-type/table.type'
import { cn } from '@/utils/functions/classNames'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface DropdownProps {
    dropdownOptions?: DropdownItemType[]
    className?: string
    titles?: string
    text?: string
    closeDropdown:()=> void
    setSelectedOption?: (title: string) => void
}

export const Dropdown: React.FC<DropdownProps> = React.memo(({
    dropdownOptions,
    className = '',
    text = '',
    titles = 'text-gray-400 font-medium text-xs first:mt-1 first:mb-2 last:mb-1 ml-1 pt-1 last:capitalize', closeDropdown,
    setSelectedOption,
}) => {
    const dropdownClassName = `${text} block px-4 py-1 w-full text-sm text-gray-700 hover:bg-cyan-550 hover:text-white last:mb-2`


    const handleItemClick = useCallback((item: DropdownItemType) => (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (item?.onClick) {
            item.onClick()
        }

        item?.hasMergeTitle && setSelectedOption?.(item.label!)
        closeDropdown()
    }, [setSelectedOption])

    return (
        <div className={cn(className, 'absolute z-10 origin-top-right border border-gray-300 bg-white shadow-lg')}>
            {!dropdownOptions?.length && <div className="py-3" />}
            {dropdownOptions?.map((item: DropdownItemType, index: number) => (
                <React.Fragment key={item.label}>
                    {index > 0 && dropdownOptions[index - 1].group !== item.group && (
                        <hr className="border-gray-300" />
                    )}
                    {!item.url && !item.onClick && !item.value ? (
                        <div className={cn(titles, 'pointer-events-none uppercase select-none')}>
                            {item.label}
                        </div>
                    ) : item.url ? (
                        <Link href={item.url} onClick={() => closeDropdown()} className={cn(dropdownClassName)}>
                            {item.label}
                        </Link>
                    ) : (
                        <button
                            onClick={handleItemClick(item)}
                            className={cn(dropdownClassName)}
                        >
                            {item.label}
                        </button>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
})

Dropdown.displayName = 'Dropdown'
