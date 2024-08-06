'use client'
import DisplayModal from '@/components/modal/modal.display'
import React from 'react'

export default function settingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    console.log('🚀 ~ children:', children)
    return (
        <>
            {/* <SideBar navigation={settingsNavigation} /> */}
            <main className=" flex w-full flex-col bg-white">
                {children}
                <DisplayModal />
            </main>
        </>
    )
}
