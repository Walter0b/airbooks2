import {DetailComponentInputs, InputType, TableOptionsType} from '@/utils/types/page-type/table.type'
import {MailIcon} from "@/assets/svg/mail";
import {PrintIcon} from "@/assets/svg/print";
import {PenIcon} from "@/assets/svg/pen";

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

const detailInputs: DetailComponentInputs[] = [
    {
        id: 'edit_button',
        type: InputType.Button,
        icon: PenIcon,
        attrs: {
            className: 'border-grey-450 flex h-full items-center rounded border-[0.8px] bg-neutral-100 px-3 hover:shadow-md',
        },
        group: 1
    },
    {
        id: 'newTravelItem_button',
        type: InputType.Button,
        value: 'New Travel Item',
        attrs: {
            className: 'border-grey-450 bg-red-650 flex h-full items-center rounded border-[0.8px] bg-neutral-100 px-3 hover:shadow-md',
        },
        group: 2
    },
    {
        id: 'dropdown',
        type: InputType.Dropdown,
        value: 'More',
        attrs: {
            hasDropdownIcon: true,
            className: 'border-grey-450 flex h-full items-center rounded border-[0.8px] bg-neutral-100 px-3 hover:shadow-md ',
            arrowClassName: 'ml-2',
            dropdownClassName: 'mr-12 mt-1 right-0 w-44',
            dropdownText: 'text-center py-2',
            dropdownTitles: 'right-0 mt-2 mr-11 font-medium',
            dropdownOptions: more
        },
        group: 3
    }
]
export const tableOptions: TableOptionsType = {
    pageLabel: 'travelers',
    action,
    sort,
    show,
    more,
    detailInputs
}
