import ShowButton from '@components/core/table/item/show-button';
import TableOptions from '@components/core/table/item/table.option';
import { TableOptionsInterface } from '@utils/models/interface/table';

export default function Tableheader({
    dropdownOptions,
}: Readonly<{
    dropdownOptions: TableOptionsInterface;
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
    );
}
