import { cn } from '@/utils/functions/classNames'
import {
    FormTabType,
    IndividualFormDataProp,
    TabsProps,
} from '@/utils/types/structure'
import React, { useState } from 'react'

const Tabs: React.FC<TabsProps> = ({ formData, setFormData }) => {
    const defaultForm = formData[0].label
    const [currentPage, setCurrentPage] = useState(defaultForm)
    const handleTabClick = (page: string, data: FormTabType[]) => {
        setFormData(data)
        setCurrentPage(page)
    }

    return (
        <div className="border">
            <div className="border-cyan-550/30 mt-3 flex w-full border-b-[0.1px] font-medium">
                {formData.map((tab: IndividualFormDataProp, index: number) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(tab.label, tab.tabs)}
                        className={cn(
                            'borderButtonStyles',
                            currentPage === tab.label && 'actives'
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Tabs
