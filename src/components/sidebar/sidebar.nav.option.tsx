import { BarChartIcon } from '@/assets/svg/bar'
import NavLink from 'next-navlink'
import HomeIcon from '@/assets/svg/home'
import { cn } from '@/utils/functions/classNames'

export default function NavOption() {
    const baseClassName =
        'border-[1px] h-full w-full flex justify-center items-center '
    return (
        <div className=" flex min-h-10 items-center justify-between bg-white p-0.5">
            <NavLink
                to="/core/travelers"
                id="core"
                activeClassName="border-emerald-500"
                className={cn(baseClassName, ' hover:border-emerald-500')}
            >
                <HomeIcon className="fill-green-550 w-4" />
            </NavLink>

            <NavLink
                to="/reports/business_overview/profit_and_loss"
                id="reports"
                activeClassName="border-red-500"
                className={cn(baseClassName, '  hover:border-red-500')}
            >
                <BarChartIcon className="fill-red-550 w-4" />
            </NavLink>
        </div>
    )
}
