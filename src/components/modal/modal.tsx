/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import DynamicForm from './DynamicForm';
import { TravelersInputFields } from '@/utils/mock/data/modal/input';
import { FormTabType } from '@/utils/models/structure';
import CloseButton from '@/components/buttons/usefull-buttons';
import Tabs from './modal.tabs';
import { travelerValidations } from '@/pages/core/travelers/travelers.validation';
import { useFormState } from '@/hooks/useFormState';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/states/reducer/modalSlice';

// TODO inputFelds,travelerValidations
const Modal = ({ title }: Readonly<{ title?: string, inputFelds?: any[] }>) => {
    const defaultForm = TravelersInputFields[0].tabs
    const [formData, setFormData] = useState<FormTabType[]>(defaultForm)

    const idObject = formData.reduce((acc: any, { fields }: any) => {
        fields.forEach(({ id }: any) => {
            acc[id] = "";
        });
        return acc;
    }, {});
    const dispatch = useDispatch();
    
    const { FieldsValue } = useFormState(idObject, travelerValidations);

    function handleOnclick() {
        dispatch(closeModal());
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center h-full bg-black/10 backdrop-opacity-35 backdrop-saturate-100 z-50">
            <div className="flex flex-col h-full w-2/4 max-md:w-full overflow-hidden bg-white rounded-sm">
                <div id='head' className="flex-none">
                    <div className="flex items-center justify-between px-4 py-3 bg-cyan-550">
                        <p className=" text-xl font-bold">{title}</p>
                        <CloseButton onClick={handleOnclick} color="fill-white" />
                    </div>
                    <Tabs formData={TravelersInputFields} setFormData={setFormData} />
                </div>
                {/* <div id="error" className='bg-sky-100 mt-6 p-2 '><ul></ul></div> */}
                <div id="body" className="px-6 py-4 overflow-y-auto flex-grow">
                    <DynamicForm items={formData} FieldsValue={FieldsValue} />

                </div>
                <div id="footer" className=" bottom-0 flex-none flex h-16 w-full items-center justify-start gap-3 border-t px-8 bg-white">
                    <button className="buttonStyles bg-red-650">Save</button>
                    <button onClick={handleOnclick} className="buttonStyles text-black bg-zinc-100 border-stone-300 ">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
