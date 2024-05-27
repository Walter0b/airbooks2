import {
    FormTabType,
    IndividualFormDataProp,
    TabsProps,
} from '@/utils/models/structure'
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
            <div className="mt-3 flex w-full">
                {formData.map((tab: IndividualFormDataProp, index: number) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(tab.label, tab.tabs)}
                        className={`borderButtonStyles ${currentPage === tab.label && 'actives'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Tabs
