import { CaseIcon } from '@assets/svg/case'
import { CreditCardIcon } from '@assets/svg/creditCard'
import { FileIcon } from '@assets/svg/file'
import { ManualIcon } from '@assets/svg/manual'
import { MoneyIcon } from '@assets/svg/money'
import { ShoppingCartIcon } from '@assets/svg/shoppingCart'
import { TachometerIcon } from '@assets/svg/tachometer'
import { UserIcon } from '@assets/svg/user'
import { UsersIcon } from '@assets/svg/users'
import { Navigation } from '@utils/models/interface/table'

export const coreNavigation : Navigation[] = [
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

export const reportNavigation: Navigation[] = [
    {
        name: 'Business Overview',
        options: [
            {
                option: 'Profit & Loss',
                current: false,
                href: 'business_overview/profit_and_loss',
            },
            {
                option: 'Balance Sheet',
                href: 'business_overview/balance_sheet',
                current: false,
            },
            {
                option: 'Cashflow',
                href: 'business_overview/cashflow',
                current: false,
            },
        ],
    },
    {
        name: 'Sales',
        options: [
            {
                option: 'Consultant',
                href: 'sales/consultant',
                current: false,
            },
            {
                option: 'Customer',
                href: 'sales/customer',
                current: false,
            },
            {
                option: 'Product',
                href: 'sales/product',
                current: false,
            },
            {
                option: 'Supplier',
                href: 'sales/supplier',
                current: false,
            },
            {
                option: 'Airline',
                href: 'sales/airline',
                current: false,
            },
            {
                option: 'Sales Analysis',
                href: 'sales/sales_analysis',
                current: false,
            },
        ],
    },

    {
        name: 'Customers',
        options: [
            {
                option: 'Customer Balance',
                current: false,
                href: 'customers/customer_balance',
            },
            {
                option: 'Invoice Aging',
                href: 'customers/invoice_aging',
                current: false,
            },
        ],
    },
    {
        name: 'Suppliers',
        options: [
            {
                option: 'Supplier Balances',
                href: 'supplier/supplier_balances',
                current: false,
            },
            {
                option: 'Bill Aging',
                href: 'supplier/bill_aging',
                current: false,
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
                href: 'accountants/general_ledger',
                current: false,
            },
            {
                option: 'Trial Balance',
                href: 'accountants/trial_balance',
                current: false,
            },
            {
                option: 'Journey Report',
                href: 'accountants/journey_report',
                current: false,
            },
        ],
    },
    {
        name: 'Events',
        options: [
            {
                option: 'Travel Events',
                href: 'events/travel_events',
                current: false,
            },
            {
                option: 'Birthdays',
                href: 'events/birthdays',
                current: false,
            },
            {
                option: 'Passport Expires',
                href: 'events/passport_expires',
                current: false,
            },
        ],
    },
    {
        name: 'Activity',
        options: [
            {
                option: 'Active Log',
                href: 'active/active_log',
                current: false,
            },
            {
                option: 'Authorization log',
                href: 'active/authorization_log',
                current: false,
            },
            {
                option: 'Business Emails',
                href: 'active/business_emails',
                current: false,
            },
        ],
    },
]
