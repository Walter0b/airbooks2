'use client'

import useCurrentPageData from "@/utils/functions/getCurrentPageData";
import { useContext, useState } from "react";
import { ModalContext } from "@/states/context/ModalContext";
import { useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { openModalWithData } from "@/states/reducer/modalSlice";
import ItemDetailsBody from "@/components/compactlist/itemdetails";
import NavLink from "next-navlink";
import { fieldsToDisplayType, TableOptionsType } from "@/utils/types/page-type/table.type";
import CompactListHeader from "@/foundry/ItemDetails/cl-header";
import PageLoader from "@/components/loader/page-loader";
import CompactListData from "@/foundry/compactListData";

export default function CompactListDetails({ dropdownOptions, layoutParameters }: { dropdownOptions: TableOptionsType, layoutParameters?: fieldsToDisplayType }) {

    const [detailsToDisplay, setDetailsToDisplay] = useState<string | undefined>('')
    const [selected, setSelected] = useState<boolean>(true);

    const data = useCurrentPageData()!

    const { setPageLabel } = useContext(ModalContext)

    const dispatch = useDispatch()

    const { route, id } = useParams<{ route: string, id: string }>();

    const router = useRouter();

    const handleOpenModal = () => {
        setPageLabel?.(route)
        dispatch(openModalWithData({ data: data }))
    }

    return (
        <ItemDetailsBody data-slot="itemDetails">
            <CompactListHeader
                data-slot="compactListHeader"
                dropdownOptions={dropdownOptions}
                justifyContent={layoutParameters?.headerContent_Position}
                contentToDisplay={detailsToDisplay}
                handleOpenModal={handleOpenModal}
            />
            <div
                data-slot="compactListBody"
                className="w-full border-b border-gray-200"
            >
                {(dropdownOptions.actionButtons?.length && dropdownOptions.actionButtons?.length > 1) &&
                    <div className='mt-12 w-full'>
                        <button
                            onClick={() => {
                                setDetailsToDisplay(dropdownOptions.actionButtons[0].api_name);
                                setSelected(!selected)
                            }}
                            className={selected ? 'border-b-3 text-cyan-550 px-10' : 'border-cyan-550 px-10 text-black hover:text-cyan-550 hover:border-b-3'}
                        >
                            {dropdownOptions.actionButtons[0].name}
                        </button>
                        <button
                            onClick={() => {
                                setDetailsToDisplay(dropdownOptions.actionButtons[1].api_name);
                                setSelected(!selected)
                            }}
                            className={!selected ? 'border-b-3 text-cyan-550 px-10' : 'border-cyan-550 px-10 text-black hover:text-cyan-550 hover:border-b-3'}
                        >
                            {dropdownOptions.actionButtons[1].name}
                        </button>
                    </div>
                }
                <div className="h-full w-full">
                    <CompactListData data='Test' />
                </div>
            </div>
        </ItemDetailsBody>
    )
}