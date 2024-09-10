import { CompactListMainButtons } from '@/utils/types/page-type/table.type'

function groupElementsByGroup(
    /* eslint-disable-next-line "@typescript-eslint/no-explicit-any" */
    detailComponentInputs: CompactListMainButtons[] | any[]
): CompactListMainButtons[][] {
    return detailComponentInputs.reduce((acc, detailComponentInput) => {
        const { group } = detailComponentInput
        if (!acc[group]) acc[group] = []
        acc[group].push(detailComponentInput)
        return acc
    }, [])
}

export { groupElementsByGroup }
