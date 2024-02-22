import React from 'react'
import { NavigationItem } from './sidebaritem.nav'
import { Navigation } from '@utils/models/interface/table'
import './index.css'

export default function SideBarItems({
    navigation,
    isCompact,
    
}: Readonly<{
    navigation: Navigation[], 
    isCompact: boolean,
}>) {


    return (
        <>
            <ul className={`  ${isCompact && ' w-12 peer/compact group/compact'} overflow-y-auto scroll-smooth focus:scroll-auto`}>
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

        </>
    )
}
