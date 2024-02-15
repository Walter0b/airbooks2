import { ArrowIcon } from '@assets/svg/arrow'
import { CircleIcon } from '@assets/svg/circle'
import { CrossIcon } from '@assets/svg/cross'
import { EmptyArrowIcon } from '@assets/svg/emptyarrow'
import {
    NavLinksProps,
    NavComponentProps,
} from '@utils/models/interface/table'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function Buttons ()  {
    const navigate = useNavigate();
    const handleClick = () => {

        navigate('travelers/new')
    }
    return (
        <div
            // to={item.href}
            onClick={() => handleClick()}
            className={` 'hover:bg-cyan-550 group-hover:bg-gray-200 '}  ml-[0.6px] hidden h-10 gap-x-3 p-2 pl-2 peer-[]:!bg-cyan-550  text-center text-[13px] font-semibold leading-6 text-white hover:!bg-cyan-550 sm:flex`
            }
        >
            <CrossIcon
                className="mr-px w-4 rotate-45 fill-gray-100"
                className1="h-10"
                className2="w-10"
            />
        </div>
    )
}

function NavLinks({ item }: Readonly<NavLinksProps>) {
    return (
        <NavLink
            to={item.href ?? ''}
            className={({ isActive }) =>
                `$ ${isActive ? 'bg-cyan-550  !fill-gray-100 text-white peer' : 'text-zinc-550 hover:bg-white group-hover:text-cyan-650'} h-10 w-full p-2`
            }
        >
            {({ isActive }) => {
                item.current = isActive

                return (
                    <div
                        className={`  flex w-full gap-x-2  text-[13px] font-medium leading-6`}
                    >
                        {item.icon ? (
                            <div
                                className={` group-hover:fill-cyan-550 ${isActive && '!fill-gray-100'} m-1 w-3 items-center self-center fill-zinc-550 font-semibold leading-6 active:!fill-gray-100`}
                            >
                                <item.icon className="h-full w-full" />
                            </div>
                        ) : (
                            <CircleIcon className="ml-2 mr-2 w-3 fill-gray-100" />
                        )}
                        <span className={`hidden sm:inline`}>{item.name}</span>

                        {item.count && (
                            <span
                                className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                                aria-hidden="true"
                            >
                                {item.count}
                            </span>
                        )}
                    </div>
                )
            }}
        </NavLink>
    )
}

function Accordion({ item }: Readonly<NavLinksProps>) {
    const [isOpen, setIsOpen] = useState(false)
    const [isAnySubItemCurrent, SetIsAnySubItemCurrent] = useState(false)
    useEffect(() => {
        // Calculate isAnySubItemCurrent whenever item changes
        SetIsAnySubItemCurrent(
            item?.options?.some((subItem) => subItem.current) || false
        )
    }, [item])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    console.log(isAnySubItemCurrent)

    console.log(item.current)
    return (
        <div className="w-full">
            <div
                id=""
                className={` div2 transition-all duration-500 ease-in-out  ${isOpen ? 'border-b border-b-gray-200 ' : ''} target:¡bg-black flex w-full flex-row ${isAnySubItemCurrent && 'bg-cyan-550'}`}
            >
                <CircleIcon className="ml-4 mr-2 w-4 fill-gray-100" />
                <button
                    className={`${isAnySubItemCurrent ? 'text-white' : ' text-zinc-550 hover:text-cyan-550'} group flex h-10 w-full items-center justify-between gap-x-2 p-2 text-[13px] font-medium leading-6`}
                    onClick={handleClick}
                >
                    {item.name}
                    <EmptyArrowIcon
                        className={` ${isAnySubItemCurrent && '!fill-white'} duration-400 w-3  fill-zinc-550 transition-transform ease-in-out group-hover:fill-cyan-550 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>
            </div>
            <div
                className={`transition-max-height stop w-full  overflow-hidden bg-white text-black duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'
                    }`}
            >
                {item?.options?.map((subItem, subIndex) => (
                    <NavLink to={subItem.href} key={subIndex} id="navlink">
                        {({ isActive }) => {
                            subItem.current = isActive
                            return (
                                <div
                                    className={` ${isActive && ' bg-slate-50'} group/option relative border-b border-dotted border-gray-300 p-2 pl-8 before:relative before:flex before:items-center before:pl-4 last:border-none hover:text-cyan-550`}
                                >
                                    <span className="before:content-'' z-50 before:absolute before:left-0 before:-mt-2 before:ml-4 before:block before:h-full before:w-px before:border-r before:border-dotted before:border-cyan-550"></span>
                                    <div className="flex gap-5">
                                        <ArrowIcon
                                            className={`invisible -ml-[1.1rem] w-[0.4rem] ${isOpen ? '-rotate-90 fill-cyan-550' : ''} ${isActive ? '!visible' : ''} group-hover/option:visible`}
                                        />
                                        {subItem.option}
                                    </div>
                                </div>
                            )
                        }}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
export function NavigationItem({ item }: Readonly<NavComponentProps>) {
    return (
        <div className="group flex   w-full">
            {item.options?.length ? (
                <Accordion item={item} />
            ) : (
                <NavLinks item={item} />
            )}
            {item.button && <Buttons />}
        </div>
    )
}
