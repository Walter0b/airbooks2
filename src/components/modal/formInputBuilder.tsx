/* eslint-disable @typescript-eslint/no-explicit-any */
import Buttons from "@components/buttons/buttons";
import { Lookup } from "@components/buttons/lookups";

import { FieldComponents, FormFieldType } from "@utils/models/structure";

const fieldsComponents: FieldComponents = new Proxy({

    input,
    select,
    textarea,
    lookup,
    space,
}, {
    get(target: FieldComponents, prop: string) {
        return target[prop] || input;
    },
});

export default fieldsComponents;


function input(field: FormFieldType, FieldsValue: any) {

    console.log(field.id, ' :', FieldsValue[field.id]?.value)

    return (
        <input
            type={field.type}
            id={field.id}
            name={field.id}
            onChange={(e) => FieldsValue[field.id] = e.target.value}
            value={FieldsValue[field.id]?.value}
            autoComplete={field.autoComplete}
            placeholder={field.placeHolder}
            className="input-shadow focus:shadow-outline block h-full w-full rounded-sm border border-gray-300 text-sm text-gray-900 focus:border-blue-400 hover:border-blue-400"
        />
    );
}

function textarea(field: FormFieldType, FieldsValue: any) {
    return (
        <textarea
            id={field.id}
            name={field.id}
            onChange={(e) => FieldsValue[field.id] = e.target.value}
            value={FieldsValue[field.id]?.value}
            autoComplete={field.autoComplete}
            className="input-shadow focus:shadow-outline mb-11 block h-36 w-full rounded-sm border border-gray-300 text-sm text-gray-900 focus:border-blue-400"
        />
    );
}

function select(field: FormFieldType) {
    return (
        <Buttons
            hasDropdownIcon={true}
            isInput={true}
            arrowClassName="group-hover/button:!fill-cyan-550 fill-gray-500 mr-2"
            className=" !h-full items-center justify-end rounded-sm  !border text-gray-900 shadow-sm hover:border-blue-400 focus:border-blue-400  sm:text-sm sm:leading-6"

            dropdownSize={'full'}
            dropdownClassName="focus:shadow-outline right-0 rounded-sm border border-blue-400 text-sm text-gray-900 "
            dropdownText="!text-xs font-normal text-start"
            dropdownOptions={field.options}
        >
            <div data-slot="title"></div>

        </Buttons>
    );
}
function space(field: FormFieldType) {
    return (
        <div key={field.id} className={`${field.span} invisible`}></div>
    )
}
function lookup(field: FormFieldType, FieldsValue: any) {
    return (
        <Lookup
            containerClassName=" !h-full items-center justify-end rounded-sm  !border text-gray-900 shadow-sm hover:border-blue-400 focus-within:border-blue-400  sm:text-sm sm:leading-6"
            dropdownWidth={'full'}
            readOnly={FieldsValue.readOnly}
            dropdownContainerClassName="focus:shadow-outline right-0 rounded-sm border border-blue-400 text-sm text-gray-900 "
            handleSelectOption={(value) => FieldsValue[field.id].value = value}
            options={field.options}
        />
    );
}
