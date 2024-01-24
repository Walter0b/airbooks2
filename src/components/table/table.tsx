import TableItem from "./tableItem";
import { DataTableProps } from "@utils/models/struc";

export function Table<T>({ data, columns, onEdit, onDelete }: DataTableProps<T>) {

    return (
        <TableItem data={data} columns={columns} onEdit={onEdit} onDelete={onDelete} />
    );
}
export default Table;
