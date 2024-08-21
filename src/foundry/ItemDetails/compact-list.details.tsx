import useCurrentPageData from "@/utils/functions/getCurrentPageData";
import {useContext} from "react";
import {ModalContext} from "@/states/context/ModalContext";
import {useDispatch} from "react-redux";
import {useParams} from "next/navigation";
import {openModalWithData} from "@/states/reducer/modalSlice";
import ItemDetailsBody from "@/components/compactlist/itemdetails";
import NavLink from "next-navlink";
import {TableOptionsType} from "@/utils/types/page-type/table.type";
import CompactListHeader from "@/foundry/ItemDetails/cl-header";

export default function CompactListDetails
    ({ dropdownOptions,
         justify_content }
    : { dropdownOptions: TableOptionsType,
        justify_content?: string
    }) {
    const data = useCurrentPageData()!

    const { setPageLabel } = useContext(ModalContext)

    const dispatch = useDispatch()

    const { route, id } = useParams<{ route: string, id: string }>();
    const handleOpenModal = () => {
        setPageLabel?.(route)
        dispatch(openModalWithData({ data: data }))
    }

    return (
        <ItemDetailsBody data-slot="itemDetails">
            <CompactListHeader
                data-slot="compactListHeader"
                dropdownOptions={dropdownOptions}
                justify_content={justify_content}
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
                {/*<div className="h-full w-full">{children}</div>*/}
            </div>
        </ItemDetailsBody>
    )
}