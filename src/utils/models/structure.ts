import { ReactNode } from 'react'
import { DropdownItems } from './interface/table'

export interface LayoutProps {
    children: ReactNode
}

export interface Column {
    id: string
    label?: string
    type: string
    span: string
    className?: string
    options?: DropdownItems[]
    autoComplete?: string
    placeHolder?: string
}

export interface DynamicFormProps {
    column?: string
    color?: string
    files: Column[]
    cSpan?: string
}

export interface FetchData {
    [key: string]: string | null
}

export interface FetchDataOptions {
    endpoint: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: object
}

export const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
