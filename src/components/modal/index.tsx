/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import DynamicForm from './DynamicForm';
import { TravelersBookingFields, TravelersMainFields } from '@utils/mock/data/modal/input';
import { FormTabType } from '@utils/models/structure';
import CloseButton from '@components/buttons/usefull-buttons';
import { useNavigate } from 'react-router-dom';
import Tabs from './modal.tap';

const Modal = ({ hasOptions, title }: Readonly<{ hasOptions: boolean, title: string }>) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormTabType[]>(TravelersMainFields);
    const [currentPage, setCurrentPage] = useState<string>('Main');

    const objValues = {};
    const objErrors = {};


    const [values, setValues] = useState<any>(buildValues(objValues));
    const [errors, setErrors] = useState<any>({});

    //todo: mak it happen

    function buildValues(values: any) {
        return new Proxy({}, {
            get(_, p) {
                return objValues[p]
            },
            set(_, p, newValue) {
                if (p === 'Email') {
                    if (/@/.test(newValue)) {
                        objValues[p] = newValue
                        delete objErrors[p]
                    } else {
                        objErrors[p] = { value: newValue, error: 'invalid email' }
                    }
                }
                setValues(buildValues(objValues))
                setErrors(objErrors)
                return true
            },
        })
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center h-full bg-black/30 backdrop-opacity-35 backdrop-saturate-100">
            <div className="flex flex-col h-full w-2/4 max-md:w-full overflow-hidden bg-white rounded-sm">
                <div id='head' className="flex-none">
                    <div className="flex items-center justify-between px-4 py-3 bg-cyan-550">
                        <p className=" text-xl font-bold">{title}</p>
                        <CloseButton color="fill-white" />
                    </div>
                    <Tabs formData={formData} setFormData={setFormData} />
                </div>
                <div id="body" className="px-6 py-4 overflow-y-auto flex-grow">


                    <DynamicForm items={formData} values={values} errors={errors} />

                </div>
                <div id="footer" className=" bottom-0 flex-none flex h-16 w-full items-center justify-start gap-3 border-t px-8 bg-white">
                    <button className="buttonStyles bg-red-650">Save</button>
                    <button onClick={() => navigate(-1)} className="buttonStyles text-black bg-zinc-100 border-stone-300 ">Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default Modal;
