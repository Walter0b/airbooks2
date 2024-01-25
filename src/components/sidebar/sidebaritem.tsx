import { HomeIcon } from "@assets/svg/home";
import { BarChartIcon } from "@assets/svg/bar";
import React, { useState } from "react";
import { Nav } from "./sidebaritem.nav";
import { NavigationItem } from "@utils/models/interface/table";



export default function SideBarItems({
    navigation,
}: Readonly<{ navigation: NavigationItem[] }>) {
    const [hoveredItems, setHoveredItems] = useState<{ [key: string]: boolean }>(
        {}
    );
    return (
        <div className="flex h-screen grow flex-col overflow-y-auto bg-Gray-50 sm:min-w-48 border-r-gray-300 border-r">
            <div className="flex justify-between p-0.5 h-10 items-center">
                <div className="border-[1px] h-full w-full flex justify-center items-center active:border-emerald-500 border-emerald-500">
                    <HomeIcon className="fill-green-550 w-4" />
                </div>
                <div className="border-[1px] h-full w-full flex justify-center items-center hover:border-red-550">
                    <BarChartIcon className="fill-red-550 w-4" />
                </div>
            </div>

            <ul className="">
                {navigation.map((item: NavigationItem, index: number) => (
                    <React.Fragment key={item.name}>
                        {index > 0 && navigation[index - 1].group !== item.group && (
                            <hr className=" border-gray-300" />
                        )}

                        <li className="flex justify-between items-center">
                            <Nav item={item} hoveredItems={hoveredItems} setHoveredItems={setHoveredItems} />
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}


