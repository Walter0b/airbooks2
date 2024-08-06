import { TableOptionsType } from '@/utils/types/page-type/table.type'

const show = {
    title: 'Agency Profile'
}

const action = [
    {
        label: 'Mark as Active',
        group: 1,
        url: '#',
    },
    {
        label: 'Delete',
        group: 1,
        url: '#',
    },
    {
        label: 'Download Sample Import File',
        group: 2,
        url: '#',
    },
    {
        label: 'Export Travelers',
        group: 2,
        url: '#',
    },
    {
        label: 'Import Travelers',
        group: 2,
        url: '#',
    },
]
const sort = [
    {
        label: 'SORT BY',
    },
    {
        label: 'Traveler Name',
        url: '#',
    },
    {
        label: 'nationality',
        url: '#',
    },
    {
        label: 'income',
        url: '#',
    },
]

export const AgencyProfilePageOptions: TableOptionsType = {
    pageLabel: 'agency_profile',

    show,
}
