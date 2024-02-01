import SideBarItems from './sidebaritem'
import { Navigation } from '@utils/models/interface/table'

export default function SideBar({
    navigation,
}: Readonly<{ navigation: Navigation[] }>) {
    return <SideBarItems navigation={navigation} />
}
