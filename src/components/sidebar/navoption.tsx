import { BarChartIcon } from '@assets/svg/bar'
import { HomeIcon } from '@assets/svg/home'
import { NavLink, useLocation } from 'react-router-dom'

export default function NavOption() {
    const location = useLocation()
    const basePath = location.pathname.split('/')[1]
    const baseClassName =
        'border-[1px] h-full w-full flex justify-center items-center '
    console.log(basePath)
    return (
        <div className=" flex min-h-10 items-center bg-white justify-between p-0.5">
            <NavLink
                to="/core/dashboard"
                id="core"
                className={({ isActive }) =>
                    `${baseClassName} ${isActive ? 'border-emerald-500' : ''} hover:border-emerald-500`
                }
            >
                <HomeIcon className="w-4 fill-green-550" />
            </NavLink>
            <NavLink
                to="/report"
                id="report"
                className={({ isActive }) =>
                    `${baseClassName} ${isActive ? 'border-red-900' : ''} hover:border-red-900`
                }
            >
                <BarChartIcon className="w-4 fill-red-550" />
            </NavLink>
        </div>
    )
}
