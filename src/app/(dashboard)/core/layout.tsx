'use client'
import DisplayModal from '@/components/modal/display-modal'
import SideBar from '@/components/sidebar/sidebar'
import { coreNavigation } from '@/static/page/sidebar'
import React from 'react'

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <SideBar navigation={coreNavigation} />
            <main className="mb-14 flex w-full flex-col bg-white">
                {children}
                <DisplayModal />
            </main>
        </>
    )
}
