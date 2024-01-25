import Pages from "@components/pages";
import { dropdownDate } from "@utils/test/data/page/dropdown";
import { travelersColumns, travelersData } from "@utils/test/data/travelers/table";

export default function Travelers() {
    return (
        <Pages data={travelersData} columns={travelersColumns} dropdownOptions={dropdownDate} />
    )
}