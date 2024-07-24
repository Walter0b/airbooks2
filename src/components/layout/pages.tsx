import { getCmpByAttr } from '@/utils/functions/getCmpByAttr'
import { PageProps } from '@/utils/types/page-type/page.type'

export default function Pages({ children }: Readonly<PageProps>) {
    console.log('🚀 ~ Pages ~ children:', children)
    const Header = getCmpByAttr({
        children,
        value: 'header',
    })

    const Body = getCmpByAttr({
        children,
        value: 'body',
    })
    return (
        <div className="flex h-full ">
            {
                <div className={`w-full min-w-96 flex-1 overflow-hidden`}>
                    {Header}
                    {Body}
                </div>
            }
            {/* <Outlet /> */}
        </div>
    )
}
