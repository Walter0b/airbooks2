import { getCmpByAttr } from "@utils/functions/action";
import { ItemDetailsProps } from "@utils/models/interface/table";


export default function ItemDetails({ children, setOpenCompactList }: Readonly<ItemDetailsProps>) {
    function CloseCompactList() {
        setOpenCompactList?.(false)
    }
    const CompactListHeader = getCmpByAttr({
        children,
        value: 'compactListHeader',
        props: { CloseCompactList }
    })
    const CompactListBody = getCmpByAttr({
        children,
        value: 'compactListBody',
    })

    return (
        <div className=" h-full w-full sm:w-4/6 ">
            <div className="max flex h-16 w-full items-center justify-between space-x-4 rounded-sm border ">
                {CompactListHeader}
            </div>
            {CompactListBody}
        </div>
    )
}