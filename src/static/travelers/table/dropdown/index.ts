import { TableOptionsType } from '@/utils/types/page-type/table.type'

const show = {
    title: 'Customer',

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
            label: 'Pending',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Posted',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Receipted',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Incomplete',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'void',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Void',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Refunds',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'My Bookings',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Unused Ticket',
            url: '#',
            hasMergeTitle: true,
        },
    ],
}

const action = [
    {
        label: 'Issue Invoice',
        group: 1,
        url: '#',
    },
    {
        label: 'Issue Sales Receipt',
        group: 1,
        url: '#',
    },
    {
        label: 'Email Traveler',
        group: 2,
        url: '#',
    },
    {
        label: 'Email Customer',
        group: 2,
        url: '#',
    },
    {
        label: 'Forward',
        group: 3,
        url: '#',
    },
    {
        label: 'Delete',
        group: 3,
        url: '#',
    },
    {
        label: 'Download Sample Import File',
        group: 4,
        url: '#',
    },
    {
        label: 'Export Travelers',
        group: 4,
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
