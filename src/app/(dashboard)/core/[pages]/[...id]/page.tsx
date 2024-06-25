// app/[...slug].js
'use client'

import GenericCompactPage from '@/components/layout/dynamic-details-page'
import { pagesConfig } from '../_page'

export default function DynamicPage({
    params,
}: Readonly<{ params: { pages: string } }>) {
    console.log('🚀 ~ DynamicPage ~ params.slug:', params.pages)

    const pageConfig = pagesConfig[params.pages]

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
