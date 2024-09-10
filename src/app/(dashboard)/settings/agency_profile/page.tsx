'use client'
 /* eslint-disable "@typescript-eslint/no-explicit-any" */
import Pages from '@/components/layout/pages'

import TableFilterOptions from '@/components/table/items/page-header'
import { AgencyProfilePageOptions } from '@/static/page/settings/Pageheader'
import logoUrl from '@assets/image/neema/logo/enda-icon.png'
import Image from 'next/image'
import DynamicForm from '@/components/modal/modal-form'
import { useFormState } from '@/hooks/useFormState'
import { AgencyProfileInputFields } from '../agency_profile.input'



function AgencyPage() {

    const data: never[] = []
    const idObject = AgencyProfileInputFields.reduce((acc: any, { fields }: any) => {
        fields.forEach(({ id }: any) => {
            acc[id] = data[id] || ''
        })
        return acc
    }, {})



    const validationObject = AgencyProfileInputFields.reduce((acc: any, { fields }: any) => {
        fields.forEach(({ id, validations }: any) => {
            if (validations) {
                acc[id] = validations
            }
        })
        return acc
    }, {})

    const { FieldsValue } = useFormState(idObject, validationObject)

    return (
        <Pages className="h-full flex flex-col" data-slot='page'>
            <TableFilterOptions data-slot="header" className='w-full overflow-auto' dropdownOptions={AgencyProfilePageOptions} />
            <div data-slot="body" className="p-6 max-h-screen flex-1 overflow-y-auto">
                <div className='grid grid-cols-7 gap-5 bg-white shadow-md rounded-md p-6'>
                    <h2 className="text-xl col-span-7 text-black font-semibold mb-4">Agency Logo</h2>
                    <div className="w-full h-full sm:mr-4 mb-4 sm:mb-0 border-dotted border-2 border-gray-100 flex justify-center col-span-2">
                        {logoUrl ? (
                            <Image
                                src={logoUrl}
                                alt="Agency Logo"
                                className="size-44 object-cover rounded-full mb-4"
                            />
                        ) : (
                            <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-full mb-4">
                                <span className="text-gray-500">No Logo</span>
                            </div>
                        )}
                    </div>
                    <div className='col-span-5'>
                        <h1 className='text-black w-72'>
                            Agency Logo will appear on documents
                            (Travel Documents, Invoices, Credit Notes ...)
                            that you create
                        </h1>
                        <div className='flex flex-col w-fit'>
                            <label className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-2">
                                <span>Upload Logo</span>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                // onChange={handleLogoChange}
                                />
                            </label>
                            {logoUrl && (
                                <button
                                    // onClick={handleRemoveLogo}
                                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                                >
                                    Remove Logo
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-6 bg-white shadow-md mb-32 rounded-md p-6 h-fit">
                    <DynamicForm
                        items={AgencyProfileInputFields}
                        FieldsValue={FieldsValue}
                    />
                </div>
            </div>
        </Pages>

    )
}

export default AgencyPage
