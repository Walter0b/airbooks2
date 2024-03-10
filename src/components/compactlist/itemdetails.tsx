import { getCmpByAttr } from '@utils/functions/action'
import { ItemDetailsType } from '@utils/models/interface/table'

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

    return (
        <div className="border flex-grow h-full w-10/12">
            <div className="max mb-10 flex h-16 w-full items-center justify-between space-x-4 rounded-sm">
                {CompactListHeader}
            </div>
            {CompactListBody}
        </div>
    )
}
