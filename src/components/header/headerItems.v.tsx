import logo from '@assets/image/neema/logo/fa-logo.png'
import { NotificationsIcon } from '@assets/svg/notificaitons'
import { HelpIcon } from '@assets/svg/help'
import { SettingsIcon } from '@assets/svg/settings'
import { UserIcon } from '@assets/svg/user'
import LanguageOption from './languageOption'
export default function HeaderItems() {
    return (
        <nav className="flex w-full p-1">
            {/* Logo */}
            <a
                href="http://airbooks.co.za"
                target="_blank"
                className="mr-16 flex items-center justify-between p-2  text-xl   font-semibold text-white "
            >
                <img
                    className=" -mp-2 mr-1 w-[40px] text-[80%] "
                    src={logo}
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
                                className="block w-96 p-[4px] ps-10 text-sm italic  text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-cyan-1000 dark:text-white dark:placeholder-gray-300 "
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
                        <LanguageOption className='mr-10 mt-3' />
                           
                        {/* Navigation Options */}
                        <div className="flex ">
                            <button className="flex border-2 border-white p-5 ">
                                <NotificationsIcon className="w-4 fill-white" />
                            </button>
                            <button className="flex border-r-2 border-white p-5 ">
                                <SettingsIcon className="w-4 fill-white" />
                            </button>
                            <button className="flex border-r-2 border-white p-5 ">
                                <HelpIcon className="w-4 fill-white" />
                            </button>
                            <button className="flex p-4 ">
                                <UserIcon className="w-4 fill-white" />
                            </button>
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
                        className="me-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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

                    <button
                        data-collapse-toggle="navbar-search"
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5"
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
            </div>
        </nav>
    )
}
