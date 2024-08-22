'use client'

import useCurrentPageData from "@/utils/functions/getCurrentPageData";
import {useContext} from "react";
import {ModalContext} from "@/states/context/ModalContext";
import {useDispatch} from "react-redux";
import {useParams, useRouter} from "next/navigation";
import {openModalWithData} from "@/states/reducer/modalSlice";
import ItemDetailsBody from "@/components/compactlist/itemdetails";
import NavLink from "next-navlink";
import {fieldsToDisplayType, TableOptionsType} from "@/utils/types/page-type/table.type";
import CompactListHeader from "@/foundry/ItemDetails/cl-header";

export default function CompactListDetails({ dropdownOptions, layoutParameters } : { dropdownOptions: TableOptionsType, layoutParameters?: fieldsToDisplayType }) {

    const data = useCurrentPageData()!

    const { setPageLabel } = useContext(ModalContext)

    const dispatch = useDispatch()

    const { route, id } = useParams<{ route: string, id: string }>();

    const router = useRouter();

    const handleOpenModal = () => {
        setPageLabel?.(route)
        dispatch(openModalWithData({ data: data }))
    }

    const updateURL = (tab: string) => {
        router.push(tab)
    }

    return (
        <ItemDetailsBody data-slot="itemDetails">
            <CompactListHeader
                data-slot="compactListHeader"
                dropdownOptions={dropdownOptions}
                justify_content={layoutParameters?.headerContent_Position}
                handleOpenModal={handleOpenModal}
            />
            <div
                data-slot="compactListBody"
                className="w-full border-b border-gray-200"
            >
                { layoutParameters?.rightTab_Options?.length &&
                    <div className='mt-12 w-full'>
                        <button
                            onClick={() => updateURL('')}
                            className={`border-cyan-550 px-10 text-black hover:border-b-3`}
                        >
                            { layoutParameters?.rightTab_Options[0] }
                        </button>
                        <button
                            onClick={() => updateURL('SecondTab')}
                            className={`text-cyan-550 border-cyan-550 px-10 text-black hover:border-b-3`}
                        >
                            { layoutParameters?.rightTab_Options[1] }
                        </button>
                    </div>
                }
                {/*<div className="h-full w-full">{children}</div>*/}
            </div>
        </ItemDetailsBody>
    )
}