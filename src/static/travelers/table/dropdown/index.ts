import { TableOptionsInterface } from "@utils/models/interface/table";

const show = {
    title: 'Travelers',

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
            label: 'No Plan',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Scheduled',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'On Trip',
            url: '#',
            hasMergeTitle: true,
        },
    ],
};

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

export const tableOptions: TableOptionsInterface = {
    action,
    sort,
    show,
}
