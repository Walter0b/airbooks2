export interface NavigationItem {
    name: string;
    href: string;
    count?: string;
    group: number;
    current: boolean;
    icon?: React.FC<{ className: string }>;
    className?: string;
    button : boolean;
}

export interface DropdownOptions{
    name: string;
    url: string;
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