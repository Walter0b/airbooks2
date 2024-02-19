import { getCmpByAttr } from '@utils/functions/action'
import { PageProps } from '@utils/models/interface/page'
import { Outlet } from 'react-router-dom';

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
                <div className={` flex-1 min-w-96 w-full`}>
                    <div className="max flex h-16 w-full items-center justify-between space-x-4 rounded-sm  border-y border-r">
                        {Header}
                    </div>
                    {Body}
                </div>
            }
            <Outlet />
        </div>
    )
}
