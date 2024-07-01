import ShowButton from '@/components/table/items/show-button'
import TableOptions from '@/components/table/items/table.option'
import { cn } from '@/utils/intext'
import { TableOptionsType } from '@/utils/types/page-type/table.type'

export default function Header({
    dropdownOptions,
    className,
}: Readonly<{
    dropdownOptions: TableOptionsType
    className?: string
}>) {
    return (
        <div
            className={cn(
                'flex h-16 items-center rounded-sm border-b border-gray-300 sm:justify-between ',
                className ?? '  max-sm:gap-9 sm:justify-between md:h-20'
            )}
        >
            <div
                id="table-left-menu-option"
                aria-label="table left menu option"
                className="ml-4"
            >
                <ShowButton dropdownOptions={dropdownOptions.show} />
            </div>
            <TableOptions showTableOptions={dropdownOptions} />
        </div>
    )
}
