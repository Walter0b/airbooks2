import SideBar from './sidebar/sidebar'
import Header from './header/header'
import { SidebarItemType } from '@/utils/types/page-type/table.type'
import DisplayModal from './modal/modal-display'
import { ReactNode } from 'react'

function Layout({
    sidebar,
    children,
}: Readonly<{ sidebar: SidebarItemType[]; children: ReactNode }>) {
    return (
        <div className="flex h-screen w-screen  bg-white" id="layout">
            <div className="flex h-full w-full flex-1 flex-col overflow-hidden">
                <div className="item-center flex justify-center">
                    <div className="p-1 text-center text-lg text-black">
                        AirBooks is ready. Are you?
                    </div>
                    <button className="bg-cyan-550 my-auto ml-1 h-fit w-fit rounded-sm p-1 text-xs font-medium !uppercase text-white">
                        sign up now
                    </button>
                </div>
                <Header />
                <div className="flex">
                    <SideBar navigation={sidebar} />
                    <main className="mb-14 flex w-full flex-col bg-white">
                        {children}
                        <DisplayModal />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Layout
