/* eslint-disable "@typescript-eslint/no-explicit-any" */
import React, { useCallback, useState, useEffect, useRef, useContext } from 'react'
import { FormTabType } from '@/utils/types/structure'
import CloseButton from '@/components/buttons/close-Button'
import Tabs from './modal-tabs'
import { useFormState } from '@/hooks/useFormState'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '@/states/reducer/modalSlice'
import { ModalContext } from '@/states/context/ModalContext'
import { RootState } from '@/states/store'
import DynamicForm from './modal-form'

const Modal = ({ title }: Readonly<{ title?: string }>) => {
    const { data } = useSelector((state: RootState) => state.modal)
    const { InputFields } = useContext(ModalContext)
    const defaultForm = InputFields![0].tabs
    const [formData, setFormData] = useState<FormTabType[]>(defaultForm)
    const dispatch = useDispatch()

    const idObject = formData.reduce((acc: any, { fields }: any) => {
        fields.forEach(({ id }: any) => {
            acc[id] = data[id] || ''
        })
        return acc
    }, {})

    const validationObject = formData.reduce((acc: any, { fields }: any) => {
        fields.forEach(({ id, validations }: any) => {
            if (validations) {
                acc[id] = validations
            }
        })
        return acc
    }, {})

    const { FieldsValue } = useFormState(idObject, validationObject)

    // Use useCallback to memoize the handleOnclick function
    const handleOnclick = useCallback(() => {
        dispatch(closeModal())
    }, [dispatch])

    const handleSubmit = (event: any) => {
        event.preventDefault()
    }

    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                handleOnclick()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handleOnclick]) // Include handleOnclick in the dependency array

    return (
        <div className="fixed inset-0 z-50 flex h-full items-center justify-center bg-black/10 backdrop-opacity-35 backdrop-saturate-100">
            <div
                ref={modalRef}
                className="flex h-full w-2/4 flex-col overflow-hidden rounded-sm bg-white max-md:w-full"
            >
                <div id="head" className="flex-none">
                    <div className="bg-cyan-550 flex items-center justify-between py-3 px-4">
                        <p className=" text-xl font-bold">{title}</p>
                        <CloseButton
                            onClick={handleOnclick}
                            color="fill-white"
                        />
                    </div>
                    <Tabs formData={InputFields!} setFormData={setFormData} />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex h-full flex-col overflow-hidden rounded-sm bg-white"
                >
                    <div
                        id="body"
                        className="flex-grow overflow-y-auto py-4 px-6 h-10/12"
                    >
                        <DynamicForm
                            items={formData}
                            FieldsValue={FieldsValue}
                        />
                    </div>
                    <div
                        id="footer"
                        className="bottom-0 flex h-2/12 w-full flex-none items-center justify-start gap-3 border-t border-gray-300 bg-white px-8"
                    >
                        <button
                            type="submit"
                            className="buttonStyles bg-red-650"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleOnclick}
                            className="buttonStyles border-stone-300 bg-zinc-100 text-black "
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
