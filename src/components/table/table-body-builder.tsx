/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClockIcon } from '@/assets/svg/clock'
import Buttons from '@/components/buttons/buttons'
import { Lookup } from '@/components/buttons/buttons-lookups'
import { cn } from '@/utils/functions/classNames'

import { FieldComponents, FormFieldType } from '@/utils/types/structure'

const fieldsComponents: any = new Proxy(
    {
        events,
        select,
        textarea,
        lookup,
        space,
    },
    {
        get(target: FieldComponents, prop: string) {
            return target[prop] || events
        },
    }
)

export default fieldsComponents

function events() {
    return <ClockIcon className="w-3 fill-gray-500" />
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
            className="input-shadow focus:shadow-outline mb-11 block h-36 w-full rounded-sm border border-gray-300 text-sm text-gray-900 focus:border-blue-400"
        />
    )
}

function select(field: FormFieldType) {
    return (
        <Buttons
            hasDropdownIcon={true}
            arrowClassName="group-hover/button:!fill-cyan-550 fill-gray-500 mr-2"
            className=" !h-full items-center justify-end rounded-sm  !border text-gray-900 shadow-sm hover:border-blue-400 focus:border-blue-400  sm:text-sm sm:leading-6"
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
    return (
        <Lookup
            required={field.required}
            containerClassName=" !h-full items-center justify-end rounded-sm  !border text-gray-900 shadow-sm hover:border-blue-400 focus-within:border-blue-400  sm:text-sm sm:leading-6"
            dropdownWidth={'full'}
            // readOnly={FieldsValue.readOnly}
            dropdownContainerClassName="focus:shadow-outline right-0 rounded-sm border border-blue-400 text-sm text-gray-900 "
            handleSelectOption={(value) =>
                (FieldsValue[field.id].value = value)
            }
            options={field.options}
        />
    )
}
