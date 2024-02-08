import { getCmpByAttr } from '@utils/functions/action'
import { BodyProps } from '@utils/models/interface/page'

export default function Body({
    children,
    openCompactList,
    setOpenCompactList,
}: Readonly<BodyProps>) {
    function onClickHandler() {
        setOpenCompactList?.(!openCompactList)
    }

    const Table = getCmpByAttr({
        children,
        value: 'table',
        props: { onClickHandler },
    })

    const CompactList = getCmpByAttr({
        children,
        value: 'compactList',
    })

    return (
        <div className="flex h-full ">
            {openCompactList ? CompactList : Table}
        </div>
    )
}
