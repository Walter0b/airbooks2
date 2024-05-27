import { getCmpByAttr } from '@/utils/functions/getCmpByAttr'
import { PageProps } from '@/utils/models/interface/page'
import { Outlet } from 'next/navigation';

export default function Pages({ children }: Readonly<PageProps>) {

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
                <div className={`flex-1 min-w-96 w-full overflow-hidden`}>
                    <div className="flex h-16 md:h-20 items-center max-sm:gap-9 sm:justify-between rounded-sm border-y">

                        {Header}
                    </div>
                    {Body}
                </div>
            }
            {/* <Outlet /> */}
        </div>
    )
}
