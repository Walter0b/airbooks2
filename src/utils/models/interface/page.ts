import { ReactNode } from 'react'

export interface PageProps {
    children?: ReactNode
}
export interface BodyProps extends PageProps {
    openCompactList?: string
    setOpenCompactList?: (
        newValue: boolean | ((prev: boolean) => boolean)
    ) => void
}
