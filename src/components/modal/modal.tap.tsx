import { FormTabType, FormProps, TabsProps } from '@utils/models/structure';
import React, { useState } from 'react';



const Tabs: React.FC<TabsProps> = ({ formData, setFormData }) => {
    const [currentPage, setCurrentPage] = useState('Main');
    const handleTabClick = (page: string, data: FormTabType[]) => {
        setFormData(data);
        setCurrentPage(page);
    };

    return (
        <div className="border">
            <div className="mt-3 flex w-full">
                {formData.map((tab: FormProps, index: number) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(tab.label ?? 'Main', tab.tab)}
                        className={`borderButtonStyles ${currentPage === (tab.label ?? 'Main') && 'actives'}`}
                    >
                        {tab.label ?? 'Main'}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
