import { ReactNode } from 'react';
import { DropdownItemType } from './interface/table';

// Props for the layout component
export interface LayoutProps {
    children: ReactNode;
}

// Type for a single field in the dynamic form
export interface FormFieldType {
    [key: string]: string | DropdownItemType[];
}

// Type for a group of fields in the dynamic form
export interface FormTabType {
    label?: string;
    color?: string;
    fields: FormFieldType[];
    columnSpan?: string;
}


interface FormErrors {
    [key: string]: { value: FormFieldType; error: string } | undefined;
}
// Type for a group of fields in the dynamic form Props
export interface DynamicFormType {
    item: FormTabType
    values: FormTabType
    error: FormErrors[]
}
// Type for the dynamic form data
export interface FormDataProps {
    label?: string;
    tabs: FormTabType[];
}

// Type for fetching data
export interface FetchOptionsType {
    endpoint: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: object;
}

// Type for an item in the navigation
export interface SidebarItemType {
    name: string;
    href: string;
}

// SidebarItemType items
export const navigationItems: SidebarItemType[] = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
];
