import React, { useContext } from 'react'
import { NavigationItem } from './sidebar.item.nav'
import { SidebarItemType } from '@/utils/models/interface/table'
import { useDispatch } from 'react-redux'
import { openModal } from '@/states/reducer/modalSlice'
import { ModalContext } from '@/hooks/context/ModalContext'
import { cn } from '@/utils/intext'

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
            // console.log(pageLabel)
            setPageLabel?.(pageLabel)
            dispatch(openModal())
        }
    }

    return (
        <ul
            className={cn(
                'overflow-y-auto scroll-smooth focus:scroll-auto',
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
