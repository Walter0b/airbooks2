import {CompactListMainButtons, InputType, TableOptionsType} from '@/utils/types/page-type/table.type'
import {CompactListButtonLayout} from "@/utils/types/page-type/button.type";

const show = {
    title: 'Travel Items',

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
            label: 'Invoiced',
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
            label: 'Void',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Refund',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'My Booking',
            url: '#',
            hasMergeTitle: true,
        },
        {
            label: 'Unused Tickets',
            url: '#',
            hasMergeTitle: true,
        }
    ],
}

const options = [
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
        label: 'Export Travel Items',
        group: 4,
        url: '#',
    },
    {
        label: 'Import Travel Items',
        group: 4,
        url: '#',
    },
    {
        label: 'Custom Export',
        group: 5,
        url: '#',
    },
    {
        label: 'TMC Reporting',
        group: 6,
        url: '#',
    }
]
const sort = [
    {
        label: 'SORT BY',
    },
    {
        label: 'Issuing Date',
        url: '#',
    },
    {
        label: 'Item#',
        url: '#',
    },
    {
        label: 'Fare',
        url: '#',
    },
    {
        label: 'Traveler Name',
        url: '#',
    },
    {
        label: 'Travel Start',
        url: '#',
    },
    {
        label: 'Invoice#',
        url: '#',
    }
]

const more = [
    {
        label: 'Email Traveler',
        url: '#',
        group: 1,
    },
    {
        label: 'Email Customer',
        url: '#',
        group: 1,
    },
    {
        label: 'Open Sales Receipt',
        url: '#',
        group: 2,
    },
    {
        label: 'Associate Traveler Profile',
        url: '#',
        group: 3,
    },
    {
        label: 'Create Traveler Profile',
        url: '#',
        group: 3,
    },
    {
        label: 'Open Traveler Profile',
        url: '#',
        group: 3,
    },
    {
        label: 'Duplicate Item',
        url: '#',
        group: 4,
    },
    {
        label: 'Refund Item',
        url: '#',
        group: 4,
    },
    {
        label: 'Record ADM',
        url: '#',
        group: 4,
    },
    {
        label: 'Record ACM',
        url: '#',
        group: 4,
    },
    {
        label: 'Copy to Branch',
        url: '#',
        group: 5,
    },
    {
        label: 'Forward',
        url: '#',
        group: 5,
    },
    {
        label: 'Void',
        url: '#',
        group: 5,
    },
    {
        label: 'Delete',
        url: '#',
        group: 5,
    },
    {
        label: 'Transaction Logs',
        url: '#',
        group: 6,
    }
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
        isEditable: true,
        isExportableToPDF: false,
        isPrintable: false,
        canSendEmail: true,
        selectTemplate: false
    },
    {
        isEditable: true,
        isExportableToPDF: false,
        isPrintable: false,
        canSendEmail: true,
        selectTemplate: false
    },
]

const mainButtons : CompactListMainButtons[] = [
    {
        id: 'issue_invoice',
        type: InputType.Button,
        value: 'Issue Invoice',
        attrs: {
            className: 'border-grey-450 flex h-full items-center rounded border-[0.8px] bg-red-500 px-3 hover:shadow-md mr-2'
        }
    },
    {
        id: 'issue_sales_receipt',
        type: InputType.Button,
        value: 'Issue Sales Receipt',
        attrs: {
            className: 'border-grey-450 flex h-full items-center rounded border-[0.8px] bg-red-500 px-3 hover:shadow-md mr-2'
        }
    },
    // {
    //     id: 'new_transaction',
    //     type: InputType.Dropdown,
    //     value: 'New Transaction',
    //     attrs: {
    //         hasDropdownIcon: true,
    //         className:'border-grey-450 flex h-full items-center rounded border-[0.8px] bg-red-500 px-3 hover:shadow-md mr-2',
    //         arrowClassName:'ml-2',
    //         dropdownClassName:'mr-12 mt-1 right-0 w-44',
    //         dropdownText:'text-center py-2',
    //         dropdownTitles:'right-0 mt-2 mr-11 font-medium',
    //         dropdownOptions: transactions
    //     }
    // }
]

export const travelItemsTableOptions: TableOptionsType = {
    pageLabel: 'travel Items',
    sort,
    show,
    more,
    mainButtons,
    actionButtons: actionTabs,
}
