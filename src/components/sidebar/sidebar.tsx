'use client'
import { useState } from 'react'
import SideBarItems from './sidebar.item'
import { SidebarItemType } from '@/utils/types/page-type/table.type'
import VerticalArrowIcon from './sidebar.reduce'
import NavOption from './sidebar.nav.option'
import { cn } from '@/utils/intext'
// import { SideBarContext } from '@/hooks/context/sidebarContext'

export default function SideBar({
    navigation,
}: Readonly<{ navigation: SidebarItemType[] }>) {
    const [isCompact, setIsCompact] = useState(false)

    return (
        <div
            className={cn(
                isCompact ? 'w-fit' : 'sm:min-w-48',
                'hidden h-screen grow flex-col !overflow-hidden overflow-y-auto border-r border-r-gray-300 bg-gray-100 md:flex'
            )}
        >
            {!isCompact && <NavOption />}
            <SideBarItems navigation={navigation} isCompact={isCompact} />
            <VerticalArrowIcon isOpen={isCompact} setIsOpen={setIsCompact} />
        </div>
    )
}
