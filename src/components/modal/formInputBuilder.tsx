import Buttons from "@components/buttons/buttons"
import { Dropdown } from "@components/buttons/dropdown"
import { DropdownItemType } from "@utils/models/interface/table";
import { fields } from "@utils/models/structure";

const fieldsCompents = new Proxy({
    input, select, textarea,
}, {
    get(target, prop, receiver) {
        console.log('get', target, prop, receiver);
        return target[prop] || input
    },
})
export default fieldsCompents

function input(field: fields) {
    return (
        <input
            type={field.type}
            id={field.id}
            name={field.id}
            autoComplete={
                field.autoComplete
            }
            placeholder={
                field.placeHolder
            }
            className="input-shadow focus:shadow-outline block h-full w-full rounded-sm border border-gray-300 text-sm text-gray-900 focus:border-blue-400 hover:border-blue-400"
        />

    )
}
function textarea(field: fields, values, errors) {
    //debugger
    console.log('erre', errors)
    const hasError = !!errors?.[field.id]
    return (
        <textarea
            id={field.id}
            name={field.id}
            onChange={(e) => values[field.id] = e.target.value}
            value={errors?.[field.id]?.value || values?.[field.id]}
            autoComplete={
                field.autoComplete
            }
            className="input-shadow focus:shadow-outline mb-11 block h-36 w-full rounded-sm border border-gray-300 text-sm text-gray-900 focus:border-blue-400"
        />
    )
}

function select(field: { options: DropdownItemType[] | undefined; }) {
    return (
        <Buttons
            hasDropdownIcon={true}
            arrowClassName="group-hover/button:!fill-cyan-550 fill-gray-500 mr-2"
            className=" !h-full items-center justify-end rounded-sm  !border text-gray-900 shadow-sm hover:border-blue-400 focus:border-blue-400  sm:text-sm sm:leading-6"
        >
            <div data-slot="title"></div>
            <Dropdown
                size={'full'}
                className="focus:shadow-outline right-0 rounded-sm border border-blue-400 text-sm text-gray-900 "
                text="!text-xs font-normal text-start"
                data-slot="dropdown"
                dropdownOptions={
                    field?.options
                }
            />
        </Buttons>
    )
}