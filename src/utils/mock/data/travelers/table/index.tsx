import { ClockIcon } from '@/assets/svg/clock'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const travelersData: any = {
    data: [
        {
            id: 110000000085748,
            name: 'ACHAMYELEH / DEBELA MR',
            mobilePhone: '+27 351 191753',
            nationality: 'ETHIOPIA',
            travelStatus: 'On Trip',
            events: <ClockIcon className="w-3 fill-gray-500" />,
            income: '270,695.36',
        },
        {
            id: 110000000085742,
            name: 'SMITH / JOHN',
            mobilePhone: '+1 123 456789',
            nationality: 'UNITED STATES',
            travelStatus: 'Planning',
            events: '',
            income: '120,000.00',
        },
        {
            id: 110000000085741,
            name: 'KUMAR / PRIYA',
            mobilePhone: '+91 9876543210',
            nationality: 'INDIA',
            travelStatus: 'On Trip',
            events: < ClockIcon className="w-3 fill-gray-500" />,
            income: '150,000.50',
        },
        {
            id: 110000000085743,
            name: 'GARCIA / MARIA',
            mobilePhone: '+34 123456789',
            nationality: 'SPAIN',
            travelStatus: 'Completed',
            events: '',
            income: '80,500.75',
        },
        {
            id: 110000000085745,
            name: 'ACHAMYELEH / DEBELA MR',
            mobilePhone: '+27 351 191753',
            nationality: 'ETHIOPIA',
            travelStatus: 'On Trip',
            events: < ClockIcon className="w-3 fill-gray-500" />,
            income: '270,695.36',
        },
        {
            id: 110000000085740,
            name: 'JONES / EMMA',
            mobilePhone: '+44 20 1234 5678',
            nationality: 'UNITED KINGDOM',
            travelStatus: 'Planning',
            events: < ClockIcon className="w-3 fill-gray-500" />,
            income: '180,000.00',
        },
        {
            id: 110000000085248,
            name: 'LI / JING',
            mobilePhone: '+86 10 1234 5678',
            nationality: 'CHINA',
            travelStatus: 'On Trip',
            events: '',
            income: '200,500.25',
        },
        {
            id: 110000000085348,
            name: 'MÜLLER / LUKAS',
            mobilePhone: '+49 30 1234 5678',
            nationality: 'GERMANY',
            travelStatus: 'Completed',
            events: < ClockIcon className="w-3 fill-gray-500" />,
            income: '120,300.75',
        },
        {
            id: 110000000084238,
            name: 'ITO / YUKI',
            mobilePhone: '+81 3 1234 5678',
            nationality: 'JAPAN',
            travelStatus: 'Planning',
            events: '',
            income: '150,200.50',
        },
        {
            id: 110000000025348,
            name: 'ALVAREZ / CARLOS',
            mobilePhone: '+34 987654321',
            nationality: 'SPAIN',
            travelStatus: 'On Trip',
            events: < ClockIcon className="w-3 fill-gray-500" />,
            income: '90,600.20',
        },
        {
            id: 110000000034748,
            name: 'KOWALSKI / ANNA',
            mobilePhone: '+48 123 456 789',
            nationality: 'POLAND',
            travelStatus: 'Planning',
            events: '',
            income: '130,400.60',
        },
        {
            id: 110000000082741,
            name: 'CHEN / YUN',
            mobilePhone: '+86 20 1234 5678',
            nationality: 'CHINA',
            travelStatus: 'On Trip',
            events: < ClockIcon className="w-3 fill-gray-500" />,
            income: '250,800.90',
        },
    ],
    totalItems: 80,
    pageSize: 10,
    currentPage: 1

}

export const travelersColumns = [
    { key: 'name', label: 'Traveler Name' },
    { key: 'mobilePhone', label: 'Mobile Phone' },
    { key: 'nationality', label: 'nationality' },
    { key: 'travelStatus', label: 'Travel Status' },
    { key: 'events', label: 'Events' },
    { key: 'income', label: 'income' },
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
