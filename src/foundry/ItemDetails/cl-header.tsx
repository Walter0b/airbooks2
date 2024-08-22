import {useEffect, useState} from "react";
import {DetailComponentInputs, TableOptionsType} from "@/utils/types/page-type/table.type";
import {groupElementsByGroup} from "@/utils/functions/currentUsage";
import GenericInput from "@/components/layout/generic-header-input";
import CloseButton from "@/components/buttons/close-Button";

export default function CompactListHeader({
    dropdownOptions,
    justify_content,
    handleOpenModal
}: Readonly<{
    dropdownOptions: TableOptionsType,
    justify_content?: string,
    handleOpenModal: () => void
}>) {
    const [inputs, setInputs] = useState<DetailComponentInputs[][]>([]);

    useEffect(() => {
        setInputs(groupElementsByGroup(dropdownOptions.detailInputs))
    }, []);

    return (
        <div className="flex h-full w-full items-center">
            <div className="flex h-8 w-full justify-between pr-5">
                <div className={`flex ml-3 w-full ${justify_content}`}>
                    {inputs.map((inputsGroup: DetailComponentInputs[], index: number) => {
                        return (<span key={index} className="flex mr-4">
                            {inputsGroup.map((input: DetailComponentInputs) => {
                                return (<GenericInput
                                    key={input.id}
                                    type={input.type}
                                    {...input.attrs}>
                                    {input.icon ? <input.icon className='w-4'/> : input.value}
                                </GenericInput>)
                            })}
                    </span>)
                    })}
                </div>
                <CloseButton redirect="/" />
            </div>
        </div>
    )
}