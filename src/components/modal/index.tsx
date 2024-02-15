import { ReactNode, useState } from 'react';
import DynamicForm from './DynamicForm';
import { TravelersBookingFields, TravelersMainFields } from '@utils/mock/data/modal/input';
import { DynamicFormProps } from '@utils/models/structure';
import CloseButton from '@components/buttons/usefull-buttons';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children, hasOptions, title }: Readonly<{ children?: ReactNode; hasOptions: boolean, title: string }>) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<DynamicFormProps[]>(TravelersMainFields);
    const [currentPage, setCurrentPage] = useState<string>('Main');

    const handleOnClick = (page: string, data: DynamicFormProps[]) => {
        setFormData(data);
        setCurrentPage(page);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center h-screen bg-black/30 backdrop-opacity-35 backdrop-saturate-100">
            <div className="flex flex-col h-screen w-2/4 overflow-hidden bg-white rounded-sm">
                <div id='head' className="flex-none">
                    <div className="flex items-center justify-between px-4 py-3 bg-cyan-550">
                        <p className=" text-xl font-bold">{title}</p>
                        <CloseButton color="fill-white" />
                    </div>
                    {hasOptions && (
                        <div className="border">
                            <div className="mt-3 flex w-full">
                                <button
                                    onClick={() => handleOnClick('Main', TravelersMainFields)}
                                    className={`borderButtonStyles ${currentPage === 'Main' && 'active'}`}
                                >
                                    Main
                                </button>
                                <button
                                    onClick={() => handleOnClick('Bookings', TravelersBookingFields)}
                                    className={`borderButtonStyles ${currentPage === 'Bookings' && 'active'}`}
                                >
                                    Bookings
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div id="body" className=" h-full mb-10 overflow-auto bg-white sm:rounded-xl md:col-span-2">

                    {children}
                    <DynamicForm items={formData} />
                </div>
                <div id="footer" className="fixed bottom-0 flex-none flex h-16 w-2/4 items-center justify-start gap-3 border-t px-8 bg-white">
                    <button className="buttonStyles bg-red-650">Save</button>
                    <button onClick={() => navigate(-1)} className="buttonStyles text-black bg-zinc-100 border-stone-300 ">Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default Modal;