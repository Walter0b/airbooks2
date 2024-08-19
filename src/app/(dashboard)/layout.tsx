'use client'

// import "./globals.css";
import Header from '@/components/header/header'
import { ModalProvider } from '@/states/context/ModalContext'
import { store } from '@/states/store'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
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
                <div className="flex h-full shrink grow basis-0 overflow-hidden">
                    <SessionProvider>
                        <Provider store={store}>
                            <ModalProvider>{children}</ModalProvider>
                        </Provider>
                    </SessionProvider>
                </div>
            </div>
        </div>
    )
}
