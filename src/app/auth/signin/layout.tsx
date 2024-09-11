"use client"
import { DevProvider } from '@/states/context/devContext'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <DevProvider>

            {children}
        </DevProvider>

    );
}
