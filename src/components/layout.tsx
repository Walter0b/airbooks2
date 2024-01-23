import SideBare from "./sidebar/sidebar";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import './layout.css'

function Layout() {
    return (
        <div className="flex h-svh w-svw  bg-white" id="layout">
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="p-1 text-center text-black">
                    AirBooks is ready. Are you?
                </div>
                <Header />
                <div className="flex h-full">
                    <SideBare />
                    <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div >

    );
}

export default Layout;
