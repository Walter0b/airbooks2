import { BarChartIcon } from '@/assets/svg/bar'
import NavLink from '../../utils/navlink'
import HomeIcon from '@/assets/svg/home'

export default function NavOption() {
    const baseClassName =
        'border-[1px] h-full w-full flex justify-center items-center '
    return (
        <div className=" flex min-h-10 items-center justify-between bg-white p-0.5">
            <NavLink
                to="/core"
                id="core"
                activeClassName="border-emerald-500"
                className={`${baseClassName} hover:border-emerald-500`}
            >
                <HomeIcon className="fill-green-550 w-4" />
            </NavLink>

            <NavLink
                to="/report"
                id="report"
                activeClassName="border-red-500"
                className={`${baseClassName} hover:border-red-500`}
            >
                <BarChartIcon className="fill-red-550 w-4" />
            </NavLink>
        </div>
    )
}
