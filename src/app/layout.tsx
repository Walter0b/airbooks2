import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
  /* eslint-disable "react-refresh/only-export-components" */
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    icons: {
        icon: '/favicon.ico',
    },
    title: 'AirBooks',
    description: "AirBooks Next app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
