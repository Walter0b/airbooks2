import {CompactListButtonLayout} from "@/utils/types/page-type/button.type";
import {PenIcon} from "@assets/svg/pen";
import {PrintIcon} from "@assets/svg/print";
import {PDFIcon} from "@assets/svg/pdf";
import {MailIcon} from "@assets/svg/mail";
import {TemplateSelectionIcon} from "@assets/svg/templateSelection";

export default function ButtonLayout({ isEditable, isExportableToPDF, isPrintable, canSendEmail, selectTemplate } : CompactListButtonLayout) {
    return (
        <div>
            <div className={`flex flex-row ml-3 w-full`}>
                <div className={`flex flex-row mx-2`}>
                    { isEditable &&
                        <button aria-label='edit'
                                className="border-grey-450 flex h-full items-center justify-center first:rounded-l last:rounded-r border-[0.8px] bg-gray-100 p-[0.7em]"
                        >
                            <PenIcon className="w-3 fill-gray-700" />
                        </button> }
                    { isExportableToPDF && <button aria-label='exportToPDF'
                                className="border-grey-450 flex h-full items-center justify-center first:rounded-l last:rounded-r border-[0.8px] bg-gray-100 p-[0.7em]"
                        >
                            <PDFIcon
                                data-slot="title"
                                className="w-3 fill-gray-700"
                            />
                        </button> }
                    { isPrintable && <button aria-label='print'
                                className="border-grey-450 flex h-full items-center justify-center first:rounded-l last:rounded-r border-[0.8px] bg-gray-100 p-[0.7em]"
                        >
                            <PrintIcon
                                data-slot="title"
                                className="w-3 fill-gray-700"
                            />
                        </button> }
                    { canSendEmail && <button aria-label='email'
                                className="border-grey-450 flex h-full items-center justify-center first:rounded-l last:rounded-r border-[0.8px] bg-gray-100 p-[0.7em]"
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
                                className="border-grey-450 flex h-full items-center justify-center rounded border-[0.8px] bg-gray-100 p-[0.7em]"
                        >
                            <TemplateSelectionIcon
                                data-slot="title"
                                className="w-3 fill-gray-700"
                            />
                        </button>
                    </div>
                </div>}
            </div>
        </div>
    )
}