import { ReactNode } from 'react'
import { FormDataProps, useSingleStateType } from '../structure'

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
    items: DropdownItemType[]
}

// Interface for table options
export interface TableOptionsType {
    pageLabel: string
    options: DropdownItemType[]
    more: DropdownItemType[]
    sort: DropdownItemType[]
    show: ShowTableOptionsType
}
export interface TableDataType {
    id: number
    [key: string]: string | number
}

export interface ReduxModalType {
    modalId: string
    isOpen: boolean
    data: ResponseDataType
    inputFields: FormDataProps
    validation: any
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
    columns: TableColumnType[]
    children: ReactNode
    onClickHandler?: (value: string) => void
    onCheckboxChange?: (value: string) => void
}

export interface GenericTablePageType {
    fetchQuery: any
    columns: TableColumnType[]
    param?: { [key: string]: string | string[] | undefined }
    // headerSlot: ReactNode,
    // bodySlot: ReactNode,
    tableOptions: TableOptionsType
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
export interface NavLinksType extends BaseNavComponentProps {}

// Interface for buttons
export interface ButtonsType extends BaseNavComponentProps {}
