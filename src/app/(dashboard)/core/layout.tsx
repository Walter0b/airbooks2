'use client'
import DisplayModal from '@/components/modal/modal.display'
import SideBar from '@/components/sidebar/sidebar'
import { coreNavigation } from '@/static/sideBar/sidebar'
import React from 'react'

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    console.log('🚀 ~ children:', children)
    return (
        <>
            <SideBar navigation={coreNavigation} />
            <main className=" flex w-full flex-col bg-white">
                {children}
                <DisplayModal />
            </main>
        </>
    )
}
