"use client"
import Bookings from "@/components/compactlist/bookings"
import Snapshot from "@/components/compactlist/snapshot"
import TravelersItemDetails from "../../compact-list/compact-list.details"
import TravelerCompactList from "../../../customers/compact-list/compact-list"
import useSingleState from "@/hooks/useSingleState"
import { useFetchTravelersQuery } from "@/states/reducer/apiSlice"

function Page() {
    console.log("")
    const page = useSingleState(1)

    // console.log("🚀 ~ Travelers ~ page:", page)

    const pageSize = useSingleState(10)
    // console.log("🚀 ~ Travelers ~ pageSize:", pageSize)

    const { data: travelersData } = useFetchTravelersQuery({
        page: page.value,
        pageSize: pageSize.value,
    })
    console.log("🚀 ~ Page ~ data:", travelersData)
    return (

        <div className="flex h-full w-full overflow-hidden border">
            <TravelerCompactList
                data-slot="compactList"
                tableData={travelersData}
            />
            <TravelersItemDetails>
                <div>
                    <Snapshot />
                    <Bookings />

                </div>
            </TravelersItemDetails>
        </div>
    )
}

export default Page