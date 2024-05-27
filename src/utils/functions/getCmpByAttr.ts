/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
    ReactNode,
    ReactElement,
    cloneElement,
    isValidElement,
} from 'react'

interface GetCmpByAttrProps {
    children: ReactNode
    attr?: string
    value: any
    props?: Record<string, any>
}

export function getCmpByAttr({
    children,
    attr = 'data-slot',
    value,
    props,
}: GetCmpByAttrProps): ReactNode {
    const cmps = React.Children.toArray(children)

    const cmp = cmps.find(
        (cmp): cmp is ReactElement =>
            isValidElement(cmp) && cmp.props[attr] === value
    )

    if (cmp) {
        // console.log(`Found component with attr ${attr} and value ${value}`)
        return cloneElement(cmp, props)
    }

    // console.warn(`No component found with attr ${attr} and value ${value}`)
    return null
}
