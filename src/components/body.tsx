import { getCmpByAttr } from '@/utils/functions/action'
import { BodyProps } from '@/utils/models/interface/page'
import { useParams } from 'react-router-dom';

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
        <div className="h-full w-full flex overflow-auto border">
            {id ? CompactList : Table}
        </div>
    )
}
