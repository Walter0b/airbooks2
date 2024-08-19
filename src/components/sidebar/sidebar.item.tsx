import React, { useContext } from 'react'
import { NavigationItem } from './sidebar.item.nav'
import { SidebarItemType } from '@/utils/types/page-type/table.type'
import { useDispatch } from 'react-redux'
import { openModal } from '@/states/reducer/modalSlice'
import { ModalContext } from '@/states/context/ModalContext'
import { cn } from '@/utils/functions/classNames'

export default function SideBarItems({
    navigation,
    isCompact,
}: Readonly<{
    navigation: SidebarItemType[]
    isCompact: boolean
}>) {
    const { setPageLabel } = useContext(ModalContext)

    const dispatch = useDispatch()
    const handleOpenModal = (pageLabel: string) => {
        if (pageLabel) {
            setPageLabel?.(pageLabel)
            dispatch(openModal())
        }
    }

    return (
        <ul
            className={cn(
                ' h-fit overflow-hidden',
                isCompact && 'peer group/compact w-12'
            )}
        >
            {navigation.map((item: SidebarItemType, index: number) => (
                <React.Fragment key={item.label}>
                    {index > 0 &&
                        navigation[index - 1].group !== item.group && (
                            <hr className=" border-gray-300" />
                        )}
                    <li
                        className={cn(
                            'flex items-center justify-between',
                            isCompact && 'group/visited hover:w-44'
                        )}
                    >
                        <NavigationItem
                            item={item}
                            isOpen={isCompact}
                            handleOpenModal={handleOpenModal}
                        />
                    </li>
                </React.Fragment>
            ))}
        </ul>
    )
}
