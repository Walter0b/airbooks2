import { CrossIcon } from "@assets/svg/cross";
import { HomeIcon } from "@assets/svg/home";
import { BarChartIcon } from "@assets/svg/money copy";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface NavigationItem {
    name: string;
    href: string;
    count?: string;
    group: number;
    current: boolean;
    icon?: React.FC<{ className: string }>;
    className?: string;
}
export default function SideBareItems({
    navigation,
}: Readonly<{ navigation: NavigationItem[] }>) {
    console.log(navigation);
    const [hoveredItems, setHoveredItems] = useState<{ [key: string]: boolean }>(
        {}
    );
    return (
        <div className="flex h-screen grow flex-col overflow-y-auto bg-Gray-50 min-w-48 border-r-gray-300 border-r">
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
                            <NavLink
                                to={item.href}
                                className={`
                                ${item.current ? "bg-cyan-550 text-white" : "text-zinc-550 hover:bg-white "}
                                ${hoveredItems[item.name] && item.name !== "Dashboard" ? "!bg-white !text-cyan-650" : ""}
                                group flex gap-x-2 p-2 text-[13px] w-full leading-6 font-semibold
                            `}
                                onMouseEnter={() =>
                                    setHoveredItems((prevState) => ({
                                        ...prevState,
                                        [item.name]: true,
                                    }))
                                }
                                onMouseLeave={() =>
                                    setHoveredItems((prevState) => ({
                                        ...prevState,
                                        [item.name]: false,
                                    }))
                                }
                            >
                                {item.icon && (
                                    <div
                                        className={` ${item.current ? "fill-cyan-550" : " hover:bg-white "} 
                                        ${hoveredItems[item.name] && item.name !== "Dashboard" &&
                                            "!m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zfill-cyan-550"
                                            }
                                        ${item?.className}
                                        ${item.name === "Dashboard" && "!fill-white"}
                                        w-3 self-center items-center m-1 leading-6 font-semibold fill-zinc-550
    `}
                                    >
                                        {item.icon && <item.icon className="w-full h-full" />}
                                    </div>
                                )}

                                {item.name}
                                {item.count ? (
                                    <span
                                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                                        aria-hidden="true"
                                    >
                                        {item.count}
                                    </span>
                                ) : null}
                            </NavLink>
                            <button
                                className={`
                                    ${item.current
                                        ? "bg-cyan-550"
                                        : " hover:bg-cyan-550 "
                                    }
                                    ${item.name === "Dashboard" ? "hidden" : ""}
                                    ${hoveredItems[item.name] &&
                                        item.name !== "Dashboard"
                                        ? "bg-gray-200"
                                        : ""
                                    }
                                    group flex gap-x-3  text-white h-10 p-2 pl-2 text-center  ml-[0.5px] text-[13px] leading-6 font-semibold
                                `}
                                // onClick={}
                                onMouseEnter={() =>
                                    setHoveredItems((prevState) => ({
                                        ...prevState,
                                        [item.name]: true,
                                    }))
                                }
                                onMouseLeave={() =>
                                    setHoveredItems((prevState) => ({
                                        ...prevState,
                                        [item.name]: false,
                                    }))
                                }
                            >
                                <CrossIcon
                                    className="w-4 mr-px fill-white rotate-45"
                                    className1=" h-10"
                                    className2="w-10"
                                />
                            </button>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}
