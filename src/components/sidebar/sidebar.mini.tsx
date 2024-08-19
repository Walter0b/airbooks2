
import React from 'react'
import NavLink from 'next-navlink'
import { NavLinks } from './sidebar.item.nav'
import { CircleIcon } from '@/assets/svg/circle'
import { cn } from '@/utils/functions/classNames'
import SideBar from './sidebar'
import SideBarItems from './sidebar.item'
import { MiniSidebarType } from '@/utils/types/page-type/table.type'


function MiniSidebar({ MiniNavOptions }: { MiniNavOptions: MiniSidebarType }) {



    return (
        <div className='sm:min-w-48 h-screen hidden flex-col !overflow-hidden border-r border-r-gray-300 bg-gray-100 md:flex'>


            <div className="h-full bg-white shadow-md">
                <h2 className="text-cyan-550 text-xl mb-5 font-semibold p-4">{MiniNavOptions.title}</h2>
                <nav className='flex flex-col gap-2'>
                    {MiniNavOptions.sideBarItem.map((item) => (
                        <NavLink
                            to={item.href ?? ''}
                            activeClassName="!fill-gray-100 text-white border-y-gray-200 border"
                            inActiveClassName="text-zinc-550 hover:bg-white group-hover:bg-white group-hover:text-cyan-650 "
                            className='w-full p-2' >
                            <div className="flex w-full gap-x-2 text-[13px] font-medium leading-6">
                                <span className=' ml-3 text-zinc-550'>
                                    {item.label}
                                </span>

                            </div>
                        </NavLink>

                    ))}

                </nav>
            </div>

        </div>
    )
}

export default MiniSidebar