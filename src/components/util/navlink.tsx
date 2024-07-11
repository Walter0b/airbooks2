import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/intext'

interface NavLinkProps {
    children?: React.ReactNode | ((isActive: boolean) => React.ReactNode)
    activeClassName?: string
    conditionalClassName?: string
    className?: string
    to: string
    redirection?: boolean
    id?: string
    onClick?: () => void
}

const NavLink: React.FC<NavLinkProps> = ({
    to,
    redirection = true,
    id,
    children,
    conditionalClassName = '',
    className,
    activeClassName = 'active',
    onClick,
}) => {
    const pathname = usePathname()

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(pathname.includes(to))
    }, [pathname, to]) // Ensure pathname is included in the dependency array

    const renderChildren = typeof children === 'function' ? children(isActive) : children

    const commonProps = {
        id,
        className: cn(className , isActive ? activeClassName : conditionalClassName,'nav_links'),
        onClick,
    }

    if (!redirection) {
        return <span {...commonProps}>{renderChildren}</span>
    }

    return <Link href={to} {...commonProps}>{renderChildren}</Link>
}

export default NavLink
