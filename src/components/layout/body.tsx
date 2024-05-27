import { getCmpByAttr } from '@/utils/functions/getCmpByAttr'
import { BodyProps } from '@/utils/models/interface/page'
import { useParams } from 'next/navigation';

export default function Body({
    children,
}: Readonly<BodyProps>) {
    const { id } = useParams();

    const Table = getCmpByAttr({
        children,
        value: 'table',
    })

    const CompactList = getCmpByAttr({
        children,
        value: 'compactList',
    })

    return (
        <div className="h-full w-full flex overflow-hidden border">
            {id ? CompactList : Table}
        </div>
    )
}
