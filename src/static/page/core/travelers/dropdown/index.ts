import {
    CompactListMainButtons,
    InputType,
    TableOptionsType,
} from '@/utils/types/page-type/table.type'
import { MailIcon } from '@/assets/svg/mail'
import { PrintIcon } from '@/assets/svg/print'
import { PenIcon } from '@/assets/svg/pen'
import { CompactListButtonLayout } from '@/utils/types/page-type/button.type'

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
}

const options = [
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

const actionTabs: CompactListButtonLayout[] = [
    {
        name: 'Snapshot',
        api_name: '',
        isEditable: true,
        isExportableToPDF: true,
        isPrintable: true,
        canSendEmail: true,
        selectTemplate: true,
    },
    {
        name: 'Bookings',
        api_name: 'bookings',
        isEditable: true,
        isExportableToPDF: false,
        isPrintable: false,
        canSendEmail: false,
        selectTemplate: false,
    },
]

const mainButtons: CompactListMainButtons[] = [
    {
        id: 'new_travel_item',
        type: InputType.Button,
        value: 'New Travel Item',
        attrs: {
            className:
                'border-grey-450 flex h-full items-center rounded border-[0.8px] bg-red-500 px-3 hover:shadow-md mr-2',
        },
    },
]

export const tableOptions: TableOptionsType = {
    pageLabel: 'travelers',
    options,
    sort,
    show,
    more,
    mainButtons,
    actionButtons: actionTabs,
}
