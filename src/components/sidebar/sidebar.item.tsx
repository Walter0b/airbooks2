import React from 'react'
import { NavigationItem } from './sidebar.item.nav'
import { SidebarItemType } from '@/utils/models/interface/table'

export default function SideBarItems({
    navigation,
    isCompact,

}: Readonly<{
    navigation: SidebarItemType[],
    isCompact: boolean,
}>) {


    return (
        <>
            <ul className={`  ${isCompact && ' w-12 peer/compact group/compact'} overflow-y-auto scroll-smooth focus:scroll-auto`}>
                {navigation.map((item: SidebarItemType, index: number) => (
                    <React.Fragment key={item.label}>
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
