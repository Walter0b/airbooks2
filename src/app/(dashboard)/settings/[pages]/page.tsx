// // app/[...pages].js
// 'use client'

// import GenericCompactPage from '@/components/layout/dynamic-details-page'
// import { pagesConfig } from '../_page'

// export default function DynamicPage({
//     params,
//     searchParams,
// }: Readonly<{
//     params: { pages: string }
//     searchParams: { [key: string]: string | string[] | undefined }
// }>) {
//     console.log('🚀 ~ searchParams:', searchParams)
//     console.log('🚀 ~ DynamicPage ~ params.pages:', params)

//     const pageConfig = pagesConfig[params.pages]

//     if (!pageConfig) return <p>Page {params.pages} found</p>

//     const { fetchQuery, columns, tableOptions } = pageConfig

//     return (
//         <GenericCompactPage
//             fetchQuery={fetchQuery}
//             columns={columns}
//             tableOptions={tableOptions}
//         />
//     )
// }

// app/[...pages].js
'use client'

import GenericSettingsPage from '@/components/layout/dynamic-settings-page'
import { pagesConfig } from './_page'
import MiniSidebar from '@/components/sidebar/sidebar.mini'

export default function DynamicPage({
  params,
  searchParams,
}: Readonly<{
  params: { pages: string }
  searchParams: { [key: string]: string | string[] | undefined }
}>) {
  console.log('🚀 ~ searchParams:', searchParams)
  console.log('🚀 ~ DynamicPage ~ params.pages:', params)

  const pageConfig = pagesConfig[params.pages]

  if (!pageConfig) return <p>Page {params.pages} found</p>

  const { fetchQuery, columns, tableOptions, SideBar } = pageConfig

  return (
    <>
      {SideBar && <MiniSidebar MiniNavOptions={SideBar} />}
      <div className=" flex w-full flex-col bg-white">
        <GenericSettingsPage
          fetchQuery={fetchQuery}
          columns={columns}
          tableOptions={tableOptions}
        />

      </div>
    </>


  )
}
