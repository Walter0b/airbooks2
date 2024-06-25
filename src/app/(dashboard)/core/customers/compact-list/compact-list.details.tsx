import ItemDetailsBody from '@/components/compactlist/itemdetails'
import { ModalContext } from '@/hooks/context/ModalContext'
import { openModalWithData } from '@/states/reducer/modalSlice'
import { tableOptions } from '@/static/travelers/table/dropdown'
import useCurrentPageData from '@/utils/functions/getCurrentPageData'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import TravelerCompactListHeader from '../../travelers/compact-list/traveler-cl-btn'
import NavLink from '@/components/util/navlink'
import { cn } from '@/utils/intext'

export default function TravelersItemDetails() {
    const data = useCurrentPageData()!
    // console.log("🚀 ~ TravelersItemDetails ~ data:", data)

    const { setPageLabel } = useContext(ModalContext)

    const dispatch = useDispatch()
    const handleOpenModal = () => {
        setPageLabel?.('travelers')
        // console.log("🚀 ~ action.payload.data:", data)
        dispatch(openModalWithData({ data: data }))
    }

    return (
        <ItemDetailsBody data-slot="itemDetails">
            <TravelerCompactListHeader
                data-slot="compactListHeader"
                dropdownOptions={tableOptions}
                handleOpenModal={handleOpenModal}
            />
            <div data-slot="compactListBody" className="mt-12 w-full">
                <NavLink
                    to="snapshot"
                    activeClassName="border-b-4 !text-black"
                    className={cn(
                        'text-cyan-550 border-cyan-550 py-1 px-10 hover:border-b-4'
                    )}
                >
                    Snapshot
                </NavLink>
                <NavLink
                    to="bookings"
                    activeClassName="border-b-4 !text-black"
                    className={cn(
                        'text-cyan-550 border-cyan-550 py-1 px-10 hover:border-b-4'
                    )}
                >
                    Bookings
                </NavLink>
                <hr className="mt-[0.4rem]"></hr>
                <div className="h-full w-full">{/* <Outlet /> */}</div>
            </div>
        </ItemDetailsBody>
    )
}
