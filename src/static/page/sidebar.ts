import { CaseIcon } from '@assets/svg/case'
import { CreditCardIcon } from '@assets/svg/creditCard'
import { FileIcon } from '@assets/svg/file'
import { ManualIcon } from '@assets/svg/manual'
import { MoneyIcon } from '@assets/svg/money'
import { ShoppingCartIcon } from '@assets/svg/shoppingCart'
import { TachometerIcon } from '@assets/svg/tachometer'
import { UserIcon } from '@assets/svg/user'
import { UsersIcon } from '@assets/svg/users'
import { SidebarItemType } from '@utils/models/interface/table'

export const coreNavigation: SidebarItemType[] = [
    {
        label: 'Dashboard',
        href: 'dashboard',
        isActive: false,
        group: 1,
        icon: TachometerIcon,
        isButton: false,
    },
    {
        label: 'Travelers',
        href: 'travelers',
        isActive: false,
        group: 1,
        icon: UserIcon,
        isButton: true,
    },
    {
        label: 'Travel Item',
        href: 'travel-items',
        isActive: false,
        group: 1,
        icon: CaseIcon,
        isButton: true,
    },
    {
        label: 'Customer',
        href: 'customer',
        isActive: false,
        group: 2,
        icon: UsersIcon,
        isButton: true,
    },
    {
        label: 'Estimates',
        href: 'estimates',
        isActive: false,
        group: 2,
        icon: ShoppingCartIcon,
        isButton: true,
    },
    {
        label: 'Invoice',
        href: 'invoice',
        isActive: false,
        group: 2,
        icon: ShoppingCartIcon,
        isButton: true,
    },
    {
        label: 'Credit Notes',
        href: 'credit_notes',
        isActive: false,
        group: 2,
        icon: ShoppingCartIcon,
        className: '-scale-x-100',
        isButton: true,
    },
    {
        label: 'Payments',
        href: 'payments',
        isActive: false,
        group: 3,
        icon: CreditCardIcon,
        isButton: false,
    },
    {
        label: 'Bill',
        href: 'bill',
        isActive: false,
        group: 4,
        icon: FileIcon,
        isButton: true,
    },
    {
        label: 'Expenses',
        href: 'expenses',
        isActive: false,
        group: 4,
        icon: MoneyIcon,
        isButton: true,
    },
    {
        label: 'Manual Journal',
        href: 'manual_journal',
        isActive: false,
        group: 5,
        icon: ManualIcon,
        isButton: false,
    },
]

export const reportNavigation: SidebarItemType[] = [
    {
        label: 'Business Overview',
        options: [
            {
                label: 'Profit & Loss',
                isActive: false,
                href: 'business_overview/profit_and_loss',
            },
            {
                label: 'Balance Sheet',
                href: 'business_overview/balance_sheet',
                isActive: false,
            },
            {
                label: 'Cashflow',
                href: 'business_overview/cashflow',
                isActive: false,
            },
        ],
    },
    {
        label: 'Sales',
        options: [
            {
                label: 'Consultant',
                href: 'sales/consultant',
                isActive: false,
            },
            {
                label: 'Customer',
                href: 'sales/customer',
                isActive: false,
            },
            {
                label: 'Product',
                href: 'sales/product',
                isActive: false,
            },
            {
                label: 'Supplier',
                href: 'sales/supplier',
                isActive: false,
            },
            {
                label: 'Airline',
                href: 'sales/airline',
                isActive: false,
            },
            {
                label: 'Sales Analysis',
                href: 'sales/sales_analysis',
                isActive: false,
            },
        ],
    },

    {
        label: 'Customers',
        options: [
            {
                label: 'Customer Balance',
                isActive: false,
                href: 'customers/customer_balance',
            },
            {
                label: 'Invoice Aging',
                href: 'customers/invoice_aging',
                isActive: false,
            },
        ],
    },
    {
        label: 'Suppliers',
        options: [
            {
                label: 'Supplier Balances',
                href: 'supplier/supplier_balances',
                isActive: false,
            },
            {
                label: 'Bill Aging',
                href: 'supplier/bill_aging',
                isActive: false,
            },
        ],
    },
    {
        label: 'Expenses',
        href: 'expenses',
        isActive: false,
    },
    {
        label: 'Taxes',
        href: 'taxes',
        isActive: false,
    },
    {
        label: 'Currency',
        href: 'currency',
        isActive: false,
    },
    {
        label: 'Banking',
        href: 'banking',
        isActive: false,
    },
    {
        label: 'Accountants',
        options: [
            {
                label: 'General Ledger',
                href: 'accountants/general_ledger',
                isActive: false,
            },
            {
                label: 'Trial Balance',
                href: 'accountants/trial_balance',
                isActive: false,
            },
            {
                label: 'Journey Report',
                href: 'accountants/journey_report',
                isActive: false,
            },
        ],
    },
    {
        label: 'Events',
        options: [
            {
                label: 'Travel Events',
                href: 'events/travel_events',
                isActive: false,
            },
            {
                label: 'Birthdays',
                href: 'events/birthdays',
                isActive: false,
            },
            {
                label: 'Passport Expires',
                href: 'events/passport_expires',
                isActive: false,
            },
        ],
    },
    {
        label: 'Activity',
        options: [
            {
                label: 'Active Log',
                href: 'active/active_log',
                isActive: false,
            },
            {
                label: 'Authorization log',
                href: 'active/authorization_log',
                isActive: false,
            },
            {
                label: 'Business Emails',
                href: 'active/business_emails',
                isActive: false,
            },
        ],
    },
]
