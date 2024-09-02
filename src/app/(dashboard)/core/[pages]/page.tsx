// app/[...slug].js
'use client'

import GenericTablePage from '@/components/layout/dynamic-table-page'
import { pagesConfig } from './_pagesConfig'

export default function DynamicPage({
    params,
    searchParams,
}: Readonly<{
    params: { pages: string }
    searchParams: { [key: string]: string | string[] | undefined }
}>) {
    console.log('🚀 ~ searchParams:', searchParams)
    console.log('🚀 ~ DynamicPage ~ params.slug:', params.pages)

    const pageConfig = pagesConfig[params.pages]

    if (!pageConfig) return <p>Page not found</p>

    const { fetchQuery, columns, tableOptions } = pageConfig

    return (
        <GenericTablePage
            param={searchParams}
            fetchQuery={fetchQuery}
            columns={columns}
            tableOptions={tableOptions}
            pageName={params.pages}
        />
    )
}
