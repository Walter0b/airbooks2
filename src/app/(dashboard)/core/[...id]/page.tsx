import Bookings from "@/components/compactlist/bookings"
import Snapshot from "@/components/compactlist/snapshot"
import TravelersItemDetails from "../travelers/compact-list/compact-list.details"

function Page() {
    return (
        <div>
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