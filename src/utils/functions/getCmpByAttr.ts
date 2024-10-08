import React, {
    ReactElement,
    ReactNode,
    cloneElement,
    isValidElement,
    useMemo,
} from 'react'

interface GetCmpByAttrProps {
    children: ReactNode
    attr?: string
    value?: string
     /* eslint-disable-next-line "@typescript-eslint/no-explicit-any" */
    props?: Record<string, any>
    debug?: boolean
}

export const getCmpByAttr = ({
    children,
    attr = 'data-slot',
    value = '',
    props = {},
    debug = false,
}: GetCmpByAttrProps): ReactNode | null => {
        /* eslint-disable-next-line "react-hooks/rules-of-hooks" */
    return useMemo(() => {
        const componentsArray: ReactNode[] = React.Children.toArray(children)

        const matchedComponent = componentsArray.find(
            (cmp): cmp is ReactElement =>
                isValidElement(cmp) && cmp.props[attr] === value
        )

        if (matchedComponent) {
            if (debug) {
                console.log(
                    'Found component with matching props:',
                    matchedComponent
                )
            }

            return cloneElement(matchedComponent, props)
        }

        if (debug) {
            console.warn(
                `No component found with attr ${attr} and value ${value}`
            )
        }
        return null
    }, [children, attr, value, props, debug])
}
