import { useSelector } from 'react-redux'
import { useParams } from 'next/navigation'
import { CatchData, TableDataType } from '../types/page-type/table.type'

const useCurrentPageData = (): TableDataType | null => {
    const { id } = useParams()
    // console.log('🚀 ~ useCurrentPageData ~ id:', id)
    const NumberId = parseInt(id as string, 10)

    const travelersData = useSelector(
        (state: { api: { queries: Record<string, CatchData> } }) =>
            state.api.queries
    )

    const requestData = Object.values(travelersData)[0] || {
        data: { data: [] },
    }
    const { data } = requestData

    const specificData =
        data.data.find((developer: any) => developer.id === NumberId) || null

    return specificData
}

export default useCurrentPageData
