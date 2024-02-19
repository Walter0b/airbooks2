import TravelerCompactListHeader from "@components/core/travelers/compact-list/traveler-cl-btn";
import { tableOptions } from "@static/travelers/table/dropdown";
import { NavLink, Outlet } from "react-router-dom";
import ItemDetailsBody from "./itemdetails";
import { useState } from "react";

export default function ItemDetails() {
    const [selectedItem, setSelectedItem] = useState('snapshot')
    return (
    
        <ItemDetailsBody data-slot="itemDetails">
            <TravelerCompactListHeader
                data-slot="compactListHeader"
                dropdownOptions={tableOptions}
            />
            <div data-slot="compactListBody" className="mt-12 w-full">
                <NavLink
                    to="snapshot"
                    onClick={() => setSelectedItem('snapshot')}
                    className={({ isActive }) =>
                        `${(isActive || selectedItem == 'snapshot') ? "border-b-4" : ' text-cyan-550'
                        } border-cyan-550 px-10 py-1 text-black hover:border-b-4"`
                    }
                >
                    Snapshot
                </NavLink>
                <NavLink
                    to="bookings"
                    onClick={() => setSelectedItem('bookings')}
                    className={({ isActive }) =>
                        `${(isActive || selectedItem == 'bookings') ? "border-b-4" : ' text-cyan-550'
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


        </ItemDetailsBody >
    )
}