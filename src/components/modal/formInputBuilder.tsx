/* eslint-disable @typescript-eslint/no-explicit-any */
import Buttons from '@/components/buttons/buttons'
import { Lookup } from '@/components/buttons/lookups'
import { cn } from '@/utils/intext'

import { FieldComponents, FormFieldType } from '@/utils/models/structure'

const fieldsComponents: any = new Proxy(
    {
        input,
        select,
        textarea,
        lookup,
        space,
    },
    {
        get(target: FieldComponents, prop: string) {
            return target[prop] || input
        },
    }
)

export default fieldsComponents

function input(field: FormFieldType, FieldsValue: any) {
    console.log("🚀 ~ input ~ FieldsValue:", FieldsValue)
    return (
        <input
            readOnly={field.readOnly}
            type={field.type}
            id={field.id}
            name={field.id}
            required={field?.required}
            onChange={(e) => (FieldsValue[field.id] = e.target.value)}
            value={FieldsValue[field.id]?.value}
            autoComplete={field.autoComplete}
            placeholder={field.placeHolder}
            className={cn(
                field.readOnly && 'pointer-events-none',
                'input-shadow focus:shadow-outline block h-full w-full rounded-sm border border-gray-300 py-2 px-4 text-left text-sm text-gray-900 hover:border-blue-400 focus:border-blue-400'
            )}

        />
    )
}

function textarea(field: FormFieldType, FieldsValue: any) {
    return (
        <textarea
            id={field.id}
            name={field.id}
            required={field?.required}
            onChange={(e) => (FieldsValue[field.id] = e.target.value)}
            value={FieldsValue[field.id]?.value}
            autoComplete={field.autoComplete}
            className="input-shadow focus:shadow-outline mb-11 block h-36 w-full rounded-sm border border-gray-300 py-2 px-4 text-left text-sm text-gray-900 focus:border-blue-400"
        />
    )
}

function select(field: FormFieldType) {
    return (
        <Buttons
            hasDropdownIcon={true}
            arrowClassName="group-hover/button:!fill-cyan-550 fill-gray-500 mr-2"
            className=" !h-full items-center justify-end rounded-sm border-gray-300  !border text-gray-900 shadow-sm hover:border-blue-400 focus:border-blue-400  sm:text-sm sm:leading-6"
            dropdownClassName="focus:shadow-outline right-0 w-full rounded-sm border border-blue-400 text-sm text-gray-900 "
            dropdownText="!text-xs font-normal text-start"
            dropdownOptions={field.options}
        >
            <div data-slot="title"></div>
        </Buttons>
    )
}
function space(field: FormFieldType) {
    return <div key={field.id} className={cn(field.span, 'invisible')}></div>
}
function lookup(field: FormFieldType, FieldsValue: any) {
    console.log(
        '🚀 ~ lookup ~ FieldsValue:',
        field?.options?.map((item) => FieldsValue[item.id!]?.value)
    )

    return (
        <Lookup
            value={FieldsValue[field.id]?.value}
            required={field.required}
            containerClassName=" !h-full items-center justify-end rounded-sm  !border text-gray-900 shadow-sm hover:border-blue-400 focus-within:border-blue-400  sm:text-sm sm:leading-6"
            dropdownWidth={'full'}
            // readOnly={FieldsValue.readOnly}
            dropdownContainerClassName="focus:shadow-outline right-0 rounded-sm border border-blue-400 text-sm text-gray-900 "
            handleSelectOption={(value) =>
                (FieldsValue[field.id].value = value)
            }
            // lookupOptions={ field?.options?.map(item => FieldsValue[item.id!]?.value)}
            options={field.options}
        />
    )
}
