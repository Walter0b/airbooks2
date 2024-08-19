'use client'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex h-screen w-screen  bg-white" id="layout">
            {children}
        </div>
    )
}
