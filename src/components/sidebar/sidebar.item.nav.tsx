import {
    NavLinksType,
    NavComponentProps,
    NavButtonsProps,
} from '@/utils/types/page-type/table.type'
import { useState } from 'react'
import NavLink from 'next-navlink'
import { cn } from '@/utils/functions/classNames'
import { ArrowIcon } from '@/assets/svg/arrow'
import { CircleIcon } from '@/assets/svg/circle'
import { CrossIcon } from '@/assets/svg/cross'
import { EmptyArrowIcon } from '@/assets/svg/emptyarrow'

const Buttons = ({ item, handleOpenModal }: Readonly<NavButtonsProps>) => (
    <button
        onClick={() => handleOpenModal(item.href || '')}
        className="peer-[.peer]:bg-cyan-550 hover:!bg-cyan-550 ml-[0.6px] h-10 gap-x-3 p-2 pt-3 pl-2 text-center text-[13px] font-semibold leading-6 text-white group-hover:bg-gray-200 group-[.peer]/compact:!hidden sm:flex"
    >
        <CrossIcon
            className="mr-px w-4 rotate-45 fill-gray-100"
            className1="h-10"
            className2="w-10"
        />
    </button>
)

export const NavLinks = ({
    item,
    isOpen,
    handleOpenModal,
}: Readonly<NavComponentProps>) => (
    <div className="flex w-full ">
        <NavLink
            to={item.href ?? ''}
            activeClassName=" bg-cyan-550 !fill-gray-100 text-white peer"
            inActiveClassName="text-zinc-550 hover:bg-white group-hover:bg-white group-hover:text-cyan-650 "
            className={cn(isOpen ? 'h-11' : 'h-10', 'w-full p-2')}
        >
            {(isActive) => (

                <div className="flex w-full gap-x-2 text-[13px] font-medium leading-6">
                    {item.icon ? (
                        <div
                            className={cn(
                                'group-hover:fill-cyan-550',
                                isActive && '!fill-gray-100',
                                'fill-zinc-550 m-1 w-3 items-center self-center font-semibold leading-6 active:!fill-gray-100'
                            )}
                        >
                            <item.icon
                                className={cn(
                                    isOpen ? 'w-4' : 'w-full',
                                    'h-full'
                                )}
                            />
                        </div>
                    ) : (
                        <CircleIcon className="mr-2 ml-2 w-3 fill-gray-100" />
                    )}
                    <span className={cn(isOpen ? 'hidden' : 'sm:inline')}>
                        {item.label}
                    </span>
                    {item.count && (
                        <span className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 py-0.5 px-2.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-gray-700 ring-inset">
                            {item.count}
                        </span>
                    )}
                </div>

            )}
        </NavLink>
        {item.isButton && (
            <Buttons item={item} handleOpenModal={handleOpenModal!} />
        )}
    </div>
)

const MiniNavLink = ({
    item,
    handleOpenModal,
}: Readonly<NavComponentProps>) => (
    <div className="group/extract z-50 hidden border-y border-r border-gray-300 group-hover:flex sm:min-w-36">
        <NavLink
            to={item.href!}
            activeClassName="bg-cyan-550 !fill-gray-100 text-white peer"
            inActiveClassName="text-zinc-550 group-hover/extract:bg-white group-hover/compact:text-cyan-650"
            className="h-11 w-full p-2 pl-3"
        >
            {(isActive) => (
                <div className="flex w-full items-center gap-x-2 text-[13px] font-medium leading-6">
                    <span
                        className={cn(
                            isActive
                                ? 'bg-cyan-550'
                                : 'bg-gray-100 group-hover/extract:bg-white',
                            'absolute -ml-[1.2rem] size-3 rotate-45 border-b border-l border-gray-300 contain-[""]'
                        )}
                    />
                    <span className="sm:inline">{item.label}</span>
                    {item.count && (
                        <span className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 py-0.5 px-2.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-gray-700 ring-inset">
                            {item.count}
                        </span>
                    )}
                </div>
            )
            }
        </NavLink>
        <button
            onClick={() => handleOpenModal?.(item.href || '')}
            className="peer-[]:!bg-cyan-550 hover:!bg-cyan-550 ml-[0.6px] h-[2.76rem] gap-x-3 p-2 pt-3 pl-2 text-center text-[13px] font-semibold leading-6 text-white group-hover:bg-gray-200 sm:flex"
        >
            <CrossIcon
                className="mr-px w-4 rotate-45 fill-gray-100"
                className1="h-10"
                className2="w-10"
            />
        </button>
    </div>
)

const Accordion = ({ item }: Readonly<NavLinksType>) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full">
            <NavLink
                to={item.href!}
                id={item.href}
                redirection={false}
                activeClassName="bg-cyan-550 text-white"
                inActiveClassName="text-zinc-550 hover:text-cyan-550"
                className={cn(
                    'div2 transition-transform duration-500 ease-in-out',
                    isOpen && 'border-b border-b-gray-200',
                    'flex w-full flex-row'
                )}
            >
                {(isActive: boolean) => (
                    <>
                        <CircleIcon className="mr-2 ml-4 w-4 fill-gray-100" />
                        <button
                            className="group flex h-10 w-full items-center justify-between gap-x-2 break-normal p-2 text-[13px] font-medium leading-6"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {item.label}
                            <EmptyArrowIcon
                                className={cn(
                                    isActive && '!fill-white',
                                    'fill-zinc-550 group-hover:fill-cyan-550 w-3 transition-transform duration-400 ease-in-out',
                                    isOpen && 'rotate-180'
                                )}
                            />
                        </button>
                    </>
                )}
            </NavLink>
            <div
                className={cn(
                    'transition-max-height stop w-full overflow-hidden bg-white text-black duration-500 ease-in-out',
                    isOpen ? 'max-h-[500px]' : 'max-h-0'
                )}
            >
                {item?.options?.map((subItem, subIndex) => (
                    <NavLink to={subItem.href} key={subIndex} id="navlink">
                        {(isActive) => (

                            <div
                                className={cn(
                                    isActive && 'bg-slate-100',
                                    'group/option hover:text-cyan-550 relative border-b !border-dotted border-slate-300 p-2 pl-8 before:relative before:flex before:items-center before:pl-4 last:border-none'
                                )}
                            >
                                <span className="before:content-'' before:border-cyan-550 z-50 before:absolute before:left-0 before:-mt-2 before:ml-4 before:block before:h-full before:w-px before:border-r before:border-dotted"></span>
                                <div
                                    className={cn(
                                        isOpen && 'text-can-550',
                                        isActive && 'text-cyan-550',
                                        'flex gap-5'
                                    )}
                                >
                                    <ArrowIcon
                                        className={cn(
                                            'invisible -ml-[1.1rem] w-[0.4rem]',
                                            isOpen &&
                                            ' fill-cyan-550 -rotate-90',
                                            isActive &&
                                            'fill-red-550 !visible',
                                            '0 group-hover/option:visible'
                                        )}
                                    />
                                    {subItem.label}
                                </div>
                            </div>
                        )
                        }
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export const NavigationItem = ({
    item,
    isOpen,
    handleOpenModal,
}: Readonly<NavComponentProps>) => (
    <div className="group flex w-full ">
        {item.options?.length ? (
            <Accordion item={item} isOpen={isOpen} />
        ) : (
            <div className="group flex w-full gap-5">
                <NavLinks
                    handleOpenModal={handleOpenModal}
                    item={item}
                    isOpen={isOpen}
                />
                {isOpen && (
                    <div className="fixed z-10 -mt-px ml-12 bg-slate-100 ">
                        <MiniNavLink
                            item={item}
                            handleOpenModal={handleOpenModal}
                        />
                    </div>
                )}
            </div>
        )}
    </div>
)
