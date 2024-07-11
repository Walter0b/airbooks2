'use client'

// import "./globals.css";
import Header from '@/components/header/header'
import { ModalProvider } from '@/hooks/context/ModalContext'
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
           
        </div>
    )
}