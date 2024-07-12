'use client'
import DisplayModal from '@/components/modal/modal.display'
import SideBar from '@/components/sidebar/sidebar'
import { reportNavigation } from '@/static/page/sidebar'
import reportWebVitals from '@/utils/reportWebVitals'
import React from 'react'

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <SideBar canCompact={false} navigation={reportNavigation} />
            <main className="mb-14 flex w-full flex-col bg-white">
                {children}
                <DisplayModal />
            </main>
        </>
    )
}
reportWebVitals();