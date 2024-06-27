// app/[...slug].js
'use client'

import GenericCompactPage from '@/components/layout/dynamic-details-page'
import { pagesConfig } from '../_page'

export default function DynamicPage({
    params,
    searchParams,
}: Readonly<{
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}>) {
    console.log("🚀 ~ searchParams:", searchParams)
    console.log('🚀 ~ DynamicPage ~ params.slug:', params.slug)
 
    const pageConfig = pagesConfig[params.slug]

    if (!pageConfig) return <p>Page not found</p>

    const { fetchQuery, columns, tableOptions } = pageConfig

    return (
        <GenericCompactPage
            fetchQuery={fetchQuery}
            columns={columns}
            tableOptions={tableOptions}
        />
    )
}
