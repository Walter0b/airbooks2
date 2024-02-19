import React, { useState } from 'react'
import { NavigationItem } from './sidebaritem.nav'
import { Navigation } from '@utils/models/interface/table'
import NavOption from './navoption'
import './index.css'
import VerticalArrowIcon from './siderbar.reduce'

export default function SideBarItems({
    navigation,
}: Readonly<{ navigation: Navigation[] }>) {

    const [isCompact, setIsCompact] = useState<boolean>(false)
    return (
        <div className={` ${isCompact ? 'sm:min-w-8' : 'sm:min-w-48'} flex h-screen grow flex-col !overflow-hidden overflow-y-auto border-r border-r-gray-300 bg-gray-100 `}>
            {!isCompact && <NavOption  /> }
            <ul className={`  ${isCompact && 'sm:min-w-8 peer/compact group/compact'} overflow-y-auto scroll-smooth focus:scroll-auto`}>
                {navigation.map((item: Navigation, index: number) => (
                    <React.Fragment key={item.name}>
                        {index > 0 &&
                            navigation[index - 1].group !== item.group && (
                                <hr className=" border-gray-300" />
                            )}
                        <li className="flex items-center justify-between">
                            <NavigationItem item={item} isOpen={isCompact} />
                        </li>
                    </React.Fragment>
                ))}

            </ul>
            <VerticalArrowIcon isOpen={isCompact} setIsOpen={setIsCompact} />
        </div>
    )
}
