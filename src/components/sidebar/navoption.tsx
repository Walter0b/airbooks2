import { BarChartIcon } from '@assets/svg/bar'
import { HomeIcon } from '@assets/svg/home'
import { NavLink } from 'react-router-dom'

export default function NavOption() {
    const baseClassName =
        'border-[1px] h-full w-full flex justify-center items-center '
    return (
        <div className=" flex min-h-10 items-center justify-between bg-white p-0.5">
            <NavLink
                to="/core"
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
