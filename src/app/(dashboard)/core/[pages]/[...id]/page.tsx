// app/[...pages].js
'use client'

import GenericCompactPage from '@/components/layout/dynamic-details-page'
import { pagesConfig } from '../_page'

export default function DynamicPage({
    params,
    searchParams,
}: Readonly<{
    params: { pages: string }
    searchParams: { [key: string]: string | string[] | undefined }
}>) {
    console.log("🚀 ~ searchParams:", searchParams)
    console.log('🚀 ~ DynamicPage ~ params.pages:', params)

    const pageConfig = pagesConfig[params.pages]

    if (!pageConfig) return <p>Page {params.pages} found</p>

    const { fetchQuery, columns, tableOptions } = pageConfig

    return (
        <GenericCompactPage
            fetchQuery={fetchQuery}
            columns={columns}
            tableOptions={tableOptions}
        />
    )
}
