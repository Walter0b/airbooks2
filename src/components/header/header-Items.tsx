import logo from '@/assets/image/neema/logo/Neema.png'
import { NotificationsIcon } from '@/assets/svg/notificaitons'
import { HelpIcon } from '@/assets/svg/help'
import { SettingsIcon } from '@/assets/svg/settings'
import { UserIcon } from '@/assets/svg/user'
import LanguageOption from './header-languageOption'
import Image from 'next/image'
import Buttons from '../buttons/buttons'
import HeaderOptions from './header-Items-Profil'
import { settingsOption } from '@/static/header/heart'
export default function HeaderItems() {
    return (
        <nav className="flex w-full p-1">
            <div className="ml-auto flex space-x-4 md:hidden">
                <button
                    data-collapse-toggle="navbar-hamburger"
                    type="button"
                    className="px-3 focus:outline-none  "
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="h-5 w-5 fill-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>
            {/* Logo */}
            <a
                href="http://airbooks.co.za"
                target="_blank"
                className="mr-16 flex items-center justify-between p-2  text-xl   font-semibold text-white "
            >
                <Image
                    src={logo}
                    className=" -mp-2 mr-1 w-[40px] text-[80%] "
                    alt="Logo"
                />
                AirBooks
            </a>

            <div className="flex w-full  items-center">
                {/* Search Bar and Options */}
                <div className="hidden w-full items-center justify-between space-x-4 rounded-sm  md:flex">
                    {/* Search Bar */}
                    <div className="flex ">
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex w-[25px] items-center ps-3">
                                <svg
                                    className="h-4 w-4 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        fill="none"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input
                                type="text"
                                id="search-navbar"
                                className="dark:bg-cyan-1000 w-96 rounded border-none !bg-white/10 p-[4px]  ps-10 text-sm  italic text-gray-900  dark:text-white "
                                placeholder="Find invoices"
                            />
                        </div>
                        <div className="ml-2 flex text-left">
                            <div className="flex cursor-pointer items-center justify-center">
                                <svg
                                    className="h-5 w-5 rotate-90 fill-white "
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6a2 2 0 100-4 2 2 0 000 4zm0 8a2 2 0 100-4 2 2 0 000 4zm0 8a2 2 0 100-4 2 2 0 000 4z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <LanguageOption className="mt-3 mr-10" />

                        {/* SidebarItemType Options */}
                        <div className="flex ">
                            <button className=" border-2 border-white p-5 ">
                                <NotificationsIcon className="w-4 fill-white" />
                            </button>

                            <Buttons className=" border-r-2 border-white p-5"     dropdownClassName="right-0 -mt-2 w-44 text-start whitespace-nowrap font-medium "
                            dropdownText="text-start whitespace-nowrap font-medium " dropdownOptions={settingsOption}>
                                <div data-slot="title">
                                    <SettingsIcon className="w-4 fill-white" />
                                </div>

                            </Buttons>
                            <button className=" border-r-2 border-white p-5 ">
                                <HelpIcon className="w-4 fill-white" />
                            </button>
                            <Buttons className=" p-4 ">
                                <div data-slot="title">
                                    <UserIcon className="w-4 fill-white" />
                                </div>
                                <div data-slot="dropDown">
                                    <HeaderOptions />

                                </div>
                            </Buttons>
                        </div>
                    </div>
                </div>
                {/* Mobile Toggle Buttons */}
                <div className="ml-auto flex space-x-4 md:hidden">
                    <button
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                        className="me-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                fill="none"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
