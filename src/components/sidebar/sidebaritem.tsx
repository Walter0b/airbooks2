import React from 'react'
import { NavigationItem } from './sidebaritem.nav'
import { Navigation } from '@utils/models/interface/table'
import NavOption from './navoption'
import './index.css'

export default function SideBarItems({
    navigation,
}: Readonly<{ navigation: Navigation[] }>) {
    // console.log(navigation)
    return (
        <div className="flex !overflow-hidden h-screen grow flex-col overflow-y-auto border-r border-r-gray-300 bg-gray-100 sm:min-w-48">
            <NavOption />
            <ul className=" overflow-y-auto scroll-smooth focus:scroll-auto">
                {navigation.map((item: Navigation, index: number) => (
                    <React.Fragment key={item.name}>
                        {index > 0 &&
                            navigation[index - 1].group !== item.group && (
                                <hr className=" border-gray-300" />
                            )}
                        <li className="flex items-center justify-between">
                            <NavigationItem item={item} />
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}
