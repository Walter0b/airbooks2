/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef, useContext } from 'react';
import DynamicForm from './modal.Form';
import { FormTabType } from '@/utils/models/structure';
import CloseButton from '@/components/buttons/usefull-buttons';
import Tabs from './modal.tabs';
import { useFormState } from '@/hooks/useFormState';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '@/states/reducer/modalSlice';
import { ModalContext } from '@/hooks/ModalContext';
import { RootState } from '@/states/store'

const Modal = ({ title, }: Readonly<{ title?: string }>) => {

    const { data } = useSelector((state: RootState) => state.modal);
    console.log("🚀 ~ Modal ~ data:", data)
    
    const { InputFields } = useContext(ModalContext);

    const defaultForm = InputFields![0].tabs
    const [formData, setFormData] = useState<FormTabType[]>(defaultForm);

    const dispatch = useDispatch();

    const idObject = formData.reduce((acc: any, { fields }: any) => {
        fields.forEach(({ id }: any) => {
            acc[id] = data[id] || '';
        });
        return acc;

    }, {});


    const validationObject = formData.reduce((acc: any, { fields }: any) => {
        fields.forEach(({ id, validations }: any) => {
            if (validations) {
                acc[id] = validations;
            }
        });
        return acc;

    }, {});


    const { FieldsValue } = useFormState(idObject, validationObject);
    console.log("🚀 ~ Modal ~ idObject:", idObject)

    console.log("🚀 ~ Modal ~ FieldsValue:", FieldsValue)

    function handleOnclick() {
        dispatch(closeModal());
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData.entries());
        console.log(formValues);
    };

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleOnclick()
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center h-full bg-black/10 backdrop-opacity-35 backdrop-saturate-100 z-50">
            <div ref={modalRef} className="flex flex-col h-full w-2/4 max-md:w-full overflow-hidden bg-white rounded-sm">
                <div id='head' className="flex-none">
                    <div className="flex items-center justify-between px-4 py-3 bg-cyan-550">
                        <p className=" text-xl font-bold">{title}</p>
                        <CloseButton onClick={handleOnclick} color="fill-white" />
                    </div>
                    <Tabs formData={InputFields!} setFormData={setFormData} />
                </div>
                {/* <div id="error" className='bg-sky-100 mt-6 p-2 '><ul></ul></div> */}
                <form onSubmit={handleSubmit} className="flex flex-col h-full overflow-hidden bg-white rounded-sm">
                    <div id="body" className="px-6 py-4 overflow-y-auto flex-grow">
                        <DynamicForm items={formData} FieldsValue={FieldsValue} />

                    </div>
                    <div id="footer" className=" bottom-0 flex-none flex h-16 w-full items-center justify-start gap-3 border-t px-8 bg-white">
                        <button type="submit" className="buttonStyles bg-red-650">Save</button>
                        <button onClick={handleOnclick} className="buttonStyles text-black bg-zinc-100 border-stone-300 ">Cancel</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Modal;
