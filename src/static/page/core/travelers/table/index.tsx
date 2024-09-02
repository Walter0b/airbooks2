import { fieldsToDisplayType } from '@/utils/types/page-type/table.type'

export const travelersColumns = [
    { key: 'display_name', label: 'Traveler Name', sortable: true },
    { key: 'mobile_phone', label: 'Mobile Phone' },
    { key: 'state', label: 'State' },
    { key: 'city', label: 'City' },
    { key: 'postal_code', label: 'Postal Code' },
]

export const travelerCLLayout: x = {
    headerContent_Position: 'justify-end',
    // TODO: check if deletable
    leftGroup: [
        {
            fieldsName: ['display_name'],
            class: ['text-black'],
        },
        {
            fieldsName: ['city', 'mobile_phone'],
            class: ['pr-1 text-gray-500', 'text-cyan-550 pl-1 font-semibold'],
        },
    ],
    rightGroup: [
        {
            fieldsName: ['postal_code '],
            class: ['flex text-black'],
        },
        {
            fieldsName: ['id_country'],
            class: ['text-black'],
        },
    ],
}
