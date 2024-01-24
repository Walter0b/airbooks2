import { ReactNode } from "react";

export interface LayoutProps {
    readonly children: ReactNode;
}
export interface FormField {
    id: string;
    label: string;
    type: string;
    span: number;
    options?: string[];
    autoComplete: string;
    placeHolder?: string;
}
export interface FetchData {
    [key: string]: string | null;
}

export interface FetchDataOptions {
    endpoint: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: object;
}

export const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export interface DataTableProps<T> {
    data: T[];
    columns: Column[];
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;

}
export interface Column {
    key: string;
    label: string;
}