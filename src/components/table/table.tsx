import TableItem from "./tableItem";
import { DataTableProps } from "@utils/models/struc";

export function Table<T>({ data, columns }: DataTableProps<T>) {

    return (
        <TableItem data={data} columns={columns} />
    );
}
export default Table;
