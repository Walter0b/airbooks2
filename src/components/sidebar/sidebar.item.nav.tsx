import { ArrowIcon } from '@/assets/svg/arrow'
import { CircleIcon } from '@/assets/svg/circle'
import { CrossIcon } from '@/assets/svg/cross'
import { EmptyArrowIcon } from '@/assets/svg/emptyarrow'
import {
    NavLinksType,
    NavComponentProps,
    NavButtonsProps,
} from '@/utils/models/interface/table'
import { useEffect, useState } from 'react'
import NavLink from '../util/navlink'






function Buttons({ item, handleOpenModal }: Readonly<NavButtonsProps>) {

    return (
        <button
            onClick={() => handleOpenModal(item.href || '')}
            className="group-hover:bg-gray-200 ml-[0.6px] group-[.peer]/compact:!hidden h-10 gap-x-3 p-2 pl-2 peer-[.peer]:bg-cyan-550 text-center text-[13px] pt-3 font-semibold leading-6 text-white hover:!bg-cyan-550 sm:flex"
        >
            <CrossIcon
                className="mr-px w-4 rotate-45 fill-gray-100"
                className1="h-10"
                className2="w-10"
            />

        </button>
    );
}


function NavLinks({ item, isOpen, handleOpenModal }: Readonly<NavComponentProps>) {


    return (
        <div className='flex w-full '>
            <NavLink
                to={item.href ?? ''}
                activeClassName=' bg-cyan-550 !fill-gray-100 text-white peer'
                conditionalClassName='text-zinc-550 hover:bg-white group-hover:bg-white group-hover:text-cyan-650 '
                className={` ${isOpen ? 'h-11 ' : 'h-10'}   w-full p-2 `}
            >
                {isActive => {
                    item.isActive = isActive;

                    return (
                        <div
                            className={`flex w-full gap-x-2 text-[13px] font-medium leading-6`}
                        >
                            {item.icon ? (
                                <div
                                    className={`group-hover:fill-cyan-550 ${isActive && '!fill-gray-100'}   m-1 w-3 items-center self-center fill-zinc-550 font-semibold leading-6 active:!fill-gray-100`}
                                >
                                    <item.icon className={` ${isOpen ? ' w-4' : 'w-full'} h-full `} />
                                </div>
                            ) : (
                                <CircleIcon className="ml-2 mr-2 w-3 fill-gray-100" />
                            )}
                            <span className={`${isOpen ? 'hidden group-hover/visited:!inlin e ' : 'sm:inline'}`}>{item.label}</span>


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
                {/* {isOpen &&  <NavLinks item={item} isOpen={false} /> } */}
            </NavLink >
            {item.isButton && <Buttons item={item} handleOpenModal={handleOpenModal} />}
        </div>

    )
}

function MiniNavLink({ item, handleOpenModal }: Readonly<NavComponentProps>) {


    return (
        <div className=' hidden group-hover:flex group/extract  border-y border-r border-gray-300 z-50 sm:min-w-36 '>
            <NavLink
                to={item.href ?? ''}
                activeClassName=' bg-cyan-550 !fill-gray-100 text-white peer'
                conditionalClassName='text-zinc-550  group-hover/extract:bg-white group-hover/compact:text-cyan-650'
                className={` ${'h-11'} pl-3  w-full p-2 `}

            >
                {isActive => {
                    item.isActive = isActive;

                    return (
                        <div
                            className={`flex items-center w-full gap-x-2 text-[13px] font-medium leading-6`}
                        >
                            <span className={` ${isActive ? '  bg-cyan-550' : 'group-hover/extract:bg-white bg-gray-100'} contain-[""] -ml-[1.2rem]  border-l border-b border-gray-300 absolute rotate-45 size-3`} />

                            <span className={`${'sm:inline'}`}>{item.label}</span>


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
                {/* {isOpen &&  <NavLinks item={item} isOpen={false} /> } */}
            </NavLink >
            <button
                onClick={() => handleOpenModal(item.href || '')}
                className="group-hover:bg-gray-200 ml-[0.6px] h-[2.76rem] gap-x-3 p-2 pt-3 pl-2 peer-[]:!bg-cyan-550 text-center text-[13px] font-semibold leading-6 text-white hover:!bg-cyan-550 sm:flex"
            >
                <CrossIcon
                    className="mr-px w-4 rotate-45 fill-gray-100"
                    className1="h-10"
                    className2="w-10"
                />

            </button>
        </div >

    )
}


function Accordion({ item }: Readonly<NavLinksType>) {
    const [isOpen, setIsOpen] = useState(false)
    const [isAnySubItemCurrent, SetIsAnySubItemCurrent] = useState(false)
    useEffect(() => {
        // Calculate isAnySubItemCurrent whenever item changes
        SetIsAnySubItemCurrent(
            item?.options?.some((subItem) => subItem.isActive) || false
        )
    }, [item])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
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
                    {item.label}
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
                        {isActive => {
                            subItem.isActive = isActive
                            return (
                                <div
                                    className={` ${isActive && ' bg-slate-50'} group/option relative border-b border-dotted border-gray-300 p-2 pl-8 before:relative before:flex before:items-center before:pl-4 last:border-none hover:text-cyan-550`}
                                >
                                    <span className="before:content-'' z-50 before:absolute before:left-0 before:-mt-2 before:ml-4 before:block before:h-full before:w-px before:border-r before:border-dotted before:border-cyan-550"></span>
                                    <div className="flex gap-5">
                                        <ArrowIcon
                                            className={`invisible -ml-[1.1rem] w-[0.4rem] ${isOpen ? '-rotate-90 fill-cyan-550' : ''} ${isActive ? '!visible' : ''} group-hover/option:visible`}
                                        />
                                        {subItem.label}
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
export function NavigationItem({ item, isOpen, handleOpenModal }: Readonly<NavComponentProps>) {

    return (
        <div className={`group flex w-full `}>
            {item.options?.length ? (
                <Accordion item={item} isOpen={isOpen} />
            ) : (
                <div className='group flex w-full gap-5'> <NavLinks handleOpenModal={handleOpenModal} item={item} isOpen={isOpen} />  {isOpen &&
                    <div className='fixed ml-12 -mt-px z-10 bg-slate-100 '><MiniNavLink item={item} handleOpenModal={handleOpenModal} /></div>}</div>
            )}
            {/* {item.isButton && <Buttons item={item} handleOpenModal={handleOpenModal} />} */}
        </div>
    )
}
