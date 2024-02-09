type StilizeType = {
    key: string,
    item: any
}
export function StylizeFullTableTravelerItems({key, item}: StilizeType){
    if(key == "FCY"){
        return "text-green-550"
    }

    if(key == "OverLimit"){
        //if(item[key] < 0)return "text-green-550"

        if(item[key].startsWith('-')) return "text-green-550"
        return "text-red-550"
    }

    if(key == "Status"){
        if(["paid", "closed", "used"].includes(item[key].toLocaleLowerCase())) return  "text-green-550"
        if(item[key].toLocaleLowerCase().startsWith('over')) return  "text-red-550"
        if(item[key].toLocaleLowerCase().startsWith('due') || item[key].toLocaleLowerCase().startsWith('pend')) return  "text-blue-550"
        if(item[key].toLocaleLowerCase() == 'open') return  "text-blue-550"
    }
}