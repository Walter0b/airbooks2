import { ReactNode } from 'react'
import { useSingleStateType } from '../structure'
import { CompactListButtonLayout } from '@/utils/types/page-type/button.type'

// Interface for Sidebar item
export interface SidebarItemType {
    label: string
    href?: string
    count?: string
    isDefault?: boolean
    group?: number
    options?: SubItemType[]
    icon?: React.FC<{ className: string }>
    className?: string
    matchMode?: "includes" | "startsWith" | "exact" 
    isButton?: boolean
}

export interface NavButtonsProps {
    item: SidebarItemType
    handleOpenModal: (key: string) => void
}

// Interface for sub navigation item
interface SubItemType {
    label: string
    href: string
}

// Interface for table column
export interface TableColumnType {
    key: string
    label: string
    sortable?: boolean | undefined
    sortDirection?: 'asc' | 'desc' | undefined
}

// Interface for checkbox
export interface CheckboxType {
    hasCheckbox?: boolean
    isCheckedAll?: boolean
    setCheckedAll?: (newValue: boolean | ((prev: boolean) => boolean)) => void
}

// Interface for item details component
export interface ItemDetailsType {
    children: ReactNode
}

// Interface for data table
export interface DataTableType {
    data: ResponseDataType
    columns: TableColumnType[]
    children?: ReactNode
}

// Interface for table header
export interface TableHeaderType extends CheckboxType {
    columns?: TableColumnType[]
    handleCheckboxAllChange?: () => void
    onSortChange?: (key: string) => void
}

// Interface for table body
export interface TableBodyType extends CheckboxType {
    tableData?: ResponseDataType
    columns?: TableColumnType[]
    className?: string
    checkedItems?: Record<number, boolean>
    handleCheckboxChange?: (index: number) => void
    onClickHandler?: () => void
}

// Interface for dropdown items

export interface DropdownItemType {
    id?: string
    label?: string
    value?: string
    url?: string
    onClick?: () => void
    group?: number
    hasMergeTitle?: boolean
}

// Interface for show table options
export interface ShowTableOptionsType {
    title: string
    items?: DropdownItemType[]
}

// Interface for table options
export interface TableOptionsType {
    pageLabel: string
    options?: DropdownItemType[]
    more?: DropdownItemType[]
    sort?: DropdownItemType[]
    refresh?: () => void
    show?: ShowTableOptionsType
    action?: DropdownItemType[]
    mainButtons?: CompactListMainButtons[]
    actionButtons?: CompactListButtonLayout[]
}

export interface CompactListMainButtons {
    id: string
    type: InputType
    value?: string
    attrs: {
        [key: string]: string | boolean | DropdownItemType[]
    }
}

export enum InputType {
    Button = 'button',
    Dropdown = 'dropdown',
}

export interface TableDataType {
    id: number
    [key: string]: string | number
}

export interface CatchData {
    data: ResponseDataType
}
interface TableMetaData {
    total_count: number
    filter_count: number
}
export interface ResponseDataType {
    data: TableDataType[]
    meta: TableMetaData
    pageSize: number
    currentPage: number
    totalPages: number
}
// Interface for table item
export interface TableItemType extends CheckboxType {
    tableData?: ResponseDataType
    isFetching: boolean
    columns: TableColumnType[]
    children?: ReactNode
    onClickHandler?: (value: string) => void
    onCheckboxChange?: (value: string) => void
}

export interface fieldsToDisplayType {
    rightTab_Options?: string[]
    headerContent_Position: string
    leftGroup: Record<string, string[]>[]
    rightGroup: Record<string, string[]>[]
}

export interface GenericTablePageType {
    /* eslint-disable-next-line "@typescript-eslint/no-explicit-any" */
    fetchQuery: any
    columns: TableColumnType[]
    SideBar?: MiniSidebarType
    param?: { [key: string]: string | string[] | undefined }
    // headerSlot: ReactNode,
    // bodySlot: ReactNode,
    tableOptions: TableOptionsType
    compactListLayout?: fieldsToDisplayType
}

export interface MiniSidebarType {
    /* eslint-disable-next-line "@typescript-eslint/no-explicit-any" */
    [x: string]: any
    title: string
    sideBarItem: SubItemType[]
}
export interface PageConfigType {
    [key: string]: GenericTablePageType
}

// Interface for navigation component
export interface NavComponentProps extends BaseNavComponentProps {
    handleOpenModal?: (key: string) => void
}
interface BaseNavComponentProps {
    item: SidebarItemType
    isOpen?: boolean
}

// Interface for pagination
export interface PaginationPropsType {
    tableData?: ResponseDataType
    className?: string
    onPageChange: useSingleStateType
    onItemNumberChange: useSingleStateType
}

// Interface for nav links
export interface NavLinksType extends BaseNavComponentProps { }

// Interface for buttons
export interface ButtonsType extends BaseNavComponentProps { }
