import CloseButton from '@/components/buttons/close-Button'
import {DetailComponentInputs, TableOptionsType} from '@/utils/types/page-type/table.type'
import {useEffect, useState} from "react";
import {groupElementsByGroup} from "@/utils/functions/currentUsage";
import GenericInput from "@/components/layout/generic-header-input";

export default function TravelerCompactListHeader({
    dropdownOptions,
    handleOpenModal,
}: Readonly<{
    dropdownOptions: TableOptionsType
    handleOpenModal: () => void
}>) {
    const [inputs, setInputs] = useState<DetailComponentInputs[][]>([]);

    useEffect(() => {
        setInputs(groupElementsByGroup(dropdownOptions.detailInputs))
    }, []);

    return (
        <div className="flex h-full w-full items-end">
            <div className="flex h-8 w-full justify-end pr-5">
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
                <CloseButton redirect="/" />
            </div>
        </div>
    )
}
