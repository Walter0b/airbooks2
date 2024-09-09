import { fieldsToDisplayType } from '@/utils/types/page-type/table.type'

export const customerColumns = [
    { key: 'customer_name', label: 'Customer Name' },
    { key: 'alias', label: 'Alias' },
    { key: 'id_currency', label: 'Currency' },
    { key: 'street', label: 'Street' },
    { key: 'city', label: 'City' },
    { key: 'state', label: 'State' },
]

export const customerCLLayout: fieldsToDisplayType = {
    headerContent_Position: 'justify-end',
    rightTab_Options: ['Snapshot', 'Statement'],
    leftGroup: [
        {
            fieldsName: ['customer_name'],
            class: ['text-black'],
        },
    ],
    rightGroup: [
        {
            fieldsName: ['id_country'],
            class: ['text-black'],
        },
    ],
}

interface FlightInfo {
    ticketNumber: string
    date: string
}

export const InputFields = []

interface MoneyInfo {
    currency: string
    amount: number
}

export interface TravelerItemCompactListInterface {
    id: number
    item: number
    name: string
    planeInfo: string
    planeArrivalInfo: FlightInfo
    money: MoneyInfo
    planeState: string
    arrivalStatus: string
}
