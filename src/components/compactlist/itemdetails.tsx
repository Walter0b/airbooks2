import { getCmpByAttr } from '@/utils/functions/getCmpByAttr'
// import usePageName from '@/utils/functions/pageName';
import { ItemDetailsType } from '@/utils/types/page-type/table.type'

export default function ItemDetailsBody({
    children,
}: Readonly<ItemDetailsType>) {
    const CompactListHeader = getCmpByAttr({
        children,
        value: 'compactListHeader',
    })
    const CompactListBody = getCmpByAttr({
        children,
        value: 'compactListBody',
    })

    // const pageName = usePageName();
    // console.log("🚀 ~ pageName:", pageName)

    return (
        <div className="flex-grow h-full w-10/12">
            <div className="max flex h-10 w-full items-center justify-between space-x-4 rounded-sm md:h-16">
                {CompactListHeader}
            </div>
            {CompactListBody}
        </div>
    )
}
