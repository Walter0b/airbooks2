import { ReactNode } from "react";

export interface NavigationItem {
    name: string;
    href: string;
    count?: string;
    group: number;
    current: boolean;
    icon?: React.FC<{ className: string }>;
    className?: string;
    button: boolean;
}

export interface Column {
    key: string;
    label: string;
}

export interface CheckboxProps {
    isCheckedAll?: boolean;
    setCheckedAll?: (newValue: boolean | ((prev: boolean) => boolean)) => void;
    onCheckboxChange?: (index: number) => void;
}

export interface DataTableProps<T> {
    data: T[];
    columns: Column[];
    children?: ReactNode;
}

export interface TableHeaderProps extends CheckboxProps {
    columns: Column[];
}

export interface TableBodyProps<T> extends CheckboxProps {
    data: T[];
    columns: Column[];
    checkedItems?: Record<number, boolean>;
}

export interface DropdownOptions {
    label: string;
    value?: string;
    url?: string;
    onclick?: () => void;
    group?: number;
    hasMergeTitle?: boolean;

}
export interface NavComponentProps {
    item: NavigationItem;
    hoveredItems: { [key: string]: boolean };
    setHoveredItems: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

// Props for NavLinks component
export interface NavLinksProps extends NavComponentProps { }

// Props for Buttons component
export interface ButtonsProps extends NavComponentProps { }