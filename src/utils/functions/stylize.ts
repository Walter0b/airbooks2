type StilizeType = {
    key: string,
    value: string
}
export function stylize({key, value}: StilizeType){
    if(key == "FCY"){
        return "text-green-550"
    }

    if(key == "OverLimit"){
        if(value.startsWith('-')) return "text-green-550"
        return "text-red-550"
    }

    if(key == "Status"){
        if(["paid", "closed", "used"].includes(value.toLocaleLowerCase())) return  "text-green-550"
        if(value.toLocaleLowerCase().startsWith('over')) return  "text-red-550"
        if(value.toLocaleLowerCase().startsWith('due') || value.toLocaleLowerCase().startsWith('pend')) return  "text-blue-550"
        if(value.toLocaleLowerCase() == 'open') return  "text-blue-550"
    }
}