import { TableOptionsType } from '@/utils/models/interface/table'

const show = {
    title: 'Customers',

    items: [
        {
            label: 'Show',
        },
        {
            label: 'All',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Inactive',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Corporate',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Sub-Agencies',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Individual',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Other Categories',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Outstanding',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Above Credit Limit',
            url: '#',
            hasMergeTitle: true,
        },
    ],
}

const action = [
    {
        label: 'Email Customer',
        group: 1,
        url: '#',
    },
    {
        label: 'Sync Profile',
        group: 2,
        url: '#',
    },
    {
        label: 'Download Sample Import File',
        group: 3,
        url: '#',
    },
    {
        label: 'Export Travelers',
        group: 3,
        url: '#',
    },
    {
        label: 'Import Travelers',
        group: 3,
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
export const customerTableOptions: TableOptionsType = {
    pageLabel: 'travelers',
    action,
    sort,
    show,
    more,
}
