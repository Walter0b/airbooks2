'use client'
import ItemDetailsBody from '@/components/compactlist/itemdetails'
import NavLink from '@/components/util/navlink'
import { ModalContext } from '@/hooks/context/ModalContext'
import { openModalWithData } from '@/states/reducer/modalSlice'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import TravelerCompactListHeader from './traveler-cl-btn'
import { travelItemsTableOptions } from '../dropdown'
import useCurrentPageData from '@/utils/functions/getCurrentPageData'

export default function TravelersItemDetails({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const data = useCurrentPageData()!

    const { setPageLabel } = useContext(ModalContext)

    const dispatch = useDispatch()
    const handleOpenModal = () => {
        setPageLabel?.('travel-items')

        dispatch(openModalWithData({ data: data }))
    }

    return (
        <ItemDetailsBody data-slot="itemDetails">
            <TravelerCompactListHeader
                data-slot="compactListHeader"
                dropdownOptions={travelItemsTableOptions}
                handleOpenModal={handleOpenModal}
            />
            <div
                data-slot="compactListBody"
                className="mt-12 w-full border-b border-gray-200"
            >
                <NavLink
                    to="/"
                    activeClassName="border-b-3 !text-black "
                    className={` border-cyan-550 py-2 px-10 text-black hover:border-b-3`}
                >
                    Snapshot
                </NavLink>
                <NavLink
                    to="bookings"
                    activeClassName="border-b-4 !text-black"
                    className={`text-cyan-550 border-cyan-550  py-2 px-10 text-black hover:border-b-3`}
                >
                    Bookings
                </NavLink>
                <hr className="mt-[0.4rem]"></hr>
                <div className="h-full w-full">{children} </div>
            </div>
        </ItemDetailsBody>
    )
}
