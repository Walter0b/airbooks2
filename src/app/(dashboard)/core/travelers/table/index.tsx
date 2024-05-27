


export const travelersColumns = [
    { key: 'display_name', label: 'Traveler Name' },
    { key: 'mobile_phone', label: 'Mobile Phone' },
    { key: 'state', label: 'State' },
    { key: 'city', label: 'City' },
    { key: 'postal_code', label: 'Postal Code' }
]

export const travelerCompactList = [
    {
        id: 110000000085748,
        name: 'John Doe',
        planeInfo: 'Flight XYZ123',
        planeArrivalInfo: {
            ticketNumber: 'TK123456',
            date: '2024-02-06',
        },

        money: {
            currency: 'USD',
            amount: 1000,
        },
        planeState: 'On Time',
        arrivalStatus: 'Boarding',
    },
    {
        id: 110000000085742,
        name: 'Jane Smith',
        planeInfo: 'Flight ABC789',
        planeArrivalInfo: {
            ticketNumber: 'BA987654',
            date: '2024-02-07',
        },
        money: {
            currency: 'EUR',
            amount: 800,
        },
        planeState: 'Delayed',
        arrivalStatus: 'Arrived',
    },
    {
        name: 'Alice Johnson',
        planeInfo: 'Flight DEF456',
        planeArrivalInfo: {
            ticketNumber: 'AA123456',
            date: '2024-02-08',
        },
        money: {
            currency: 'GBP',
            amount: 1200,
        },
        planeState: 'On Time',
        arrivalStatus: 'Boarding',
    },
    {
        name: 'Bob Brown',
        planeInfo: 'Flight GHI789',
        planeArrivalInfo: {
            ticketNumber: 'BB987654',
            date: '2024-02-09',
        },
        money: {
            currency: 'CAD',
            amount: 900,
        },
        planeState: 'Delayed',
        arrivalStatus: 'Arrived',
    },
    {
        name: 'Eva Williams',
        planeInfo: 'Flight JKL012',
        planeArrivalInfo: {
            ticketNumber: 'CC123456',
            date: '2024-02-10',
        },
        money: {
            currency: 'AUD',
            amount: 1100,
        },
        planeState: 'On Time',
        arrivalStatus: 'Boarding',
    },
    {
        name: 'Michael Jones',
        planeInfo: 'Flight MNO345',
        planeArrivalInfo: {
            ticketNumber: 'DD987654',
            date: '2024-02-11',
        },
        money: {
            currency: 'JPY',
            amount: 950,
        },
        planeState: 'Delayed',
        arrivalStatus: 'Arrived',
    },
    {
        name: 'Sophia Davis',
        planeInfo: 'Flight PQR678',
        planeArrivalInfo: {
            ticketNumber: 'EE123456',
            date: '2024-02-12',
        },
        money: {
            currency: 'CHF',
            amount: 1300,
        },
        planeState: 'On Time',
        arrivalStatus: 'Boarding',
    },
    {
        name: 'Daniel Martinez',
        planeInfo: 'Flight STU901',
        planeArrivalInfo: {
            ticketNumber: 'FF987654',
            date: '2024-02-13',
        },
        money: {
            currency: 'SGD',
            amount: 850,
        },
        planeState: 'Delayed',
        arrivalStatus: 'Arrived',
    },
    {
        name: 'Olivia Garcia',
        planeInfo: 'Flight VWX234',
        planeArrivalInfo: {
            ticketNumber: 'GG123456',
            date: '2024-02-14',
        },
        money: {
            currency: 'CNY',
            amount: 1400,
        },
        planeState: 'On Time',
        arrivalStatus: 'Boarding',
    },
]
interface FlightInfo {
    ticketNumber: string
    date: string
}

export const InputFields = [

]

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
