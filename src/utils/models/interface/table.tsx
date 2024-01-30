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
    hasCheckbox?: boolean;
    isCheckedAll?: boolean;
    setCheckedAll?: (newValue: boolean | ((prev: boolean) => boolean)) => void;
}

export interface DataTableProps<T> {
    data: T[];
    columns: Column[];
    children?: ReactNode;
}
// export const TableHeader: React.FC<TableHeaderProps> = ({ columns, isCheckedAll, handleCheckboxAllChange, hasCheckbox }: { Checkboxes?: ReactNode }) => {


export interface TableHeaderProps extends CheckboxProps {
    columns?: Column[];
    handleCheckboxAllChange?: () => void;
}

export interface TableBodyProps<T> extends CheckboxProps {
    data?: T[];
    columns?: Column[];
    className?: string;
    checkedItems?: Record<number, boolean>;
    handleCheckboxChange?: (idex: number) => void;
}

export interface DropdownOptions {
    label: string;
    value?: string;
    url?: string;
    onclick?: () => void;
    group?: number;
    hasMergeTitle?: boolean;

}

export interface TableItemProps extends CheckboxProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
    columns: Column[];
    children: ReactNode;
    onCheckboxChange?: (value: string) => void;
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