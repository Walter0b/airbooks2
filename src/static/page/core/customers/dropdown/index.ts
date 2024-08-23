import {CompactListMainButtons, InputType, TableOptionsType} from '@/utils/types/page-type/table.type'
import {PenIcon} from "@assets/svg/pen";
import {PDFIcon} from "@assets/svg/pdf";
import {PrintIcon} from "@assets/svg/print";
import {MailIcon} from "@assets/svg/mail";
import {TemplateSelectionIcon} from "@assets/svg/templateSelection";
import {CompactListButtonLayout} from "@/utils/types/page-type/button.type";

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

const options = [
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

const transactions = [
    {
        label: 'Travel Item',
        url: '#',
        group: 1
    },
    {
        label: 'Invoice',
        url: '#',
        group: 1
    },
    {
        label: 'Credit Note',
        url: '#',
        group: 1
    },
    {
        label: 'Payment',
        url: '#',
        group: 1
    }
]

const actionTabs: CompactListButtonLayout[] = [
    {
        name: 'Snapshot',
        api_name: '',
        isEditable: true,
        isExportableToPDF: false,
        isPrintable: false,
        canSendEmail: true,
        selectTemplate: false
    },
    {
        name: 'Bookings',
        api_name: 'bookings',
        isEditable: true,
        isExportableToPDF: false,
        isPrintable: false,
        canSendEmail: true,
        selectTemplate: false
    },
]

const mainButtons : CompactListMainButtons[] = [
    {
        id: 'new_transaction',
        type: InputType.Dropdown,
        value: 'New Transaction',
        attrs: {
            hasDropdownIcon: true,
            className:'border-grey-450 flex h-full items-center rounded border-[0.8px] bg-red-500 px-3 hover:shadow-md mr-2',
            arrowClassName:'ml-2',
            dropdownClassName:'mr-12 mt-1 right-0 w-44',
            dropdownText:'text-center py-2',
            dropdownTitles:'right-0 mt-2 mr-11 font-medium',
            dropdownOptions: transactions
        }
    }
]

export const customerTableOptions: TableOptionsType = {
    pageLabel: 'travelers',
    options,
    sort,
    show,
    more,
    mainButtons,
    actionButtons: actionTabs
}
