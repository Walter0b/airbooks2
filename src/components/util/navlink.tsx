import React from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
    children?: React.ReactNode | ((isActive: boolean) => React.ReactNode)
    activeClassName?: string
    conditionalClassName?: string
    className?: string
    to: string
    id?: string
}

const NavLink: React.FC<NavLinkProps> = ({
    to,
    id,
    children,
    conditionalClassName = '',
    className,
    activeClassName = 'active',
}) => {
    const pathname = usePathname()
    const isActive = pathname.includes(to)

    // console.log('🚀 ~ pathname:', pathname, to, isActive)

    const renderChildren = () => {
        if (typeof children === 'function') {
            return children(isActive)
        } else {
            return children
        }
    }

    return (
        <Link
            href={to}
            id={id}
            className={`${className || ''} ${isActive ? activeClassName : conditionalClassName}`}
        >
            {renderChildren()}
        </Link>
    )
}

export default NavLink
