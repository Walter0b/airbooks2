import {DetailComponentInputs} from "@/utils/types/page-type/table.type";

function currentUsage(detailComponentInputs: DetailComponentInputs[] | any[]): Record<string, any> {
    return detailComponentInputs.reduce((acc, detailComponentInput) => {
        const { group } = detailComponentInput
        if (!acc[`group ${group}`]) acc[`group ${group}`] = []
        acc[`group ${group}`].push(detailComponentInput)
        return acc
    }, [])
}

export { currentUsage }