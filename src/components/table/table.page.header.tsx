import ShowButton from '@/components/table/items/show-button'
import TableOptions from '@/components/table/items/table.option'
import { TableOptionsType } from '@/utils/models/interface/table'

export default function Header({
    dropdownOptions,
}: Readonly<{
    dropdownOptions: TableOptionsType
}>) {
    return (
        <>
            <div
                id="table-left-menu-option"
                aria-label="table left menu option"
                className="ml-4"
            >
                <ShowButton dropdownOptions={dropdownOptions.show} />
            </div>
            <TableOptions showTableOptions={dropdownOptions} />
        </>
    )
}
