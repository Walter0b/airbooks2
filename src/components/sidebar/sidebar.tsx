import { useState } from 'react'
import SideBarItems from './sidebaritem'
import { Navigation } from '@utils/models/interface/table'
import NavOption from './navoption'
import VerticalArrowIcon from './siderbar.reduce'

export default function SideBar({
    navigation,
}: Readonly<{ navigation: Navigation[] }>) {

    const [isCompact, setIsCompact] = useState<boolean>(false)
    return (
        <div className={` ${isCompact ? 'w-fit' : 'sm:min-w-48'} hidden md:flex h-screen grow flex-col !overflow-hidden overflow-y-auto border-r border-r-gray-300 bg-gray-100 `}>
            {!isCompact && <NavOption />}
            <SideBarItems navigation={navigation} isCompact={isCompact} />
            <VerticalArrowIcon isOpen={isCompact} setIsOpen={setIsCompact} />
        </div>
    )
}
