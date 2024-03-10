import { useState } from 'react'
import SideBarItems from './sidebar.item'
import { SidebarItemType } from '@utils/models/interface/table'
import VerticalArrowIcon from './sidebar.reduce'
import NavOption from './navOption'

export default function SideBar({
    navigation,
}: Readonly<{ navigation: SidebarItemType[] }>) {

    const [isCompact, setIsCompact] = useState<boolean>(false)
    return (
        <div className={` ${isCompact ? 'w-fit' : 'sm:min-w-48'} hidden md:flex h-screen grow flex-col !overflow-hidden overflow-y-auto border-r border-r-gray-300 bg-gray-100 `}>
            {!isCompact && <NavOption />}
            <SideBarItems navigation={navigation} isCompact={isCompact} />
            <VerticalArrowIcon isOpen={isCompact} setIsOpen={setIsCompact} />
        </div>
    )
}
