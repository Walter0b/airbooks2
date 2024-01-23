import { TachometerIcon } from '@assets/svg/tachometer'
import SideBareItems from './sidebaritem'
import { CaseIcon } from '@assets/svg/case'
import { UserIcon } from '@assets/svg/user'
import { UsersIcon } from '@assets/svg/users'
import { ShoppingCartIcon } from '@assets/svg/shoppingCart'
import { CreditCardIcon } from '@assets/svg/creditCard'
import { FileIcon } from '@assets/svg/file'
import { MoneyIcon } from '@assets/svg/money'
import { ManualIcon } from '@assets/svg/manual'
const navigation = [
    { name: 'Dashboard', href: '/', current: true, group: 1, icon: TachometerIcon },
    { name: 'Travelers', href: '/travelers', current: false, group: 1, icon: UserIcon },
    { name: 'Travel Item', href: '/travelitem', current: false, group: 1, icon: CaseIcon },
    { name: 'Customer', href: '/customer', current: false, group: 2, icon: UsersIcon },
    { name: 'Estimates', href: '/estimates', current: false, group: 2, icon: ShoppingCartIcon },
    { name: 'Invoice', href: '/invoice', current: false, group: 2, icon: ShoppingCartIcon },
    { name: 'Credit Notes', href: '/creditnotes', current: false, group: 2, icon: ShoppingCartIcon,className: '-scale-x-100', },
    { name: 'Payments', href: '/payments', current: false, group: 3, icon: CreditCardIcon },
    { name: 'Bill', href: '/bill', current: false, group: 4, icon: FileIcon },
    { name: 'Expenses', href: '/expenses', current: false, group: 4, icon: MoneyIcon },
    { name: 'Manual Journal', href: '/manualjournal', current: false, group: 5, icon: ManualIcon },

]


export default function SideBare() {
    return (
        <SideBareItems navigation={navigation} />
    )
}
