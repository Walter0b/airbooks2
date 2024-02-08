import { getCmpByAttr } from '@utils/functions/action'
import { PageProps } from '@utils/models/interface/page'
import { useState } from 'react'

export default function Pages({ children }: Readonly<PageProps>) {
    const [openCompactList, setOpenCompactList] = useState(false)

    const Header = getCmpByAttr({
        children,
        value: 'header',
    })

    const Body = getCmpByAttr({
        children,
        value: 'body',
        props: { openCompactList, setOpenCompactList },
    })
    const ItemDetails = getCmpByAttr({
        children,
        value: 'itemDetails',
        props: { setOpenCompactList },
    })

    return (
        <div className="flex h-full ">
            {
                <div className={` ${openCompactList ? 'sm:w-2/6' : 'w-full'} `}>
                    <div className="max flex h-16 w-full items-center justify-between space-x-4 rounded-sm  border-y border-r">
                        {Header}
                    </div>
                    {Body}
                </div>
            }

            {openCompactList && ItemDetails}
        </div>
    )
}
