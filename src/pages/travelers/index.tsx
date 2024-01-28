import Pages from "@components/pages";
import { TableBody } from "@components/table/body";
import { TableHeader } from "@components/table/header";
import { TableItem } from "@components/table/tableItem";
import { dropdownDate } from "@utils/test/data/page/dropdown";
import { travelersColumns, travelersData } from "@utils/test/data/travelers/table";

export default function Travelers() {
    return (
        <Pages dropdownOptions={dropdownDate} >
            <TableItem  onCheckboxChange={function (value: string): void {
                throw new Error("Function not implemented.");
            }}>
                <TableHeader data-slot="TableHeader"  columns={travelersColumns}  />
                <TableBody data-slot="TableBody"  data={travelersData} columns={travelersColumns} />
            </TableItem>

            <h1>hi</h1>
        </Pages>
    )
}