import { MiniSidebarType } from '@/utils/types/page-type/table.type'

export const UserColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
]
export const UserSettingsSidebar: MiniSidebarType = {
    title: 'Roles',
    sideBarItem: [
        {
            label: 'Users',
            href: '/',
        },
        {
            label: 'Charts Of Accounts',
            href: 'chart_of_accounts',
        },
    ],
}

import { TableOptionsType } from '@/utils/types/page-type/table.type'

export const UserTableOptions: TableOptionsType = {
    pageLabel: 'User Roles',
}

export const productionColumns = [
    { key: 'name', label: 'Name' },
    { key: 'type', label: 'Type' },
    { key: 'slug', label: 'Slug' },
]
