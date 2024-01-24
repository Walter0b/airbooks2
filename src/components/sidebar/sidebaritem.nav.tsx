import { CrossIcon } from "@assets/svg/cross";
import { ButtonsProps, NavLinksProps, NavComponentProps } from "@utils/models/interface/table";
import { NavLink } from "react-router-dom";

 function Buttons({ item, hoveredItems, setHoveredItems }: ButtonsProps) {
    const bgColor = item.current ? "bg-cyan-550" : " hover:bg-cyan-550 "
    return (
        <button
            className={`${bgColor}
       
        ${hoveredItems[item.name] &&
                    item.name !== "Dashboard"
                    ? "bg-gray-200"
                    : ""
                }
        group sm:flex gap-x-3 hidden  text-white h-10 p-2 pl-2 text-center  ml-[0.5px] text-[13px] leading-6 font-semibold
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
    );
}


 function NavLinks({ item, hoveredItems, setHoveredItems }: NavLinksProps) {
    const currentbg = `${item.current ? "bg-cyan-550 text-white fill-cyan-550" : "text-zinc-550 hover:bg-white "}`
    const hoverColor = `${hoveredItems[item.name] && item.name !== "Dashboard" && "!fill-cyan-550 !bg-white !text-cyan-650"}`
    return (
        <NavLink
            to={item.href}
            className={`
          ${currentbg}
          ${hoverColor}
          group flex gap-x-2 p-2 text-[13px] w-full leading-6 font-medium
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
                    className={` ${currentbg} 
              ${hoverColor}
              ${item?.className}
              ${item.name === "Dashboard" && "!fill-white"}
              w-3 self-center items-center m-1  leading-6 font-semibold fill-zinc-550
            `}
                >
                    {item.icon && <item.icon className="w-full h-full" />}
                </div>
            )}

            {/* Use utility classes to hide text on small screens */}
            <span className="hidden sm:inline">
                {item.name}
            </span>

            {item.count ? (
                <span
                    className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                    aria-hidden="true"
                >
                    {item.count}
                </span>
            ) : null}
        </NavLink>
    );
}


export function Nav({ item, hoveredItems, setHoveredItems }: NavComponentProps) {
    return (
        <div className="flex w-full">
            <NavLinks item={item} hoveredItems={hoveredItems} setHoveredItems={setHoveredItems} />
            {!(item.name === "Dashboard") && <Buttons item={item} hoveredItems={hoveredItems} setHoveredItems={setHoveredItems} />}
        </div>
    )
}
