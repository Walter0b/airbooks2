import ShowButton from '@components/buttons/showbutton';
import TableOptions from '@components/buttons/tableoption';
import { TableOptionsInterface } from '@utils/models/interface/table';

export default function Pageheader({
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
