import { CaseIcon } from '@/assets/svg/case'
import { CreditCardIcon } from '@/assets/svg/creditCard'
import { FileIcon } from '@/assets/svg/file'
import { ManualIcon } from '@/assets/svg/manual'
import { MoneyIcon } from '@/assets/svg/money'
import { ShoppingCartIcon } from '@/assets/svg/shoppingCart'
import { TachometerIcon } from '@/assets/svg/tachometer'
import { UserIcon } from '@/assets/svg/user'
import { UsersIcon } from '@/assets/svg/users'
import { SidebarItemType } from '@/utils/types/page-type/table.type'

export const coreNavigation: SidebarItemType[] = [
    {
        label: 'Dashboard',
        href: '/core',
        group: 1,
        icon: TachometerIcon,
        isButton: false,
    },
    {
        label: 'Travelers',
        href: '/core/travelers',
        group: 1,
        icon: UserIcon,
        isButton: true,
    },
    {
        label: 'Travel Item',
        href: '/core/travel-items',
        group: 1,
        icon: CaseIcon,
        isButton: true,
    },
    {
        label: 'Customer',
        href: '/core/customer',
        group: 2,
        icon: UsersIcon,
        isButton: true,
    },
    {
        label: 'Estimates',
        href: '/core/estimates',
        group: 2,
        icon: ShoppingCartIcon,
        isButton: true,
    },
    {
        label: 'Invoice',
        href: '/core/invoice',
        group: 2,
        icon: ShoppingCartIcon,
        isButton: true,
    },
    {
        label: 'Credit Notes',
        href: '/core/credit_notes',
        group: 2,
        icon: ShoppingCartIcon,
        className: '-scale-x-100',
        isButton: true,
    },
    {
        label: 'Payments',
        href: '/core/payments',
        group: 3,
        icon: CreditCardIcon,
        isButton: false,
    },
    {
        label: 'Bill',
        href: '/core/bill',
        group: 4,
        icon: FileIcon,
        isButton: true,
    },
    {
        label: 'Expenses',
        href: '/core/expenses',
        group: 4,
        icon: MoneyIcon,
        isButton: true,
    },
    {
        label: 'Manual Journal',
        href: '/core/manual_journal',
        group: 5,
        icon: ManualIcon,
        isButton: false,
    },
]

export const reportNavigation: SidebarItemType[] = [
    {
        label: 'Business Overview',
        href: 'business_overview',
        options: [
            {
                label: 'Profit & Loss',
                href: 'business_overview/profit_and_loss',
            },
            {
                label: 'Balance Sheet',
                href: 'business_overview/balance_sheet',
            },
            {
                label: 'Cashflow',
                href: 'business_overview/cashflow',
            },
        ],
    },
    {
        label: 'Sales',
        href: 'sales',
        options: [
            {
                label: 'Consultant',
                href: 'sales/consultant',
            },
            {
                label: 'Customer',
                href: 'sales/customer',
            },
            {
                label: 'Product',
                href: 'sales/product',
            },
            {
                label: 'Supplier',
                href: 'sales/supplier',
            },
            {
                label: 'Airline',
                href: 'sales/airline',
            },
            {
                label: 'Sales Analysis',
                href: 'sales/sales_analysis',
            },
        ],
    },

    {
        label: 'Customers',
        href: 'customers',
        options: [
            {
                label: 'Customer Balance',
                href: 'customers/customer_balance',
            },
            {
                label: 'Invoice Aging',
                href: 'customers/invoice_aging',
            },
        ],
    },
    {
        label: 'Suppliers',
        href: 'suppliers',
        options: [
            {
                label: 'Supplier Balances',
                href: 'supplier/supplier_balances',
            },
            {
                label: 'Bill Aging',
                href: 'supplier/bill_aging',
            },
        ],
    },
    {
        label: 'Expenses',
        href: 'expenses',
    },
    {
        label: 'Taxes',
        href: 'taxes',
    },
    {
        label: 'Currency',
        href: 'currency',
    },
    {
        label: 'Banking',
        href: 'banking',
    },
    {
        label: 'Accountants',
        href: 'accountants',
        options: [
            {
                label: 'General Ledger',
                href: 'accountants/general_ledger',
            },
            {
                label: 'Trial Balance',
                href: 'accountants/trial_balance',
            },
            {
                label: 'Journey Report',
                href: 'accountants/journey_report',
            },
        ],
    },
    {
        label: 'Events',
        href: 'events',
        options: [
            {
                label: 'Travel Events',
                href: 'events/travel_events',
            },
            {
                label: 'Birthdays',
                href: 'events/birthdays',
            },
            {
                label: 'Passport Expires',
                href: 'events/passport_expires',
            },
        ],
    },
    {
        label: 'Activity',
        href: 'activity',
        options: [
            {
                label: 'Active Log',
                href: 'active/active_log',
            },
            {
                label: 'Authorization log',
                href: 'active/authorization_log',
            },
            {
                label: 'Business Emails',
                href: 'active/business_emails',
            },
        ],
    },
]
export const settingsNavigation: SidebarItemType[] = [
    {
        label: 'Agency Profile',
        href: 'agency_profile',
    },
    {
        label: 'Users',
        href: 'users',
    },
    {
        label: 'Charts Of Accounts',
        href: 'chart_of_accounts',
    },
    {
        label: 'Products',
        href: 'products',
    },
    {
        label: 'Currencies',
        href: 'currencies',
    },
    {
        label: 'Business Rules',
        href: 'business_rules',
    },
    {
        label: 'Preferences',
        href: 'preferences',
    },
    {
        label: 'Mail Templates',
        href: 'mail_templates',
    },
    {
        label: 'Integrations',
        href: 'integrations',
    },
]
