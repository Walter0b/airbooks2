import { useState } from 'react'
import SideBarItems from './sidebar.item'
import { SidebarItemType } from '@/utils/types/page-type/table.type'
import VerticalArrowIcon from './sidebar.reduce'
import NavOption from './sidebar.nav.option'
import { cn } from '@/utils/functions/classNames'
// import { SideBarContext } from '@/hooks/context/sidebarContext'

export default function SideBar({
    navigation,
    canCompact = true
}: Readonly<{ navigation: SidebarItemType[], canCompact?: boolean }>) {
    const [isCompact, setIsCompact] = useState(false)

    return (
        <div
            className={cn(
                isCompact ? 'w-fit' : 'sm:min-w-48',
                'hidden flex-col !overflow-hidden border-r border-r-gray-300 bg-gray-100 md:flex'
            )}
        >
            {!isCompact && <NavOption />}
            <div className='overflow-y-scroll h-full scroll-smooth focus:scroll-auto'>
                <SideBarItems navigation={navigation} isCompact={isCompact} />
                <div className={cn(!canCompact && '!hidden')}>
                    <VerticalArrowIcon isOpen={isCompact} setIsOpen={setIsCompact} />
                </div>

            </div>
        </div>
    )
}
