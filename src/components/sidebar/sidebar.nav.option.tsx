import { BarChartIcon } from '@/assets/svg/bar'
import NavLink from '../util/navlink'
import HomeIcon from '@/assets/svg/home'


export default function NavOption() {
    const baseClassName =
        'border-[1px] h-full w-full flex justify-center items-center '
    return (
        <div className=" flex min-h-10 items-center justify-between bg-white p-0.5">
            <NavLink
                to="/core"
                id="core"
                activeClassName='border-emerald-500'
                className={
                    `${baseClassName} hover:border-emerald-500`
                }
            >
                <HomeIcon className="w-4 fill-green-550" />
            </NavLink>
         
            <NavLink
                to="/report"
                id="report"
                activeClassName='border-red-500'
                className={
                    `${baseClassName} hover:border-red-500`
                }
            >
                <BarChartIcon className="w-4 fill-red-550" />
            </NavLink>
        </div>
    )
}
