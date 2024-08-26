'use client'

import {CompactListButtonLayout} from "@/utils/types/page-type/button.type";
import {PenIcon} from "@assets/svg/pen";
import {PrintIcon} from "@assets/svg/print";
import {PDFIcon} from "@assets/svg/pdf";
import {MailIcon} from "@assets/svg/mail";
import {TemplateSelectionIcon} from "@assets/svg/templateSelection";
import {useParams, useRouter} from "next/navigation";
import {useContext} from "react";
import {useDispatch} from "react-redux";
import {openModalWithData} from "@/states/reducer/modalSlice";
import {ModalContext} from "@/states/context/ModalContext";

export default function ButtonLayout({ isEditable, isExportableToPDF, isPrintable, canSendEmail, selectTemplate } : CompactListButtonLayout) {

    const params = useParams();

    const { pages, id } = params;

    const { setPageLabel } = useContext(ModalContext)

    const dispatch = useDispatch()

    const edit = () => {
        console.log(`An operation on item: ${id[0]} is in progress`)
        // setPageLabel?.(pages[0])
        // dispatch(openModalWithData({ data: data }))
    }

    const saveAsPDF = () => {
        console.log(`Saved as PDF !`)
    }

    const print = () => {
        console.log(`Printed !`)
    }

    const sendEmail = () => {
        console.log(`Email sent`)
        // setPageLabel?.(pages[0])
        // dispatch(openModalWithData({ data: data }))
    }

    const templateSelection = () => {
        console.log(`Select a template !`)
        // setPageLabel?.(pages[0])
        // dispatch(openModalWithData({ data: data }))
    }

    return (
        <div>
            <div className={`flex flex-row ml-3 w-full`}>
                <div className={`flex flex-row mx-2`}>
                    { isEditable &&
                        <button aria-label='edit'
                                onClick={edit}
                                className="border-grey-450 flex h-full items-center justify-center hover:shadow-md first:rounded-l last:rounded-r border-[0.8px] bg-gray-100 p-[0.7em]"
                        >
                            <PenIcon className="w-3 fill-gray-700" />
                        </button> }
                    { isExportableToPDF && <button aria-label='exportToPDF'
                                onClick={saveAsPDF}
                                className="border-grey-450 flex h-full items-center justify-center hover:shadow-md first:rounded-l last:rounded-r border-[0.8px] bg-gray-100 p-[0.7em]"
                        >
                            <PDFIcon
                                data-slot="title"
                                className="w-3 fill-gray-700"
                            />
                        </button> }
                    { isPrintable && <button aria-label='print'
                                onClick={print}
                                className="border-grey-450 flex h-full items-center justify-center hover:shadow-md first:rounded-l last:rounded-r border-[0.8px] bg-gray-100 p-[0.7em]"
                        >
                            <PrintIcon
                                data-slot="title"
                                className="w-3 fill-gray-700"
                            />
                        </button> }
                    { canSendEmail && <button aria-label='email'
                                onClick={sendEmail}
                                className="border-grey-450 flex h-full items-center justify-center hover:shadow-md first:rounded-l last:rounded-r border-[0.8px] bg-gray-100 p-[0.7em]"
                        >
                            <MailIcon
                                data-slot="title"
                                className="w-3 fill-gray-700"
                            />
                        </button> }
                </div>
                { selectTemplate && <div>
                    <div className="mr-2">
                        <button aria-label='select_template'
                                onClick={templateSelection}
                                className="border-grey-450 flex h-full items-center justify-center hover:shadow-md rounded border-[0.8px] bg-gray-100 p-[0.7em]"
                        >
                            <TemplateSelectionIcon
                                data-slot="title"
                                className="w-3 fill-gray-700"
                            />
                        </button>
                    </div>
                </div> }
            </div>
        </div>
    )
}