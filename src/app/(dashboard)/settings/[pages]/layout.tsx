'use client'
import DisplayModal from '@/components/modal/modal.display'
import MiniSidebar from '@/components/sidebar/sidebar.mini'

import { settingsNavigation } from '@/static/sideBar/sidebar'
import React from 'react'

export default function settingsSubPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    console.log('🚀 ~ children:', children)
    return (
        <div className='flex'>
            {children}
        </div>
    )
}
