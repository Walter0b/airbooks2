/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
export interface Navigation {
    name: string
    href?: string
    count?: string
    default?: boolean
    group?: number
    current?: boolean
    options?: SubItem[]
    icon?: React.FC<{ className: string }>
    className?: string
    button?: boolean
}

interface SubItem {
    option: string
    href: string
    current?: boolean
}

export interface Column {
    key: string
    label: string
}

export interface CheckboxProps {
    hasCheckbox?: boolean
    isCheckedAll?: boolean
    setCheckedAll?: (newValue: boolean | ((prev: boolean) => boolean)) => void
}

export interface DataTableProps<T> {
    data: T[]
    columns: Column[]
    children?: ReactNode
}
// export const TableHeader: React.FC<TableHeaderProps> = ({ columns, isCheckedAll, handleCheckboxAllChange, hasCheckbox }: { Checkboxes?: ReactNode }) => {

export interface TableHeaderProps extends CheckboxProps {
    columns?: Column[]
    handleCheckboxAllChange?: () => void
}

export interface TableBodyProps<T> extends CheckboxProps {
    data?: T[]
    columns?: Column[]
    className?: string
    checkedItems?: Record<number, boolean>
    handleCheckboxChange?: (idex: number) => void
}



export interface DropdownItems {
    label: string
    value?: string
    url?: string
    onclick?: () => void
    group?: number
    hasMergeTitle?: boolean
}
export interface ShowTableOptions {
    title: string
    items: DropdownItems[]
}
export interface TableOptionsInterface {
    action: DropdownItems[],
    sort: DropdownItems[],
    show: ShowTableOptions,
}


export interface TableItemProps extends CheckboxProps {
    data: any[]
    columns: Column[]
    children: ReactNode
    onCheckboxChange?: (value: string) => void
}
export interface NavComponentProps {
    item: Navigation
}

// Props for NavLinks component
export interface NavLinksProps extends NavComponentProps { }

// Props for Buttons component
export interface ButtonsProps extends NavComponentProps { }
