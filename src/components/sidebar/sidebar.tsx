import { TachometerIcon } from '@assets/svg/tachometer'
import SideBarItems from './sidebaritem'
import { CaseIcon } from '@assets/svg/case'
import { UserIcon } from '@assets/svg/user'
import { UsersIcon } from '@assets/svg/users'
import { ShoppingCartIcon } from '@assets/svg/shoppingCart'
import { CreditCardIcon } from '@assets/svg/creditCard'
import { FileIcon } from '@assets/svg/file'
import { MoneyIcon } from '@assets/svg/money'
import { ManualIcon } from '@assets/svg/manual'
export const navigation = [
    { name: 'Dashboard', href: '/', current: true, group: 1, icon: TachometerIcon, button: false },
    { name: 'Travelers', href: '/travelers', current: false, group: 1, icon: UserIcon, button: true },
    { name: 'Travel Item', href: '/travelitem', current: false, group: 1, icon: CaseIcon, button: true },
    { name: 'Customer', href: '/customer', current: false, group: 2, icon: UsersIcon, button: true },
    { name: 'Estimates', href: '/estimates', current: false, group: 2, icon: ShoppingCartIcon, button: true },
    { name: 'Invoice', href: '/invoice', current: false, group: 2, icon: ShoppingCartIcon, button: true },
    { name: 'Credit Notes', href: '/creditnotes', current: false, group: 2, icon: ShoppingCartIcon, className: '-scale-x-100', button: true },
    { name: 'Payments', href: '/payments', current: false, group: 3, icon: CreditCardIcon, button: false },
    { name: 'Bill', href: '/bill', current: false, group: 4, icon: FileIcon, button: true },
    { name: 'Expenses', href: '/expenses', current: false, group: 4, icon: MoneyIcon, button: true },
    { name: 'Manual Journal', href: '/manualjournal', current: false, group: 5, icon: ManualIcon, button: false },

]


export default function SideBar() {
    return (
        <SideBarItems navigation={navigation} />
    )
}
