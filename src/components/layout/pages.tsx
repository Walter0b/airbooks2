import { getCmpByAttr } from '@/utils/functions/getCmpByAttr'
import { PageProps } from '@/utils/models/interface/page'
import { Outlet } from 'next/navigation'

export default function Pages({ children }: Readonly<PageProps>) {
    const Header = getCmpByAttr({
        children,
        value: 'header',
    })

    const Body = getCmpByAttr({
        children,
        value: 'body',
    })
    // console.log("🚀 ~ Body ~ Table:", Header)
    // console.log("🚀 ~ Body ~ CompactList:", Header?.props.children[0].props)
    return (
        <div className="flex h-full ">
            {
                <div className={`w-full min-w-96 flex-1 overflow-hidden`}>
                    <div className="flex h-16 items-center rounded-sm border-y max-sm:gap-9 sm:justify-between md:h-20">
                        {Header}
                    </div>
                    {Body}
                </div>
            }
            {/* <Outlet /> */}
        </div>
    )
}
