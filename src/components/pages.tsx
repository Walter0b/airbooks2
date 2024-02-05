import { getCmpByAttr } from '@utils/functions/action'
import { pageProps } from '@utils/models/interface/page'

export default function Pages({ children }: Readonly<pageProps>) {
    const Header = getCmpByAttr({
        children,
        value: 'header',
    })

    const Body = getCmpByAttr({
        children,
        value: 'body',
    })
    return (
        <div className="h-full flex-row ">
            <div className="max flex  h-16 w-full items-center justify-between space-x-4 rounded-sm  border">
                {Header}
            </div>
            {Body}
        </div>
    )
}
