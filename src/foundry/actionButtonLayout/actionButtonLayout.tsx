'use client'

import { CompactListButtonLayout } from "@/utils/types/page-type/button.type";

import { useParams } from "next/navigation";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { openModalWithData } from "@/states/reducer/modalSlice";
import { ModalContext } from "@/states/context/ModalContext";
import useCurrentPageData from "@/utils/functions/getCurrentPageData";
import { MailIcon } from "@/assets/svg/mail";
import { PDFIcon } from "@/assets/svg/pdf";
import { PenIcon } from "@/assets/svg/pen";
import { PrintIcon } from "@/assets/svg/print";
import { TemplateSelectionIcon } from "@/assets/svg/templateSelection";
import { cn } from "@/utils/functions/classNames";

export default function ButtonLayout({ isEditable, isExportableToPDF, isPrintable, canSendEmail, selectTemplate }: CompactListButtonLayout) {

    const { pages } = useParams();
    const data = useCurrentPageData()!;
    const { setPageLabel } = useContext(ModalContext);
    const dispatch = useDispatch();

    const handleAction = (actionType: string) => {
        setPageLabel?.(pages as string);
        dispatch(openModalWithData({ data }));


        switch (actionType) {
            case 'edit':
            //    console.log('Edit action triggered!');
                break;
            case 'saveAsPDF':
            //    console.log('Saved as PDF!');
                break;
            case 'print':
            //    console.log('Printed!');
                break;
            case 'sendEmail':
            //    console.log('Email sent!');
                break;
            case 'templateSelection':
            //    console.log('Select a template!');
                break;
            default:
                break;
        }
    }

    const buttonConfig = [
        { condition: isEditable, onClick: () => handleAction('edit'), icon: PenIcon, label: 'edit' },
        { condition: isExportableToPDF, onClick: () => handleAction('saveAsPDF'), icon: PDFIcon, label: 'exportToPDF' },
        { condition: isPrintable, onClick: () => handleAction('print'), icon: PrintIcon, label: 'print' },
        { condition: canSendEmail, onClick: () => handleAction('sendEmail'), icon: MailIcon, label: 'email' },
        { condition: selectTemplate, onClick: () => handleAction('templateSelection'), icon: TemplateSelectionIcon, label: 'select_template' },
    ];

    return (
        <div className="flex flex-row ml-3 w-full">
            {buttonConfig.map(({ condition, onClick, icon: Icon, label }, index) =>
                condition && (
                    <button
                        key={label}
                        aria-label={label}
                        onClick={onClick}
                        className={cn('border-grey-450 flex h-full items-center justify-center hover:shadow-md border-[0.8px] bg-gray-100 p-[0.7em]',
                            index === 0 && 'rounded-l',
                            index === buttonConfig.length - 1 && 'rounded-r'
                        )}
                    >
                        <Icon className="w-3 fill-gray-700" />
                    </button>
                )
            )}
        </div>
    );
}
