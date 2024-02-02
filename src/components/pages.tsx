import ShowButton from './buttons/showbutton'
import { ReactNode } from 'react'
import TableOptions from './buttons/tableoption'
import { DropdownOptions } from '@utils/models/interface/table'

interface pageProps {
    children?: ReactNode
    dropdownOptions: DropdownOptions
}
export default function Pages({
    children,
    dropdownOptions,
}: Readonly<pageProps>) {
    return (
        <div className="h-full flex-row ">
            <div className="max flex  h-16 w-full items-center justify-between space-x-4 rounded-sm  border">
                <div
                    id="table-left-menu-option"
                    aria-label="table left menu option"
                    className="ml-4"
                >
                    <ShowButton dropdownOptions={dropdownOptions} />
                </div>
                <TableOptions />
            </div>
            {children}
        </div>
    )
}
