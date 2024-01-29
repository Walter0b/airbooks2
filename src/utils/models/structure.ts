import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
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
];

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
