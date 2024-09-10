'use client'

import { InputType } from "@/utils/types/page-type/table.type";
import { ReactNode } from "react";
import Buttons from "@/components/buttons/buttons";
import { useParams } from "next/navigation";

export default function GenericInput({ children, type, action, ...props }: { children?: any, type: InputType, action?: string, props?: any }): ReactNode {

    const params = useParams<{ id: string }>()

    const { id} = params

    function handleClick(action?: string) {
        switch (action) {
            case 'print':
                printDocument(id)
                break
            case 'openNewWindow':
                openNewWindow(id)
                break
            default:
                null
        }
    }

    switch (type) {
        case InputType.Button:
            return (<button onClick={() => handleClick(action)} {...props}>
                {children}
            </button>)
        case InputType.Dropdown:
            return (<Buttons
                {...props}
            >
                <div data-slot="title" className="text-sm text-black ">
                    {children}
                </div>
            </Buttons>)
        default:
            return null
    }

    function printDocument(id: string) {

    }

    function openNewWindow(id: string) {

    }

    // function sendEmail(id: string) {

    // }

    // function showAsPDF(id: string) {

    // }
}