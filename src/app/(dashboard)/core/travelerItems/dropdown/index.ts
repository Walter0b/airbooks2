import { TableOptionsType } from '@/utils/types/page-type/table.type'

const show = {
    title: 'Travelers',

    items: [
        {
            label: 'Show',
        },
        {
            label: 'All',
            title: 'All Travelers',
            url: '?filter=all',
            hasMergeTitle: true,
        },
        {
            label: 'No Plan',
            title: 'No Plan Travelers',
            url: '?filter=no_plan',
            hasMergeTitle: true,
        },
        {
            label: 'Scheduled',
            title: 'Scheduled Travelers',
            url: '?filter=scheduled',
            hasMergeTitle: true,
        },
        {
            label: 'On Trip',
            title: 'On Trip Travelers',
            url: '?filter=on_trip',
            hasMergeTitle: true,
        },

    ],

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
const more = [
    {
        label: 'Email Traveler',
        url: '#',
        group: 1,
    },
    {
        label: 'Duplicate Profile',
        url: '#',
        group: 2,
    },
    {
        label: 'Mark as Inactive',
        url: '#',
        group: 3,
    },
    {
        label: 'Delete',
        url: '#',
        group: 3,
    },
]
export const travelerTableOptions: TableOptionsType = {
    pageLabel: 'travelers',
    action,
    sort,
    show,
    more,
}
