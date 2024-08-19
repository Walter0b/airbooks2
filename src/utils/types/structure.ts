/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import { DropdownItemType, ShowTableOptionsType } from './page-type/table.type'
import {string} from "prop-types";

// Props for the layout component
export interface LayoutProps {
    children: ReactNode
}

export interface ValidationType {
    [k: string]: any
}

// Type for a single field in the dynamic form
export interface FormFieldType {
    id: string
    span: string
    label?: string
    type: 'text' | 'input' | 'tel' | 'date' | 'email' | 'space' | 'lookup' | 'textarea' | 'checkbox' | 'number'
    end?: boolean
    readOnly?: boolean
    autoComplete?: string
    placeHolder?: string
    required?: boolean
    validations?: (value: string, Fields?: FormFieldType[]) => any
    options?: DropdownItemType[]
}

// Type for a group of fields in the dynamic form
export interface FormTabType {
    label?: string
    required?: boolean
    fields?: FormFieldType[]
    columnSpan?: string
}
// interface useFormStateProps {
//     data: { [k: string]: { value: unknown; error: string; }; }
// }
export interface DynamicFormProps {
    items: FormTabType[]
    FieldsValue: { [k: string]: { value: unknown; error: string } }
}

export interface useSingleStateType {
    setValue: (value: any) => void
    value: any
}

export interface FormErrors {
    [key: string]: { value: FormFieldType; error: string } | undefined
}
// Type for a group of fields in the dynamic form Props

export type FieldComponent = (
    field: FormFieldType,
    values: FormFieldType
) => JSX.Element

type FieldsValue = {
    [key: string]: { value: unknown; error: string }
}
export type BooleanUseState = {
    (value: boolean | ((prev: boolean) => boolean)): void
}
export interface FieldComponents {
    [key: string]: FieldComponent
}

// Type for the dynamic form data

export interface FormDataProps {
    [key: string]: IndividualFormDataProp[]
}
export interface IndividualFormDataProp {
    label?: string
    tabs: FormTabType[]
}

export interface Props {
    field: FormFieldType
    FieldsValue: FieldsValue
}
export interface TabsProps {
    formData: IndividualFormDataProp[]
    setFormData: (newValue: FormTabType[]) => void
}
// Type for fetching data
export interface FetchOptionsType {
    endpoint: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: object
}

// Type for an item in the navigation
export interface SidebarItemType {
    name: string
    href: string
    id?: string
}

// SidebarItemType items
export const navigationItems: SidebarItemType[] = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export interface ButtonInterface {
    children?: ReactNode
    buttonClassName?: string
    arrowClassName?: string
    hasDropdownIcon?: boolean
    onClick?: (item?: ShowTableOptionsType) => void
    className?: string
    dropdownOptions?: DropdownItemType[]
    setSelectedOption?: (title: string) => void
    dropdownClassName?: string
    dropdownText?: string
    dropdownTitles?: string
    dropdownSize?: number | string
}