import SideBar from './sidebar/sidebar'
import Header from './header/header'
import { Outlet } from 'react-router-dom'
import { Navigation } from '@utils/models/interface/table'


function Layout({ sidebar }: Readonly<{ sidebar: Navigation[] }>) {


    return (
        <div className="flex h-svh w-svw  bg-white" id="layout">
            <div className="flex h-full w-full flex-1 flex-col overflow-hidden">
                <div className="item-center flex justify-center">
                    <div className="p-1 text-center text-lg text-black">
                        AirBooks is ready. Are you?
                    </div>
                    <button className="my-auto ml-1 h-fit w-fit rounded-sm bg-cyan-550 p-1 text-xs font-medium !uppercase text-white">
                        sign up now
                    </button>
                </div>
                <Header />
                <div className="flex h-full">
                    <SideBar navigation={sidebar} />
                    <main className="mb-14 flex w-full flex-col overflow-hidden bg-white">
                        <Outlet />
                    </main>
                </div>
            </div>
    
        </div>
    )
}

export default Layout
