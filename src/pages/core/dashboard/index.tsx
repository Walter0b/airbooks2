import Pages from "@components/pages";
import { dropdownDate } from "@utils/mock/data/page/dropdown";

export default function Dashboard() {
    return <Pages dropdownOptions={dropdownDate}></Pages>
}
