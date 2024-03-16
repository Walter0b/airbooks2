import TravelerCompactListHeader from "@/pages/core/travelers/compact-list/traveler-cl-btn";
import { tableOptions } from "@/static/travelers/table/dropdown";
import { NavLink, Outlet } from "react-router-dom";
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
                    className={({ isActive }) =>
                        `${isActive ? "border-b-4" : ' text-cyan-550'
                        } border-cyan-550 px-10 py-1 text-black hover:border-b-4"`
                    }
                >
                    Snapshot
                </NavLink>
                <NavLink
                    to="bookings"
                    className={({ isActive }) =>
                        `${isActive ? "border-b-4" : ' text-cyan-550'
                        } border-cyan-550 px-10 py-1 text-black hover:border-b-4"`
                    }
                >
                    Bookings
                </NavLink>
                <hr className="mt-[0.4rem]"></hr>
                <div className="w-full h-full">
                    <Outlet />
                </div>

            </div>


        </ItemDetailsBody>
    )
}