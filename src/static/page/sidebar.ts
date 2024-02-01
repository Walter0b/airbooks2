import { CaseIcon } from '@assets/svg/case'
// import { CircleIcon } from "@assets/svg/circle";
import { CreditCardIcon } from '@assets/svg/creditCard'
import { FileIcon } from '@assets/svg/file'
import { ManualIcon } from '@assets/svg/manual'
import { MoneyIcon } from '@assets/svg/money'
import { ShoppingCartIcon } from '@assets/svg/shoppingCart'
import { TachometerIcon } from '@assets/svg/tachometer'
import { UserIcon } from '@assets/svg/user'
import { UsersIcon } from '@assets/svg/users'

export const coreNavigation = [
    {
        name: 'Dashboard',
        href: 'dashboard',
        current: false,
        group: 1,
        icon: TachometerIcon,
        button: false,
    },

    {
        name: 'Travelers',
        href: 'travelers',
        current: false,
        group: 1,
        icon: UserIcon,
        button: true,
    },
    {
        name: 'Travel Item',
        href: 'travel-items',
        current: false,
        group: 1,
        icon: CaseIcon,
        button: true,
    },
    {
        name: 'Customer',
        href: 'customer',
        current: false,
        group: 2,
        icon: UsersIcon,
        button: true,
    },
    {
        name: 'Estimates',
        href: 'estimates',
        current: false,
        group: 2,
        icon: ShoppingCartIcon,
        button: true,
    },
    {
        name: 'Invoice',
        href: 'invoice',
        current: false,
        group: 2,
        icon: ShoppingCartIcon,
        button: true,
    },
    {
        name: 'Credit Notes',
        href: 'credit_notes',
        current: false,
        group: 2,
        icon: ShoppingCartIcon,
        className: '-scale-x-100',
        button: true,
    },
    {
        name: 'Payments',
        href: 'payments',
        current: false,
        group: 3,
        icon: CreditCardIcon,
        button: false,
    },
    {
        name: 'Bill',
        href: 'bill',
        current: false,
        group: 4,
        icon: FileIcon,
        button: true,
    },
    {
        name: 'Expenses',
        href: 'expenses',
        current: false,
        group: 4,
        icon: MoneyIcon,
        button: true,
    },
    {
        name: 'Manual Journal',
        href: 'manual_journal',
        current: false,
        group: 5,
        icon: ManualIcon,
        button: false,
    },
]

export const reportNavigation = [
    {
        name: 'Business Overview',
        options: [
            {
                option: 'Profit & Loss',
                href: '/',
            },
            {
                option: 'Balance Sheet',
                href: '/',
            },
            {
                option: 'Cashflow',
                href: '/',
            },
        ],
    },
    {
        name: 'Sales',
        options: [
            {
                option: 'Consultant',
                href: '',
            },
            {
                option: 'Customer',
                href: '',
            },
            {
                option: 'Product',
                href: '',
            },
            {
                option: 'Supplier',
                href: '',
            },
            {
                option: 'Airline',
                href: '',
            },
            {
                option: 'Sales Analysis',
                href: '',
            },
        ],
    },

    {
        name: 'Customers',
        options: [
            {
                option: 'Customer Balance',
                href: '',
            },
            {
                option: 'Invoice Aging',
                href: '',
            },
        ],
    },
    {
        name: 'Suppliers',
        options: [
            {
                option: 'Supplier Balances',
                href: '',
            },
            {
                option: 'Bill Aging',
                href: '',
            },
        ],
    },
    {
        name: 'Expenses',
        href: 'expenses',
        current: false,
    },
    {
        name: 'Taxes',
        href: 'taxes',
        current: false,
    },
    {
        name: 'Currency',
        href: 'currency',
        current: false,
    },
    {
        name: 'Banking',
        href: 'banking',
        current: false,
    },
    {
        name: 'Accountants',
        options: [
            {
                option: 'General Ledger',
                href: '',
            },
            {
                option: 'Trial Balance',
                href: '',
            },
            {
                option: 'Journey Report',
                href: '',
            },

        ],
    },
    {
        name: 'Events',
        options: [
            {
                option: 'Travel Events',
                href: '',
            },
            {
                option: 'Birthdays',
                href: '',
            },
            {
                option: 'Passport Expires',
                href: '',
            },
        ],
    },
    {
        name: 'Activity',
        options: [
            {
                option: 'Active Log',
                href: '',
            },
            {
                option: 'Authorization log',
                href: '',
            },
            {
                option: 'Business Emails',
                href: '',
            },
        ],
    },
]
