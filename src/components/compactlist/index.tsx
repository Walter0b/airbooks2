import TravelerCompactListHeader from "@components/core/travelers/compact-list/traveler-cl-btn";
import { tableOptions } from "@static/travelers/table/dropdown";
import { NavLink } from "react-router-dom";
import ItemDetailsBody from "./itemdetails";

export default function ItemDetails() {
    return (
        <ItemDetailsBody data-slot="itemDetails">
            <TravelerCompactListHeader
                data-slot="compactListHeader"
                dropdownOptions={tableOptions}
            />
            <div data-slot="compactListBody" className="mt-12 w-full">
                <NavLink
                    to="snapshot"
                    className="border-cyan-550 px-10 py-1 text-black hover:border-b-4"
                >
                    Snapshot
                </NavLink>
                <NavLink
                    to="snapshot"
                    className="border-cyan-550 px-10 py-1  text-black hover:border-b-4"
                >
                    Bookings
                </NavLink>
                <hr className="mt-[0.4rem]"></hr>
            </div>
        </ItemDetailsBody>
    )
}