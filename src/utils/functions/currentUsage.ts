import {DetailComponentInputs} from "@/utils/types/page-type/table.type";

function groupElementsByGroup(detailComponentInputs: DetailComponentInputs[] | any[]): DetailComponentInputs[][] {
    return detailComponentInputs.reduce((acc, detailComponentInput) => {
        const { group } = detailComponentInput
        if (!acc[group]) acc[group] = []
        acc[group].push(detailComponentInput)
        return acc
    }, [])
}

export { groupElementsByGroup }