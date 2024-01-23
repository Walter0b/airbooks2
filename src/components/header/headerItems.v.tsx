import logo from "@assets/image/neema/logo/fa-logo.png"
import { NotificationsIcon } from "@assets/svg/notificaitons"
import { HelpIcon } from "@assets/svg/help"
import { SettingsIcon } from "@assets/svg/settings"
import { UserIcon } from "@assets/svg/user"
import { DownIcon } from "@assets/svg/down"
export default function HeaderItems() {
    return (
        <nav className="w-full p-1 flex">
            {/* Logo */}
            <a href="http://airbooks.co.za" target="_blank" className="flex justify-between text-xl font-semibold items-center  mr-16   p-2 text-white ">
                <img className=" w-[40px] mr-1 -mp-2 text-[80%] " src={logo} alt="Logo" />
                AirBooks
            </a>

            <div className="flex items-center  w-full">
                {/* Search Bar and Options */}
                <div className="hidden md:flex rounded-sm justify-between items-center space-x-4  w-full">
                    {/* Search Bar */}
                    <div className="flex ">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 w-[25px] pointer-events-none">
                                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-96 p-[4px] ps-10 text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500 dark:bg-cyan-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search..." />
                        </div>
                        <div className="flex ml-2 text-left">
                            <div className="flex items-center justify-center cursor-pointer">
                                <svg className="h-5 w-5 fill-white rotate-90 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6a2 2 0 100-4 2 2 0 000 4zm0 8a2 2 0 100-4 2 2 0 000 4zm0 8a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>

                            </div>
                        </div>

                    </div>
                    <div className="flex">
                        <div className="flex  justify-between items-center  mr-1">
                            <p className="mr-2 text-xs font-semibold "> ENDA TRAVEL - English</p>
                            <DownIcon className="w-2 fill-white" />
                        </div>
                        {/* Navigation Options */}
                        <div className="flex">
                            <div className="flex border-2 p-5 border-white ">
                                <NotificationsIcon className="w-4 fill-white" />
                            </div>
                            <div className="flex border-r-2 p-5 border-white ">
                                <SettingsIcon className="w-4 fill-white" />
                            </div>
                            <div className="flex border-r-2 p-5 border-white ">
                                <HelpIcon className="fill-white w-4" />
                            </div>
                            <div className="flex p-4 ">
                                <UserIcon className="fill-white w-4" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Toggle Buttons */}
                <div className="md:hidden flex space-x-4 ml-auto">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>

                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div >

        </nav >


    )
} 