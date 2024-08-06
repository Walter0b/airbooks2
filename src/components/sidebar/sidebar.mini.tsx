
import React from 'react'
import NavLink from 'next-navlink'
function MiniSidebar() {
    return (
        <div>


            <div className="h-full bg-white shadow-md">
                <h2 className="text-blue-600 font-semibold p-4">Accounts</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/chart-of-accounts" className="block px-4 py-2 text-black hover:bg-gray-100">
                                Chart of Accounts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/opening-balance" className="block px-4 py-2 text-black hover:bg-gray-100">
                                Opening Balance
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>



            export default Sidebar

        </div>
    )
}

export default MiniSidebar