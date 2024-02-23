import { ReactNode } from 'react';

// Interface for Sidebar item
export interface SidebarItemType {
    label: string;
    href?: string;
    count?: string;
    isDefault?: boolean;
    group?: number;
    isActive?: boolean;
    options?: SubItemType[];
    icon?: React.FC<{ className: string }>;
    className?: string;
    isButton?: boolean;
}

// Interface for sub navigation item
interface SubItemType {
    label: string;
    href: string;
    isActive?: boolean;
}

// Interface for table column
export interface TableColumnType {
    key: string;
    label: string;
}

// Interface for checkbox 
export interface CheckboxType {
    hasCheckbox?: boolean;
    isCheckedAll: boolean;
    setCheckedAll?: (newValue: boolean | ((prev: boolean) => boolean)) => void;
}

// Interface for item details component 
export interface ItemDetailsType {
    children: ReactNode;
}

// Interface for data table 
export interface DataTableType {
    data: TableDataType;
    columns: TableColumnType[];
    children?: ReactNode;
}

// Interface for table header 
export interface TableHeaderType extends CheckboxType {
    columns?: TableColumnType[];
    handleCheckboxAllChange: () => void;
}

// Interface for table body 
export interface TableBodyType extends CheckboxType {
    data?: TableDataType[];
    columns?: TableColumnType[];
    className?: string;
    checkedItems?: Record<number, boolean>;
    handleCheckboxChange?: (index: number) => void;
    onClickHandler?: () => void;
}

// Interface for dropdown items
export interface DropdownItemType {
    label: string;
    value?: string;
    url?: string;
    onClick?: () => void;
    group?: number;
    hasMergeTitle?: boolean;
}

// Interface for show table options
export interface ShowTableOptionsType {
    title: string;
    items: DropdownItemType[];
}

// Interface for table options
export interface TableOptionsType {
    action: DropdownItemType[];
    more: DropdownItemType[];
    sort: DropdownItemType[];
    show: ShowTableOptionsType;
}
export interface TableDataType {
    id: number;
    [key: string]: string | number;
}
// Interface for table item 
export interface TableItemType extends CheckboxType {
    data: TableDataType[]
    columns: TableColumnType[];
    children: ReactNode;
    onClickHandler?: (value: string) => void;
    onCheckboxChange?: (value: string) => void;
}

// Interface for navigation component 
export interface NavComponentType {
    item: SidebarItemType;
    isOpen?: boolean;
}

// Interface for pagination 
export interface PaginationType {
    currentPage: number;
    totalPages: number;
    className?: string;
    onPageChange: (page: number) => void;
}

// Interface for nav links 
export interface NavLinksType extends NavComponentType { }

// Interface for buttons 
export interface ButtonsType extends NavComponentType { }
