import ShowButton from "./buttons/showbutton";
import { ReactNode } from "react";
import TableOptions from "./buttons/tableoption";
import { DropdownOptions } from "@utils/models/interface/table";

interface pageProps {
    children: ReactNode,
    dropdownOptions: DropdownOptions[]
}
export default function Pages({ children, dropdownOptions }: Readonly<pageProps>) {

    return (
        <div className="flex-row h-full ">
            <div className="max h-16  border flex rounded-sm justify-between items-center space-x-4  w-full">
                <div id="table-left-menu-option" aria-label="table left menu option" className="ml-4">
                    <ShowButton dropdownOptions={dropdownOptions} />
                </div>
                <TableOptions />
            </div>
            {children}
        </div>
    )
}