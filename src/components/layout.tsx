import SideBar from "./sidebar/sidebar";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import './layout.css'
import Pages from "./pages";

function Layout() {
    return (
        <div className="flex h-svh w-svw  bg-white" id="layout">
            <div className="flex-1 flex w-full h-full flex-col overflow-hidden">
                <div className="flex item-center justify-center">
                    <div className="p-1 text-lg text-center text-black">
                        AirBooks is ready. Are you?
                    </div>
                    <button className="rounded-sm my-auto p-1 w-fit h-fit ml-1 font-medium bg-cyan-550 text-white !uppercase text-xs">
                        sign up now
                    </button>
                </div>
                <Header />
                <div className="flex h-full">
                    <SideBar />
                    <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
                        <Outlet />
                        <Pages />
                    </main>
                </div>
            </div>
        </div >

    );
}

export default Layout;
