import {fieldsToDisplayType} from "@/utils/types/page-type/table.type";

export const TravelerItemsColums = [
    { key: 'date', label: 'Date' },
    { key: 'item', label: 'Item#' },
    { key: 'traveler_name', label: 'Traveler' },
    { key: 'trip', label: 'Trip' },
    { key: 'travel_start', label: 'Traveler Start' },
    { key: 'status', label: 'Status' },
    { key: 'fcy', label: 'FCY' },
    { key: 'fare', label: 'Fare' },
    { key: 'invoice', label: 'Invoice#' }
]

export const travelItemsCLLayout: fieldsToDisplayType = {
    headerContent_Position: 'justify-start',
    leftGroup: [
        {
            fieldsName: ['traveler_name'],
            class: ['text-black']
        }
    ],
    rightGroup: [
        {
            fieldsName: ['status'],
            class: ['text-black']
        }
    ]
}